'use client'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import React, {useState, useRef, useEffect } from 'react';
import clsx from "clsx";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9- _]{4,25}$/;
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
 
export default function FormLoginSignup() {
    // handling accessibility
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });

    const [touched, setTouched] = useState({}); // set as any empty object
    const [errorMsg, setErrorMsg] = useState({
        usernameErrorMessage: "",
        passwordErrorMessage: "",
        confirmPasswdErrorMsg: "",
    }); // booelan for working with the clsx 


    useEffect(()=>{
        // console.log(touched);
        if (touched != '')
        {
            if (touched.username)
            {
                const username_regex_result = USER_REGEX.test(formData.username); // true (match) || false(no match)does not pass
                // errorsBool = username_regex_result ? false : true // if true (match) do not display: false || false (display=true)
                console.log(`username_regex_result: ${username_regex_result}`); //working
                setErrorMsg((prevValue: any)=>{
                    console.log(errorMsg.usernameErrorMessage);
                    return {
                        ...prevValue,
                        usernameErrorMessage : username_regex_result ? null : 'Username must start with letter, and length of 8 to 25.'
                    }
                });
            }
            if (touched.password)
            {
                const passwd_regex_result = PASSWD_REGEX.test(formData.password);
                console.log(`passwd_regex_result: ${passwd_regex_result}`); //working
                setErrorMsg((prevValue: any)=>{
                    return {
                        ...prevValue,
                        passwordErrorMessage : passwd_regex_result ? null : 'Password must be of length 8 to 24 and have a special character.'
                    }
                })
            }
            if (touched.confirmPassword)
            {
                const password_match = formData.password == formData.confirmPassword;
                console.log(`password_match : ${password_match}`); // working
                setErrorMsg((prevValue: any)=>{
                    return {
                        ...prevValue, 
                        confirmPasswdErrorMsg : password_match ? null : 'Passwords do not match, check again'
                    }
                })
            }
        } //boxMod3l@123

    }, [formData, touched]);


    function handleBlur(event: React.FocusEvent<HTMLInputElement>)
    {
        const {name} = event.target;
        setTouched((prevValue)=>{
            return {
                ...prevValue,
                [name] : true
            }
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        const {name, value} = event.target;
        setFormData((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        console.log(formData);
    }

    const [loginElements, setLoginElements] = useState(false);

    function LoginBtnFunc()
    {
        setLoginElements(true);
    }

    function SignUpFunc()
    {
        setLoginElements(false)
    }
    return (
        <section className='w-full  '>
            {/* modal */}
            <div className='w-[500px] border-2 border-white mx-auto pt-[50px] p-4 rounded-lg bg-gradient-to-r from-[rgba(85,153,167,0.66)] dark:from-black to-[rgba(10,105,105,0.33)] dark:to-black text-white'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
                    <div className='w-[50%]  flex flex-row justify-between'><button onClick={SignUpFunc} className='bg-gradient-to-r from-[rgba(85,153,167,0.66)] dark:from-gray-400 to-[rgba(10,105,105,0.33)] dark:to-gray-400 px-4 py-2 rounded-lg'>SignUp</button><button onClick={LoginBtnFunc} className={clsx(loginElements ? "bg-black dark:bg-[#a07b7b69]" : 'transparent', 'px-4 py-2 rounded-lg opacity-[0.5px] ')}>Login</button></div>
                
                    <div className='w-full'>

                        <div className={clsx(loginElements ? 'hidden' : '')}>
                            <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="username">
                                <FaUser/>
                                <input className='block w-full border-none ml-[10px]' type="text" id="username" name="username" required  onBlur={handleBlur} onChange={handleChange} autoComplete="off"/>
                            </label>
                            <p className={clsx(errorMsg ? "block text-[15px] text-red-400": "hidden")}>{errorMsg.usernameErrorMessage}</p>
                        </div>

                        <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="email">
                            <MdEmail/>
                            <input  className='block w-full border-none ml-[10px]' type="email" id="email" name="email" required onBlur={handleBlur} onChange={handleChange} autoComplete="off" />
                        </label>

                        <div className={clsx(loginElements ? 'hidden' : '')}>
                            <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="phoneNumber">
                                <FaPhoneAlt/>
                                <input  className='block w-full border-none ml-[10px]' type="number" id="phoneNumber" name="phoneNumber" required onBlur={handleBlur} onChange={handleChange} autoComplete="off"/>
                            </label>
                        </div>

                        <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="password">
                            <RiLockPasswordFill/>
                            <input  className='block w-full border-none ml-[10px]' type="password" id="password" name="password" required onBlur={handleBlur} onChange={handleChange} autoComplete="off"/>
                        </label>
                        <p className={clsx(errorMsg ? "block text-[15px] text-red-400": "hidden")}>{errorMsg.passwordErrorMessage}</p>

                        <div className={clsx(loginElements ? 'hidden' : '')}>
                            <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="confirm-password">
                                <RiLockPasswordFill/>
                                <input  className='block w-full border-none ml-[10px]' type="password" id="confirm-password" name="confirmPassword" required onBlur={handleBlur} onChange={handleChange} autoComplete="off" />
                            </label>
                            <p className={clsx(errorMsg ? "block text-[15px] text-red-400": "hidden")}>{errorMsg.confirmPasswdErrorMsg}</p>
                        </div>
                    </div>

                    <input type='submit' value='Submit' className='bg-white text-black px-4 py-2 rounded-lg mt-[1px]'/>
                </form>

            </div>
        </section>
    )
}