import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import menuData from "../Header/menuData";

const Footer = () => {
  const coures = menuData.filter((item) => item.title == "courses");
  const [courses] = coures;

  return (
    <>
      <footer className="relative z-10 bg-[#f0f0f0] pt-10 pb-16 sm:pb-10 ">
        <div className="container">
          <div className="flex flex-wrap  justify-center align-center ">
            <div className="w-full sm:px-4 sm:w-2/3 lg:w-4/12">
              <div className="w-full mb-10">
                <a href="/" className="mb-6 inline-block max-w-[160px]">
                  <img src="/Logo.png" alt="logo" className="max-w-full" />
                </a>
                <p className="text-dark mb-7 ">
                  Offering versatile courses for entrance exams like CA, CS,
                  CUET, among others, Adhyayanam Academy aims to nurture the
                  young minds of India.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>+91-9311430-127/128/129</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>info@adhyayanamacademy.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* small screen */}
            <div className="w-full flex sm:hidden pb-5">
              <LinkGroup header="COURSES">
                {courses?.submenu?.slice(0, 5).map((item) => (
                  <>
                    <NavLink
                      link={item?.path}
                      label={item.title.toLowerCase()}
                    />
                  </>
                ))}
              </LinkGroup>
              <LinkGroup header="QUICK LINKS">
                <NavLink link="/" label="Home" />
                {/* <NavLink link="/cuet" label="Courses" /> */}
                <NavLink link="/about" label="About" />
                <NavLink link="/contact" label="Contact" />
                <NavLink link="/blog" label="Blog" />
                <NavLink link="/Quiz" label="Quiz" />
                {/* <NavLink link="/" label="Terms & Conditions" /> */}
              </LinkGroup>
            </div>

            <div className="hidden sm:block ">
              <LinkGroup header="COURSES">
                {courses?.submenu?.slice(0, 5).map((item) => (
                  <>
                    <NavLink
                      link={item?.path}
                      label={item.title.toLowerCase()}
                    />
                  </>
                ))}
              </LinkGroup>
            </div>
            <div className="hidden sm:block ">
              <LinkGroup header="QUICK LINKS">
                <NavLink link="/" label="Home" />
                {/* <NavLink link="/cuet" label="Courses" /> */}
                <NavLink link="/about" label="About" />
                <NavLink link="/contact" label="Contact" />
                <NavLink link="/blog" label="Blog" />
                <NavLink link="/Quiz" label="Quiz" />
              </LinkGroup>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-4/12 ">
              <div className="w-full mb-10 sm:pl-6">
                <h4 className="uppercase text-2xl font-semibold mb-9 text-dark">
                  Follow us On
                </h4>
                <div className="flex items-center mb-6">
                  <a
                    href="https://www.facebook.com/AdhyayanamAcademyOfficial/"
                    target="blank"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-dark text-dark hover:border-red hover:bg-red hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width={8}
                      height={16}
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCc0R-GE69u7aU-HDDo679Dg"
                    target="blank"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-dark text-dark hover:border-red hover:bg-red hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width={16}
                      height={12}
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/adhyayanam_academy/"
                    target="blank"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-dark text-dark hover:border-red hover:bg-red hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <FontAwesomeIcon className="h-6 w-6" icon={faInstagram} />
                  </a>
                </div>

                <div class="">
                  <h3 class="text-lg font-semibold text-dark mb-3">
                    {" "}
                    Get Our App{" "}
                  </h3>
                  {/* <p> Stay fit. All day, every day. </p> */}
                  <div class="flex  ">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.udayateschool.adhyayanam"
                      target="blank"
                      class="flex items-center border w-auto rounded-lg px-1 py-1  mx-1"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                        class="w-5 md:w-5"
                        alt="google-paly"
                      />
                      <div class="text-left ml-3">
                        <p class="text-[8px]">Download on </p>
                        <p class="text-xs"> Google Play Store </p>
                      </div>
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/adhyaynam/id1590656216"
                      target="blank"
                      class="flex items-center border w-auto rounded-lg px-2 py-1  mx-1"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                        class="w-5 md:w-5"
                        alt="apple-store"
                      />
                      <div class="text-left ml-3">
                        <p class="text-[8px]">Download on </p>
                        <p class="text-xs"> Apple Store </p>
                      </div>
                    </a>
                  </div>
                  <p className="text-[14px] my-2">
                    <span className="font-bold">Address:</span> 
                    306,307 and 308, top floor, krishna mall plot no. 5, sector
                    -12, dwarka, New delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-dark justify-center align-center flex mt-5 px-5">
          <p>
            {" "}
            Copyright © {new Date().getFullYear()} Adhyayanam Academy | Powered
            by{" "}
            <a
              href="https://plasseytechnologies.in/"
              className="text-dark pl-1"
            >
              {" "}
              Plassey Technologies Pvt. Ltd.{" "}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full sm:mx-4 ">
        <div className="w-full ">
          <h4 className="text-2xl font-semibold mb-9 text-dark"> {header} </h4>
          <ul className="uppercase">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <div>
      <li>
        <Link
          href={link}
          className={`uppercase inline-block mb-2 text-sm text-dark   hover:text-red `}
        >
          {label}
        </Link>
      </li>
    </div>
  );
};
