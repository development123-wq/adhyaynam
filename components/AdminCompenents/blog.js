'use client'
import { useEffect, useState } from 'react'; 


function GetBLog() {
  const [blogs, setBlogs] = useState([]);

  const fetchblogdata = () => {
    fetch('/api/admin/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }

  useEffect(() => {
    fetchblogdata()
  }, []);

  const handledelete = async (id) => {
    const userInput = window.confirm('Do you want to Delete?');
    if (userInput) {
      try {
        const response = await fetch('/api/admin/delete-blog', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          const result = await response.json();
          alert('Delete Successfuly !')
          fetchblogdata()
        } else {
          console.error('Failed to delete quiz');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  return (
    <div>
      <h1 className='font-bold text-xl'>Blogs</h1>
      <ul>
        {blogs?.length > 0 ? blogs.map((blog, index) => (
          <div className='border m-1 p-2' key={blog._id}>
            <div className='grid grid-cols-3 '>
              <div className='col-span-2'>
                <h2 className='text-left'>Title : {blog.title}</h2>
                <p className='text-left'>Date : {blog?.date}</p>
                <p className='text-left text-red cursor-pointer mt-10' onClick={() => handledelete(blog._id)}>Delete Blog</p>
              </div>
              <img src={blog.imageUrl} alt={blog.title} className='w-100 ' />
            </div>
            {/* {parse(blog.content)} */}
          </div>
        )) : ''}
      </ul>
    </div>
  );
}

export default GetBLog;
