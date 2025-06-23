"use client"
import Link from "next/link";
import React from "react";

const Button = ({name , url , mt , ml})=>{
    
    return(
        <div>
            <Link 
                href={`/${url}`}
                className="flex h-10  cursor-pointer items-center justify-center rounded-md bg-black text-white shadow-md transition duration-300 ease-in-out "
                style={{width:"150px", marginTop:mt , marginLeft:ml}}
              >
                <span >{name}</span>
              </Link>
        </div>
    )
}

export default Button ;