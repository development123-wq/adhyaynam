"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../Common/SectionTitle";

const Awards = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // for big screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // for tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section>

            <div className=" banner mt-10" style={{ width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                <SectionTitle
                    title="Awards"
                    center
                    width='100%'
                />
                <Slider {...settings}>
                    <img src="/images/Awards/award1.png" alt="awards-bella-mente"></img>
                    <img src="/images/Awards/award2.png" alt="awards-bella-mente"></img>
                    <img src="/images/Awards/award4.png" alt="awards-bella-mente"></img>
                    <img src="/images/Awards/award5.png" alt="awards-bella-mente"></img>
                    <img src="/images/Awards/award2.png" alt="awards-bella-mente"></img>
                </Slider>
            </div>
        </section>
    );
};

export default Awards;
