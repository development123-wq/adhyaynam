
import { useState } from 'react';
import dynamic from 'next/dynamic'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
import { convertToRaw, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function Addblog() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState();
  const [date, setDate] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDes, setMetaDes] = useState('');
  const [imgAtl, setImgAtl] = useState('Image');
  const [image, setImage] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const uploadImageCallBack = async (file) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("image", file);
      const token = localStorage.getItem('token');

      fetch(`/api/admin/upload-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.url, ' data url');
          resolve({ data: { link: `${data.url}` } });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
  };

  const convertContentToHTML = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState);
    setContent(html);
    console.log(html)
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('metaTitle', metaTitle);
    formData.append('metaDes', metaDes);
    formData.append('content', content);
    formData.append('date', date);
    formData.append('image', image);
    formData.append('imgAtl', imgAtl);

    try {
      const response = await fetch('/api/admin/add-blog', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setTitle('');
        setSlug('');
        setDate('');
        setMetaDes('');
        setMetaTitle('');
        setImage(null);
        setEditorState('')
        setImgAtl('');
        alert('Add blog successfully !')
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            required
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-gray-700">Slug</label>
          <input
            type="text"
            id="slug"
            required
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metaTitle" className="block text-gray-700">Meta Title</label>
          <input
            type="metaTitle"
            id="metaTitle"
            required
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Meta Title - (Max 60 Character )"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metaDes" className="block text-gray-700">Meta Description</label>
          <input
            type="metaDes"
            id="metaDes"
            required
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Meta Description - (Max 160 Character )"
            value={metaDes}
            onChange={(e) => setMetaDes(e.target.value)}
          />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Image</label>
            <input
              type="file"
              id="image"
              required
              accept="image/*"
              className="w-full border border-gray-300 rounded-md p-[6px]"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Image Name</label>
            <input
              type="setImgAtl"
              id="setImgAtl"
              required
              placeholder='Image Name'
              className="w-full border border-gray-300 rounded-md p-2"
              value={imgAtl}
              onChange={(e) => setImgAtl(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4 bg-white border">
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              image: {
                uploadCallback: uploadImageCallBack,
              },
            }}
          />
        </div>
        <button
          onClick={convertContentToHTML}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
