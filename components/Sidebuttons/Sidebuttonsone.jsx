"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Sidebuttonsone() {

    return (
        <>
            {/* <div className={`z-[99]  hidden sm:block`} >
                <div className="fixed  bottom-[100px] right-0 flex h-10  cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out w-[160px] ">
                    <Link href="/franchise">    <span style={{ marginRight: '8px', marginLeft: '12px' }}>Franchise Enquiry   </span> </Link>
                </div>
                <div className=" fixed  bottom-[145px] right-0 flex h-10  cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out w-[160px] " >
                    <Link href="/admissions">  <span className='fade-in-down' style={{ marginRight: '8px', marginLeft: '12px' }} >Admission Enquiry   </span> </Link>
                </div>
            </div> */}
            <div className='fixed  bottom-0  z-[99] block sm:hidden  w-full' >
                <div className='grid grid-cols-2 gap-1 '>
                    <div className='flex justify-center align-center text-white cursor-pointer items-center h-[45px]  bg-dark'>
                        <Link href="/admissions"><span className='fade-in-down' >Admission</span> </Link>
                    </div>
                    <div className='flex justify-center align-center text-white cursor-pointer items-center h-[45px]  bg-dark'>
                        <Link href="/franchise">  <span className='fade-in-down' >Franchise</span> </Link>
                    </div>
                    {/* <div className='flex justify-center align-center text-white cursor-pointer items-center h-[35px]  rounded-md bg-dark'>
                        <Link href="/contact">   <span className='fade-in-down' >Contact us</span> </Link>
                    </div> */}
                </div>
            </div>
        </>
    );
}
