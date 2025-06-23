import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';

const SingleBlog = ({ blog }) => {
  const { title, imageUrl, paragraph, author, tags, date, description, slug, id } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s" >
        <a href={`/blog/${slug}`} className="relative block h-[220px] w-full">
          <img src={`${imageUrl}`} alt="image" className="h-[220px] w-full" />
        </a>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <a
              href={`/blog/${slug}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </a>
          </h3>
          <div className="flex items-center">
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
