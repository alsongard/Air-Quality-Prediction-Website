import Link from "next/link";
import { CiSun } from "react-icons/ci";
import React from "react";
// import { IoSunnyOutline } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";
export default function Header() {
    return (
        <header className='flex flex-row justify-between h-[100px] items-center bg-linear-to-r from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] text-white p-4'>
            {/* Logo */}
            <div className='logo'>
                <h1 className='text-[25px] '>Breath Easy Real-Time Air Quality Prediction</h1>
            </div>

            <div className=' flex flex-row w-[700px] justify-between items-center pr-[20px] pl-[15px] bg-sky-700 rounded-lg'>
                {/* Navigation */}
                <ul className="navbar w-[90%] flex flex-row justify-between items-center    py-[10px]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><button>SignUp/Login</button></li>
                </ul>

                {/* switch background */}
                <div>
                    <CiSun/>
                </div>
            </div>
        </header>
    )
}