import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className='flex flex-row  py-[150px] px-[70px] w-full justify-between h-[100px] border-t-2 border-white items-center bg-linear-to-r from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] text-white '>
            <div>
                <h1 className='text-[30px]'>Breath Easy Real-Time Air Quality Prediction</h1>
            </div>

            <div className='flex flex-row w-[65%]  justify-around  items-center pr-[0px] pl-[25px]'>
                <ul>
                    <li><Link className='text-[19px]' href="/">Home</Link></li>
                    <li><Link className='text-[19px]' href="/about">About</Link></li>
                    <li><Link className='text-[19px]' href="/services">Services</Link></li>
                    <li><Link className='text-[19px]' href="/contact">Contact</Link></li>
                </ul>

                <div className='social-icons flex flex-row w-[30%] justify-between '>
                    <a href=""><FaXTwitter className='text-[30px] border-2 border-white rounded-md p-[2px]'/></a>
                    <a href=""><SiGmail className='text-[30px] border-2 border-white rounded-md p-[2px]'/></a>
                    <a href=""><FaFacebook className='text-[30px] border-2 border-white rounded-md p-[2px]'/></a>
                    <a href=""><FaSquareInstagram className='text-[30px] border-2 border-white rounded-md p-[2px]'/></a>
                </div>
            </div>
        </footer>
    )
}