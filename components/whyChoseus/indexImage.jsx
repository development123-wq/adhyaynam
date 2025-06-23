import Link from "next/link";
import React from "react";

const BgImage = () => {

    return (
        <div className="pb-10 -mt-14">
            <div className="relative h-100 overflow-hidden " style={{ backgroundAttachment: "fixed", backgroundImage: 'url(/img/bgimg.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-[#000] opacity-70"></div>

                {/* Content */}
                <div className="relative z-10 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
                        <div className="col-span-2 p-4 block ">
                            <h2 className="text-white font-bold text-center text-3xl py-6">Learn At Your Own Pace – Anywhere, Anytime, Anyplace
                                <br /> With The Adhyayanam Academy App
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
                                <div>
                                    <h4 className=" font-semibold text-white text-lg py-2 text-center">Learning Redefined</h4>
                                    <p className="font-extralight text-white text-justify">Taking hybrid learning to a whole new level, Adhyayanam Academy announces its very own personalized app, making education accessible to all. Take part in classes while you’re out of your home or travelling, anytime! And if you’re too busy to attend class? Adhyayanam Academy offers class recordings for students who missed lessons.</p>
                                </div>
                                <div>
                                    <h4 className=" font-semibold text-white text-lg py-2 text-center"> Exam Practice At Home</h4>
                                    <p className="font-extralight text-white text-justify">The most crucial part of any exam’s preparation is taking mock tests to give oneself a safe, simulated experience of the exam itself. Adhyayanam Academy offers timed online mock tests through its app for students to challenge themselves while preparing for their exams at home.</p>
                                </div>
                                <div>
                                    <h4 className=" font-semibold text-white text-lg py-2 text-center">Affordable and Accessible</h4>
                                    <p className="font-extralight text-white text-justify">All Adhyayanam Academy courses are extremely affordable and made highly accessible to students in a bid to make quality education reach the furthest parts of the nation. Students can attend classes in real-time and take timed mock tests to challenge themselves.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" h-[350px] p-3 my-8 mx-2 lg:mx-16 bg-white rounded-tl-[30px] rounded-br-[30px]">
                            <h4 className="text-red text-xl font-semibold py-2 text-center"> Study In Comfort At Home </h4>
                            <p className="my-3 text-dark text-justify">Download the Adhyayanam Academy app and prepare for your exams at home!</p>

                            <div className="px-5"> 
                                 <Link
                                href="https://play.google.com/store/apps/details?id=com.udayateschool.adhyayanam"
                                class="animate-bounce-out mt-10 ml-auto mr-auto px-4 py-3 bg-red rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                            >
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>

                                <span class="ml-2">Download Our App</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgImage;