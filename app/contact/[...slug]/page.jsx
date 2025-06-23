import { getDataBySlug } from "../franchiesData";


const BlogSidebarPage = async ({ params }) => {
    const [slug] = params.slug;
    const center = await getDataBySlug(slug);

    if (!center) {
        return <div>Center not found</div>;
    }

    return (
        <>
            <head>
                <title>{center.title}</title>
                <link rel="icon" href="/FavIcon.webp" />
                <link rel="canonical" href="https://bellamenteschools.com/" />
                <meta name="description" content="Nestled in the sprawling, green and secure heart of the city, this branch of Bella Mente is the flagship school of our rapidly growing chain of preschools across India." />

                <meta property="og:title" content="Bella Mente Preschool | Best Quality Education and After School Services |" />
                <meta property="og:description" content="We are a unique vedas' inspired school brand." />
                <meta property="og:image" content="https://bellamenteschools.com/images/logo/logo.webp" />
                <meta property="og:url" content="https://bellamenteschools.com/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bella Mente Preschool and Day Care" />
                <meta name="twitter:description" content="Providing Quality Early Education and Child Care Services" />
                <meta name="twitter:image" content="https://bellamenteschools.com/images/logo/logo.webp" />
                <meta name="google-site-verification" content="rpIaobidHngfZyekdHZiaoPBJJ8Sw013QGYRf7LIFyg" />
                <meta name="robots" content="index,follow,nocache" />
            </head>
            <section className="pb-[120px] pt-[85px] sm:pt-[120px]">
                <div className="sm:container">
                    <div className="w-full">
                        <img src={center.image} className="px-5 py-5 sm:w-[450px] " style={{ float: 'left' }} />
                        <h2 className="p-5  text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                            {center.title}
                        </h2>
                        {center.paragraph.map((e) => (
                            <p className="px-5 mb-6 text-base font-medium  sm:text-lg  xl:text-lg text-justify" key={e}>
                                {e}
                            </p>
                        ))}
                    </div>
                    <div className="card px-5  pt-10 w-full">
                        <div class="flex flex-col bg-white dark:bg-neutral-700  md:flex-row">

                            {center.ad_image ?
                                <img
                                    class=" w-full  object-cover md:h-60 md:w-70 mb-5 "
                                    src={center.ad_image}
                                    alt={center.ad} />
                                :
                                <svg class=" text-gray-400 " width='50%' style={{ maxWidth: "200px" }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            }

                            <div class="flex flex-col  sm:px-6">
                                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                                    {center.ad}
                                </h5>
                                <h6 className="mb-2 text-sm font-medium text-neutral-600 ">Associate Director</h6>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-justify">
                                    {center.ad_disc}
                                </p>
                                <p class="text-md text-dark">
                                    {center.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 ">
                        <div className="py-6 px-5">
                            <h1 className="text-3xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>{center.address}</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>{center.number}</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>{center.email}</span>
                                </p>
                            </div>
                        </div>
                        <div class="bg-gray-200 py-6 md:py-0 md:px-6 order-last sm:order-first">
                            <iframe class="w-full h-64 sm:h-[350px]" src={center.iframesrc} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSidebarPage;
