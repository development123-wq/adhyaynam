import React from "react";

export const metadata = {
  metadataBase: new URL("https://bellamenteschools.com"),
  title: "Our Group ",
  description:
    "We are a unique vedas' inspired school brand. Best Quality Education and After School Services",

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  og: {
    title:
      "Bella Mente Preschool | Best Quality Education and After School Services |",
    description: "We are a unique vedas' inspired school brand.",
    image: "https://bellamenteschools.com/images/logo/logo.webp",
    url: "https://bellamenteschools.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Mente Preschool and Day Care",
    description: "Providing Quality Early Education and Child Care Services",
    image: "https://bellamenteschools.com/images/logo/logo.webp",
  },
  favicon: "/FavIcon.webp",
  additionalHead: (
    <>
      {/* Search Console Verification Code */}
      <meta
        name="google-site-verification"
        content="6TeTstykRAQJQdvl5CwuIGSAplKKI3S_vobJqN7LpTU"
      />

      {/* Google Analytics */}
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

      {/* Schema for all pages */}
      {/* <script type="application/ld+json">
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
    </>
  ),
};

const Conglomerate = () => {
  // useEffect(() => {
  //   // Remove the scrollbars from the iframe
  //   const iframe = document.querySelector('iframe');
  //   if (iframe) {
  //     iframe.style.overflow = 'hidden';
  //   }
  // }, []);

  return (
    <>
      <div className="mx-5 sm:mx-16">
        <div className="border-b border-body-color/[.15] pb-5 dark:border-white/[.15]">
          {/* <Breadcrumb pageName="Our Conglomerate" description="" /> */}

          <div className="mt-12 flex justify-center align-center">
            <iframe
              src="/Our-Conglomerate.pdf#view=FitH"
              title="Our Conglomerate PDF"
              width="60%"
              height="600px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conglomerate;
