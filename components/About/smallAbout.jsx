import Link from "next/link";
import React from "react";

function SmallAbout() {
  return (
    <div className="container mt-10">
      <h1
        className=" text-2xl text-center font-bold font-montserrat text-black   sm:text-3xl md:text-[45px] text-red "
        style={{ lineHeight: "3rem" }}
      >
        The Leading Platform for CA, CS, and CUET Coaching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="w-auto sm:w-[380px]  flex justify-center item-center animate-bounce-out">
          <img src="/img/about-1.jpg" alt="Adhyayanam Academy" />
        </div>
        <div className=" sm:mt-12 mt-0">
          <p className="text-xl font-light p-2 font-montserrat text-justify">
            From helping students prepare for{" "}
            <Link href="/ca-coaching-in-dwarka">Chartered Accountancy</Link> and
            <Link href="/cs-coaching-in-dwarka"> Company Secretary exams </Link>
            to even the{" "}
            <Link href="/common-university-entrance-test-in-dwarka">
              Common University Entrance Test
            </Link>
            , Adhyayanam Academy has led concerted efforts for years to produce
            a teaching pedagogy that could help almost any student excel. Its
            elite educators, advanced teaching equipment, and engaging
            classrooms all contribute to building an environment tailor-made for
            learning. These factors, when brought together, combine to redefine
            education.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmallAbout;
