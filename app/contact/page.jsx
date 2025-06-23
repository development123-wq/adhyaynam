import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata = {
  metadataBase: new URL("https://adhyayanamacademy.com/"),
  title: "Contact Us - Adhyayanam Academy",
  description:
    "Offering versatile courses for entrance exams like CA, CS, CUET, among others, Adhyayanam Academy aims to nurture the young minds of India. +91-8447690649",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  og: {
    title: "Free Online Demo Class At Adhyayanam Academy",
    description:
      "Adhyayanam Academy offers a free online and offline demo class to all interested students. Furthermore, potential students may contact Adhyayanam Academy for a free counselling session.",
    image: "/Logo.png",
    url: "https://adhyayanamacademy.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Demo Class At Adhyayanam Academy",
    description:
      "Adhyayanam Academy offers a free online and offline demo class to all interested students. Furthermore, potential students may contact Adhyayanam Academy for a free counselling session.",
    image: "/Logo.png",
  },
  favicon: "/Logo.png",
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

const ContactPage = async () => {
  return (
    <div>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </div>
  );
};

export default ContactPage;
