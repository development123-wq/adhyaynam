"use client";
import { useEffect, useState } from "react";
import SingleBlog from "../../components/Blog/SingleBlog";
import Breadcrumb from "../../components/Common/Breadcrumb";
import "../../app/index.css";
import Headers from "../../components/Header";

// export const metadata = {
//   metadataBase: new URL("https://bellamenteschools.com"),
//   title: "Blogs - Best Quality Education and After School Services",
//   description: "We are a unique vedas' inspired school brand.",
//   verification: {
//     google: "rpIaobidHngfZyekdHZiaoPBJJ8Sw013QGYRf7LIFyg",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//   },
//   og: {
//     title:
//       "Bella Mente Preschool | Best Quality Education and After School Services |",
//     description: "We are a unique vedas' inspired school brand.",
//     image: "https://bellamenteschools.com/images/logo/logo.webp",
//     url: "https://bellamenteschools.com/",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Bella Mente Preschool and Day Care",
//     description: "Providing Quality Early Education and Child Care Services",
//     image: "https://bellamenteschools.com/images/logo/logo.webp",
//   },
//   favicon: "/FavIcon.webp",
// };

const Blog = () => {
  const [blogData, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);
  return (
    <>
      <head>
        <title> Our Blogs | Adhyayanam Academy</title>
        <meta charset="UTF-8" />

        <meta property="og:title" content={" Our Blogs | Adhyayanam Academy"} />

        <meta
          property="og:image"
          content="https://adhyayanamacademy.com/Logo.png"
        />
        <meta
          property="og:url"
          content={"https://adhyayanamacademy.com/blog/"}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={" Our Blogs | Adhyayanam Academy"}
        />

        <meta
          name="twitter:image"
          content="https://adhyayanamacademy.com/Logo.png"
        />
        <meta
          name="google-site-verification"
          content="rpIaobidHngfZyekdHZiaoPBJJ8Sw013QGYRf7LIFyg"
        />
        <meta name="robots" content="index,follow,nocache" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PP6L5RB');`,
          }}
        />
      </head>
      <Headers></Headers>
      <Breadcrumb pageName="Blog Grid" />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap ">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="mt-7 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
