"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import menuData from "./menuData";

const Headers = () => {
  const [data, setData] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/quiz/get-quiz");
      if (response.ok) {
        const result = await response.json();
        const allCourse = result.map((cors) => cors.course);
        const unikCourse = new Set(allCourse);
        const allCors = Array.from(unikCourse);
        setData(allCors);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
          }`}
      > */}
      <div
        className="  left-0 z-40 !z-[9999]  w-full items-center  bg-white "
        style={{ borderBottom: "1px solid gray" }}
      >
        <div className="flex  w-full items-center  !z-[9999] h-8 bg-gradient-to-r from-dark to-red   pr-1 hidden md:flex">
          <div>
            <a
              href="mailto:admissions@bellamenteschools.com"
              className="text-sm px-4 text-white "
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            >
              <span style={{ fontSize: "16px" }}>✉</span>{" "}
              info@adhyayanamacademy.com
            </a>
            <span className=" text-white px-2">|</span>
            <a
              href="tel:919311430129"
              className="text-sm px-2 text-white "
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            >
              {" "}
              <span style={{ fontSize: "16px" }}>✆</span> +91-9311430129
            </a>
          </div>
          <div className="ml-auto">
            <a
              className="facebookicon text-white ml-3 hover:text-blue-700 text-sm"
              title="Facebook"
              href="https://www.facebook.com/AdhyayanamAcademyOfficial"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            </a>
            <a
              className="twittericon text-white ml-3 hover:text-blue-700 text-sm"
              title="Instagram"
              href="https://www.instagram.com/adhyayanam_academy/"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />{" "}
            </a>
            <a
              className="twittericon text-white ml-3 hover:text-blue-700 text-sm"
              title="Linkedin"
              href="https://api.whatsapp.com/send?phone=919311430129&amp;text=Hi,%20I%20have%20a%20query"
            >
              {" "}
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            </a>
            <a
              className="googleicon text-white ml-3 hover:text-blue-700 text-sm"
              title="youtube"
              href="https://www.youtube.com/channel/UCc0R-GE69u7aU-HDDo679Dg"
            >
              {" "}
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
            </a>
            <a
              className="googleicon text-white ml-3 hover:text-blue-700 text-sm pr-7"
              title="Linkdin"
              href="https://in.linkedin.com/company/bella-mente-pre-schools"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </div>
        </div>

        <header
          className={
            sticky
              ? `top-0 fixed header  left-0 z-[9999]  flex w-full items-center  bg-white `
              : `top-0 fixed  md:static   header  left-0 z-[9999]  flex w-full items-center  bg-white `
          }
        >
          <div className=" max-w-full py-2 px-2  xl:mr-10 ">
            <Link href="/" className={`header-logo block w-full `}>
              <img
                src="/Logo.png"
                alt="logo"
                className=" w-[300px] sm:w-[220px] sm:pl-8 pl-2"
              />
            </Link>
          </div>
          <div className="flex w-full py-1 items-center  px-4 justify-end pr-10">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden "
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0 " : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-dark transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[300px]  border-[.5px] border-body-color/50 bg-white py-4  duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-2 ">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="group relative liborder">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`uppercase menufont transition duration-300 font-bold  hover:scale-110   mx-6  py-2 flex  text-dark group-hover:text-red  lg:mr-0 lg:inline-flex lg:py-4 lg:px-0 `}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <a
                          onClick={() => handleSubmenu(index)}
                          className="uppercase  mx-6   menufont flex py-2 font-bold  cursor-pointer items-center justify-between   text-light group-hover:text-red transition duration-300  hover:scale-110   lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        >
                          {menuItem.title}
                          <span className="pl-1">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path
                                d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                        <div
                          className={`submenu relative  top-full left-0  bg-dark transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px]  lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                          style={{ backgroundColor: "#d0205b" }}
                        >
                          {menuItem.submenu.map((submenuItem) => (
                            <Link
                              href={submenuItem.path}
                              key={submenuItem.id}
                              onClick={() => setNavbarOpen(false)}
                              className="uppercase border-b   block  py-2.5 text-sm text-white hover:bg-dark  lg:px-1 "
                            >
                              <span className="ml-6">{submenuItem.title}</span>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}

                <li className="group relative liborder">
                  <>
                    <a
                      onClick={() => handleSubmenu(1)}
                      className="uppercase  mx-6   menufont flex py-2 font-bold  cursor-pointer items-center justify-between   text-light group-hover:text-red transition duration-300  hover:scale-110   lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                    >
                      Online Test
                      <span className="pl-1">
                        <svg width="15" height="14" viewBox="0 0 15 14">
                          <path
                            d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      className={`submenu relative  top-full left-0  bg-dark transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px]  lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                        openIndex === 1 ? "block" : "hidden"
                      }`}
                      style={{ backgroundColor: "#d0205b" }}
                    >
                      {data?.map((submenuItem) => (
                        <Link
                          href={`/Quiz/${submenuItem}`}
                          key={submenuItem}
                          onClick={() => setNavbarOpen(false)}
                          className="uppercase border-b   block  py-2.5 text-sm text-white hover:bg-dark  lg:px-1 "
                        >
                          <span className="ml-6">{submenuItem}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                </li>

                <li className="group relative liborder">
                  <Link
                    href="https://adhyayanamd.udtweb.com/"
                    onClick={() => setNavbarOpen(false)}
                    className={` uppercase menufont  mx-6 sm:mx-0  py-2 flex  text-white group-hover:bg-dark mt-1.5  lg:mr-0 lg:inline-flex lg:py-2 px-3 rounded-lg bg-red  `}
                  >
                    Student Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Headers;
