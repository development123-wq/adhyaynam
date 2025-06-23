"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./index.css";

export default function RootLayout({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark:bg-black">
        <Header />
        {children}
        <PopupForm isOpen={isPopupOpen} onClose={togglePopup} />
        <Footer />
        <ScrollToTop />
        <Sidebuttons />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKTHCPVF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          type="text/javascript"
          src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
        ></Script>
         {/* <!-- Google tag (gtag.js) --> */}
         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-MKTHCPVF"
        ></script>
 
           <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKTHCPVF');`,
          }}
        />
      </body>
    </html>
  );
}

import Sidebuttons from "../components/Sidebuttons/Sidebuttons";
import Script from "next/script";
import PopupForm from "@/components/Common/Popup";
import { useEffect, useState } from "react";
