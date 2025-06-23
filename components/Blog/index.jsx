'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog"; 

const Blog = () => {
  const [blogData, setBlogs] = useState([]);


  useEffect(() => { 
    fetch('/api/admin/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <section id="blog" className="bg-black/5 py-16 md:py-20 lg:py-28">
      <div className="sm:container mx-4">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
