import AboutSectionOne from "@/components/About/AboutSectionOne";

const AboutPage = () => {
  const title = "About US | Adhyayanam Academy";
  const description =
    "Adhyayanam Academy is the top coaching institute in Dwarka, Delhi. We are providing the best classes for CA, CS and CUET exam preparation";
  const keywords =
    "Best CUET coaching Institute In Dwarka, CUET Coaching Dwarka, CA coaching Dwarka, cs coaching in Dwarka, best ca coaching institute in delhi, Adhyayanam Academy";
  const clo = "https://adhyayanamacademy.com/about";
  return (
    <>
      <head>
        <title>{title}</title>
        <link rel="icon" href="/Logo.png" />

        <link rel="canonical" href={`${clo}`} />
        <meta name="description" content={description} />
        <meta keywords={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:url" content={`${clo}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/Logo.png" />

        <meta name="robots" content="index,follow,nocache" />
        {/* <!-- Search Console erification Code --> */}

        <meta
          name="google-site-verification"
          content="6TeTstykRAQJQdvl5CwuIGSAplKKI3S_vobJqN7LpTU"
        />

        {/* <!-- Google Analytics --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RPJT35CN2X"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RPJT35CN2X');
    `}
        </script>

        {/* <!--Schema for all pages --> */}
        {/* 
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Adhyayanam Academy",
            url: "https://adhyayanamacademy.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://adhyayanamacademy.com/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script> */}
      </head>
      <div className="  ">
        <div className="relative h-64  overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/about-banner.jpg"
            alt="ca coching in dwarka "
          />
          <div className="absolute inset-0 bg-red opacity-50"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          </div>
        </div>

        <div className="border-b border-body-color/[.15] pb-5 dark:border-white/[.15] ">
          {/* <Breadcrumb
            pageName="About Page"
            description=""
          /> */}
          <AboutSectionOne />

          <div className="container">
            <div className=" grid grid-cols-1 sm:grid-cols-3">
              {/* Image side */}
              <div className="col-span-1">
                <img
                  src="/img/rajat-arya.png"
                  alt="best cs coching in dawarka"
                  className="h-full w-full "
                />
              </div>

              {/* Text side */}
              <div className="col-span-2 sm:p-8">
                <h2 className="text-4xl font-bold text-red">
                  Learn Something New Every Day
                </h2>
                <p className="mt-4 font-montserrat">
                  Young, innovative edupreneur, trainer and leader Mr. Rajat
                  Arya believes in the words, “Success is a continuous journey,
                  not a destination. Similarly, the actions are often more
                  important than the results.”
                </p>
                <p className="mt-4 font-montserrat">
                  With the aspiration to levitate education to a new level of
                  excellence, he started his journey with a clearly defined
                  vision of spreading quality education to unlock the golden
                  door of freedom.
                </p>
                <p className="mt-4 font-montserrat">
                  He is deeply inspired by an amazing quote, “Somewhere,
                  something incredible is waiting to be known.” He firmly
                  believes that innovation requires repeated attempts and
                  endless demonstrations by breaking the status quo.
                </p>
                <p className="mt-4 text-dark font-semibold">Mr. Rajat Arya</p>
                <p className="text-xs">Founder</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-3xl py-4 font-semibold text-red  text-center">
                Our Vision
              </h3>
              <p className=" font-montserrat">
                Adhyayanam Academy aims to provide the highest quality of
                education in the most accessible, affordable manner, such that
                everyone, regardless of age, social standing, and background,
                can learn together in a unified way.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-3xl py-4 font-semibold text-red text-center">
                Mission
              </h3>
              <p className=" font-montserrat">
                Utilize the most cutting-edge technology currently being
                implemented in the field of education to further the cause of
                learning. <br />
                Provide accessible education to all. <br />
                Continuously innovate on teaching practices while keeping up to
                date with the latest trends in the industry. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
