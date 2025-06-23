"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="banner mt-[75px] md:mt-0"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <Slider {...settings}>
      <section id="home" className="relative z-10 overflow-hidden">
          <Link href="/contact">
            <div
              className="flex flex-col items-center justify-center content-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pb-10 h-[28vh] sm:h-[45vh]  lg:h-[90vh]"
              style={{ alignItems: "end" }}
            ></div>
            <div className="absolute top-0 right-0 z-[-1] ">
              <img
                src="/img/hero-4.jpg"
                className="h-[28vh] sm:h-[45vh]  lg:h-[86vh]"
                alt="best cuet coching institute in dwarka"
              />
            </div>
          </Link>
        </section>

        <section id="home" className="relative z-10 overflow-hidden">
          <Link href="/contact">
            <div
              className="flex flex-col items-center justify-center content-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pb-10 h-[28vh] sm:h-[45vh]  lg:h-[90vh]"
              style={{ alignItems: "end" }}
            ></div>
            <div className="absolute top-0 right-0 z-[-1] ">
              <img
                src="/img/hero-1.webp"
                className="h-[28vh] sm:h-[45vh]  lg:h-[85vh]"
                alt="best cuet coching institute in dwarka"
              />
            </div>
          </Link>
        </section>

        <section id="home" className="relative z-10 overflow-hidden">
          <Link href="/contact">
            <div
              className="flex flex-col items-center justify-center content-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pb-10 h-[28vh] sm:h-[45vh]  lg:h-[90vh] "
              style={{ alignItems: "end" }}
            ></div>
            <div className="absolute top-0 right-0 z-[-1] ">
              <Image
                src="/img/hero-2.webp"
                height={500}
                width={2000}
                className=" h-[28vh] sm:h-[45vh]  lg:h-[80vh]"
                alt="best cs coching institute in dwarka"
              />
            </div>
          </Link>
        </section>

        <section id="home" className="relative z-10 overflow-hidden">
          <Link href="/contact">
            <div
              className="flex flex-col items-center justify-center content-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pb-10 h-[28vh] sm:h-[45vh]  lg:h-[90vh] "
              style={{ alignItems: "end" }}
            ></div>
            <div className="absolute top-0 right-0 z-[-1] ">
              <Image
                src="/img/hero-3.webp"
                height={500}
                width={2000}
                className=" h-[28vh] sm:h-[45vh]  lg:h-[80vh]"
                alt="best ca coching institute in dwarka"
              />
            </div>
          </Link>
        </section>
      </Slider>
    </div>
  );
};

export default Hero;
