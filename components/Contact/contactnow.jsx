import React from "react";

const Contactnow = () => {

    return (
        <div className=" py-10  ">
            <div className="grid grid-cols-1 sm:grid-cols-3 container">
                <div className="col-span-2 flex justify-center items-center ">
                    <div>
                        <div className="flex justify-center items-center ">
                            <h3 class=" mb-4 text-2xl text-center font-bold font-montserrat text-black   sm:text-3xl md:text-[45px] text-red " style={{ lineHeight: '3rem' }}>Connect With Our Counsellor Now !</h3>
                        </div>
                        <div className="flex justify-center item-center mt-5 w-full py-10">
                            <a href="tel:919311430129" className="px-3 py-1 bg-dark text-white mx-2 font-montserrat rounded ">Call Us Now</a>
                            <a href="mailto:info@adhyayanamacademy.com" className="px-3 py-1 bg-dark text-white mx-2 font-montserrat rounded ">Mail Us Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 animate-bounce-out mb-8">
                    <img src="/img/online-support.jpg " alt="online-support" ></img>
                </div>
            </div>
        </div>

    )
}

export default Contactnow;
