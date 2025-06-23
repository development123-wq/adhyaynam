'use client'
import Quiz from "@/components/Quiz/Quiz";
import React, { useEffect, useState } from "react";

const Quizpage = ({ params }) => {
    const [slug] = params.slug;
    const [quiz, setQuiz] = useState([]);
    const [paper, setpaper] = useState(false)


    const Getsinglequiz = async () => {
        try {
            const response = await fetch('/api/quiz/get-single-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course: slug }),
            });

            if (response.ok) {
                const result = await response.json();
                const allCourse = result.map((cors) => cors.subject)
                const unikCourse = new Set(allCourse)
                const allCors = Array.from(unikCourse)
                setQuiz(allCors);
            } else {
                console.error('Failed to fetch single quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        Getsinglequiz()
    }, [])

    return (
        <div className="my-5 py-10 sm:pt-0 container">
            <h1 className="text-center font-bold text-2xl py-5 "><u> {slug} </u></h1>
            {!paper ?
                <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 text-center justify-center">
                    {quiz?.map((p) => (
                        <div key={p} className="cursor-pointer shadow-xl border border-[#dadada] hover:bg-red hover:text-white transition duration-300 ease-in-out hover:scale-110 py-5" onClick={() => setpaper(p)}>
                            {p}
                        </div>
                    ))}
                </div> :
                <Quiz subject={paper} course={slug} />}
        </div>
    )
}

export default Quizpage