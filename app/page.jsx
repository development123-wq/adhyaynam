"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Ourprograms from "../components/Ourprograms";
import ChoseUs from "../components/whyChoseus";
import WhyChouse from "@/components/why";
import Contactnow from "@/components/Contact/contactnow";
import Faq from "@/components/faq";
import SmallAbout from "@/components/About/smallAbout";
import BgImage from "@/components/whyChoseus/indexImage";
import Link from "next/link";

export default function Home() {
  const title = "Best CUET, CA, and CS Coaching Institute in Dwarka, Delhi";
  const description =
    "Join the best CUET, CA and CS coaching institute in Dwarka Delhi. Adhyayanam Academy is offering best coaching classes in delhi for CA, CS and CUET exams.";
  const keywords =
    "Best CUET coaching Institute In Dwarka, CUET Coaching Dwarka, CA coaching Dwarka, cs coaching in Dwarka, best ca coaching institute in delhi,cuet classes in dwarka delhi";
  const clo = "  https://adhyayanamacademy.com";

  return (
    <>
      <head>
        <title>{title}</title>
        <link rel="icon" href="/Logo.png" />

        <link rel="canonical" href={`${clo}`} />
        <meta name="description" content={description} />
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

        {/* <!--Schema for all pages --> */}

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
        {/* 
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Adhyayanam Academy",
                item: "https://adhyayanamacademy.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Common University Entrance",
                item: "https://adhyayanamacademy.com/common-university-entrance-test-in-dwarka/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Chartered Accountant",
                item: "https://adhyayanamacademy.com/ca-coaching-in-dwarka",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Company Secretary",
                item: "https://adhyayanamacademy.com/cs-coaching-in-dwarka/",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact Us",
                item: "https://adhyayanamacademy.com/contact",
              },
            ],
          })}
        </script> */}
      </head>
      <ScrollUp />

      <Hero />

      <WhyChouse />
      <ChoseUs />
      <Ourprograms />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <Link
          href="https://play.google.com/store/apps/details?id=com.udayateschool.adhyayanam"
          className="h-[320px] sm:h-[420px] sm:col-span-2 md:col-span-3  w-[100%]"
        >
          <img
            className="h-[320px] sm:h-[420px] sm:col-span-2 md:col-span-3  w-[100%]"
            src="/img/mobileapp1.png"
            alt="best coching in dwarka"
          ></img>
        </Link>
        <img
          className=" h-[520px] sm:h-[420px] w-[100%]"
          src="/img/mobileapp.png"
          alt="top coching in dwarka"
        ></img>
      </div>
      <SmallAbout />
      <AboutSectionOne />
      <Contactnow />
      <BgImage />
      <Testimonials />
      <Faq />
    </>
  );
}
