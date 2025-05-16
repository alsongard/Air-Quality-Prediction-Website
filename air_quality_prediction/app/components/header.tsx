'use client';
import Link from "next/link";
import { CiSun } from "react-icons/ci";
import React from "react";
import ThemeSwitch from "./themeProvider";
// import { IoSunnyOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
export default function Header() {
    return (
        <header className='flex flex-row z-[1001]  sticky top-0 justify-between h-[100px] items-center bg-linear-to-r from-[rgba(85,153,167,0.66)]  to-[rgba(10,105,105,0.33)] text-white p-4 '>
            {/* Logo */}
            <div className='logo'>
                <h1 className='text-[25px] max-md:text-[20px]  '>Breath Easy Real-Time Air Quality Prediction</h1>
            </div>

            <div className=' flex flex-row w-[700px] max-md:w-[450px] justify-between items-center pr-[20px] pl-[15px] bg-[rgba(85,153,167,0.18)] dark:bg-[rgba(85,153,167,0.18)] rounded-lg max-ssm:hidden'>
                {/* Navigation */}
                <ul className="navbar w-[90%] flex flex-row justify-between items-center    py-[10px]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href="/signup_login">SignUp/Login</Link ></li>
                </ul>

                {/* switch background */}
                <div>
                    <ThemeSwitch/>
                </div> 
            </div>

            {/* <div className="absolute top-[65px] right-[10px] w-[300px] top bg-linear-to-bl from-red-500 to-sky-800 rounded-md "> */}
            <div className="hidden max-ssm:block absolute top-[65px] right-[10px] w-[300px] top bg-linear-to-bl from-[rgba(11,57,66,0.97)]  to-[rgba(10,105,105,0.86)] rounded-md ">
                <ul className="navbar w-full text-center  flex flex-col items-center   py-[10px]">
                    <li className="border-b-2 w-full border-white mb-[5px]"><Link href="/">Home</Link></li>
                    <li className="border-b-2 w-full border-white mb-[5px]"><Link href="/services">Services</Link></li>
                    <li className="border-b-2 w-full border-white mb-[5px]"><Link href='/about'>About</Link></li>
                    <li className="border-b-2 w-full border-white mb-[5px]"><Link href='/contact'>Contact</Link></li>
                    <li className="border-b-2 w-full border-white mb-[5px]"><Link href="/signup_login">SignUp/Login</Link ></li>
                    <li className="my-[5px]"><ThemeSwitch/></li>
                </ul>
            </div>

        </header>
    )
}