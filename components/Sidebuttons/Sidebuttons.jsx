"use client";
import React from 'react';
import { FontAwesomeIcon, regular } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faPhoenixSquadron } from '@fortawesome/free-brands-svg-icons';

export default function Sidebuttons() {

  return (
    <>
      <div className={`fixed  z-[99] `} >
        <div className="fixed bottom-[20px] mb-16 ml-2  flex h-10 w-10  cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out ">
          <a href="https://api.whatsapp.com/send?phone=919311430129&amp;text=Hi,%20I%20have%20a%20query" target="blank">
            <FontAwesomeIcon className='h-6 w-6' icon={faWhatsapp} style={{ color: 'white' }} />
          </a>
        </div>
        <div className=" fixed bottom-[62px] mb-16 ml-2  flex h-10 w-10   cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out ">
          <a href='tel:+919311430129' className='' style={{ color: 'white', fontSize: '30px' }}>
            ✆
          </a>
        </div>
        <div className="fixed bottom-[104px] mb-16 ml-2 flex h-10 w-10   cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out ">
          <a href='https://www.instagram.com/adhyayanam_academy/' target="blank">
            <FontAwesomeIcon className='h-6 w-6' icon={faInstagram} style={{ color: 'white' }} />
          </a>
        </div>
      </div>
    </>
  );
}
