'use client'
import React, { useState } from "react";

const Faq = () => {

    const faqData = [
        {
            question: 'Q1. What is CA?',
            answer: 'Chartered Accountancy is a profession where you manage budgets, taxes, and audits for clients. For businesses and corporate entities, a chartered accountant is someone who provides financial advice on business strategies.'
        },
        {
            question: 'Q2. What is CS?',
            answer: 'A Company Secretary is an executive directly assisting one or more directors with key day-to-day administrative tasks, thus holding a pivotal managerial position in an organization.'
        },
        {
            question: 'Q3. What is CUET?',
            answer: 'The Common University Entrance Test is a pan-India examination organized by the National Testing Agency (NTA) for admission to various programmes ranging from Undergraduate and Postgraduate degrees to Integrated and Certification courses.'
        },
        {
            question: 'Q4. How can I enroll in Adhyayanam Academy?',
            answer: 'You may enroll through filling the registration form on our website, or by directly visiting an Adhyayanam Academy branch.'
        },
        {
            question: 'Q5. Can classes and tests conducted online?',
            answer: 'Yes. Education has taken a transformative approach at Adhyayanam Academy, where we conduct real-time classes and tests online. We also offer class recordings for those who may have missed their class.'
        },
        {
            question: 'Q6. What is the importance of taking a course?',
            answer: 'An entrance course allows one to comfortably prepare for exams under the guidance of expert mentors. Furthermore, they are provided with the latest methods of learning and exam patterns.'
        },
        {
            question: 'Q7. Is guidance and counselling available?',
            answer: 'Yes. Adhyayanam Academy offers a free demo class to all interested students while also providing counselling sessions to those who want to better understand their future career opportunities.'
        }
    ];

    return (
        <section className="relative z-20 overflow-hidden bg-white pt-16 pb-12 lg:pt-[60px] lg:pb-[40px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                FAQs
                            </h2>
                            <p className="text-base text-body-color">
                                Find answers to all your questions here!
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            header={item.question}
                            text={item.answer}
                        />
                    ))}
                </div>

                <div class="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="red" stop-opacity="0.36" />
                                <stop offset="1" stop-color="red" stop-opacity="0" />
                                <stop offset="1" stop-color="red" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Faq;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="single-faq mb-2 w-full rounded-lg border border-[#ededed] bg-white p-4 ">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-red bg-opacity-5 text-red">
                    <svg
                        className={`duration-200 ease-in-out fill-red stroke-red ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="text-lg font-semibold text-black">{header}</h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
            </div>
        </div>
    );
};
