import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className='flex flex-row max-sm:flex-col py-[150px] px-[70px] w-full justify-between border-t-2 border-white items-center bg-linear-to-r from-[rgba(85,153,167,0.66)]  to-[rgba(10,105,105,0.33)]  text-white '>
            <div>
                <h1 className='text-[30px] max-sssm:text-center max-md:text-[22px]'>Breath Easy Real-Time Air Quality Prediction</h1>
            </div>

            <div className='flex flex-row w-[65%] max-sm:items-start max-sm:mt-[50px] max-sssm:flex-col max-sssm:items-center max-sssm:w-full max-sssm:gap-y-[20px] justify-around  items-center pr-[0px] pl-[25px]'>
                <ul className=' w-[40%] max-sssm:w-full  text-center'>
                    <li><Link className='text-[19px] hover:pl-[15px] transition-hover duration-[0.5s] ease-in' href="/">Home</Link></li>
                    <li><Link className='text-[19px] hover:pl-[15px] transition-hover duration-[0.5s] ease-in' href="/about">About</Link></li>
                    <li><Link className='text-[19px] hover:pl-[15px] transition-hover duration-[0.5s] ease-in' href="/services">Services</Link></li>
                    <li><Link className='text-[19px] hover:pl-[15px] transition-hover duration-[0.5s] ease-in' href="/contact">Contact</Link></li>
                </ul>

                <div className='social-icons flex flex-row w-[40%] max-sssm:w-full justify-between '>
                    <a href=""><FaXTwitter className='text-[30px]   shadow-[0px_0px_5px_#85929e] rounded-md p-[2px] hover:scale-[1.2]'/></a>
                    <a href=""><SiGmail className='text-[30px]   shadow-[0px_0px_5px_#85929e] rounded-md p-[2px] hover:scale-[1.2]'/></a>
                    <a href=""><FaFacebook className='text-[30px]   shadow-[0px_0px_5px_#85929e] rounded-md p-[2px] hover:scale-[1.2]'/></a>
                    <a href=""><FaSquareInstagram className='text-[30px]   shadow-[0px_0px_5px_#85929e] rounded-md p-[2px] hover:scale-[1.2]'/></a>
                </div>
            </div>
        </footer>
    )
}