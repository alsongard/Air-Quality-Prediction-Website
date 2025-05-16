'use client'
import { useTheme } from "next-themes";
import {useEffect, useState} from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FaM } from "react-icons/fa6";
export default function ThemeSwitch()
{

    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    function changeTheme()
    {
        setTheme((prevValue)=>{
            console.log(prevValue);
            if (prevValue === "dark")
            {
                return "light";
            }
            else
            {
                return "dark";
            }
        })
    }

    useEffect(()=>{
        setMounted(true);
    }, [])

    if (!mounted)
    {
        return <p>Loading Mode</p>
    }

    if (resolvedTheme === 'dark') // when it's dark display sun
    {
        return <IoSunnyOutline className='text-white' onClick={()=>{setTheme('light')}}/>
    }

    if (resolvedTheme === 'light') // when is light mode display moon
    {
        return <FaMoon className='text-black' onClick={()=>{setTheme('dark')}}/>
    }
}