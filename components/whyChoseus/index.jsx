"use client"
import React from "react";
import SectionTitle from "../Common/SectionTitle";

const ChoseUs = () => {

    const data = [
        {
            "id": 1,
            "title": "Experienced Teachers",
            "description": "Learn from the industry’s best experts."
        },
        {
            "id": 2,
            "title": "Industry’s Most Advanced Study Materials",
            "description": "Well-researched courses and books personally made by veterans in the field of education."
        },
        {
            "id": 3,
            "title": "Learning Pedagogy",
            "description": "Scientifically proven and time-tested teaching techniques."
        },
        {
            "id": 4,
            "title": "Mock Test Series",
            "description": "Step-by-step structured mock test series."
        },
        {
            "id": 5,
            "title": "Personal Mentorship",
            "description": "Our expert counsellors will help you overcome all career-related questions."
        },
        {
            "id": 6,
            "title": "Hybrid Learning",
            "description": "Never worry about missing classes with the Adhyayanam App."
        },
        {
            "id": 7,
            "title": "Economical Courses",
            "description": "All Adhyayanam Academy courses are affordable and accessible to all while remaining a cut above competitors in the quality of learning."
        },
        {
            "id": 8,
            "title": "Doubt-Solving Sessions",
            "description": "Clear your queries in specialized classes for solving queries."
        },
        {
            "id": 9,
            "title": "Interactive Environment",
            "description": "Study in an engaging environment while educators teach in personalized sessions."
        },
        {
            "id": 10,
            "title": "Up-To-Date Practices",
            "description": "Adhyayanam Academy consistently updates and evolves its teaching curriculum to ensure it keeps up with the latest trends in exam patterns."
        },
        {
            "id": 11,
            "title": "Crash Courses",
            "description": "Adhyayanam Academy offers crash courses for IXth, Xth, XIth, and XIIth (Commerce stream) students."
        },
        {
            "id": 12,
            "title": "Industry Leaders",
            "description": "Adhyayanam Academy offers some of the best CUET, CA, and CS courses in the field of education."
        }
    ]


    return (
        <div className="mt-5">
            <h2 className="  text-2xl text-center font-bold text-black  sm:text-3xl md:text-[45px] text-red ">Why Choose Adhyayanam Academy</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 sm:px-10 sm:container pt-5 mt-4 mx-3 ">
                {data.map((item) => (
                    <div key={item} class="bg-dark hover:bg-red px-2 py-4 flex   justify-center items-center rounded-xl">
                        <div className="transition duration-300  hover:scale-110 ">
                            <h4 className="text-center text-white pb-2 font-montserrat" >{item.title}</h4>
                            {/* <p className="text-center text-white text-xs font-montserrat font-extralight">{item.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChoseUs;