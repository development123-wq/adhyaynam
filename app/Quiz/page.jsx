'use client'
import Quiz from "@/components/Quiz/Quiz";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Quizpage = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/quiz/get-quiz');
            if (response.ok) {
                const result = await response.json();
                const allCourse = result.map((cors) => cors.course)
                const unikCourse = new Set(allCourse)
                const allCors = Array.from(unikCourse)
                setData(allCors);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="my-10">
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 text-center justify-center">
                {data?.map((submenuItem) => (
                    <div key={submenuItem} className="cursor-pointer shadow-xl border border-[#dadada] hover:bg-red hover:text-white transition duration-300 ease-in-out hover:scale-110 py-5" >
                        <Link
                            href={`/Quiz/${submenuItem}`}
                            key={submenuItem}
                            onClick={() => setNavbarOpen(false)}
                            className="uppercase ">
                            <span className="ml-6">
                                {submenuItem}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Quizpage