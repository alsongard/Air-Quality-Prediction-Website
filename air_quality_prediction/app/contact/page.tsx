export default function Contact() {
    return (
        <section className='w-full py-[25px]  bg-linear-to-r from-white  dark:from-[rgba(85,153,167,0.66)] to-white dark:to-[rgba(10,105,105,0.33)] text-black dark:text-white '>
            <h1 className='text-[50px] max-sm:text-[40px]  max-sssm:text-[25px] text-center'>Contact Us</h1>
            <p className='text-[20px] max-sm:text-[18px] max-sssm:text-[17px] w-[90%] mx-auto text-center'>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to help you breathe easier and live better.</p>
            {/* <form className='w-[500px] border-2 border-white mx-auto mt-[50px] p-4 rounded-lg bg-gradient-to-r from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] text-white'> */}
            <form className='w-[48%] max-sssm:w-[80%] border-2 border-black  mx-auto mt-[50px] p-4 rounded-lg text-black '>
                <div className='w-full'>
                    <label className=' flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Name" required className='w-full bg-transparent  p-[5px] rounded-md shadow-[0px_0px_5px_black] dark:shadow-[0px_0px_5px_white]  outline-none placeholder:text-gray-500'/>
                    </label>
                    <label className=' flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="email">
                        <input type="email" id="email" name="email" placeholder="Email" required className='w-full bg-transparent  p-[5px] rounded-md shadow-[0px_0px_5px_black] dark:shadow-[0px_0px_5px_white] outline-none placeholder:text-gray-500'/>
                    </label>
                    <label className=' flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="message">
                        <textarea id="message" name="message" placeholder="Message" required className='w-full bg-transparent  p-[5px] rounded-md shadow-[0px_0px_5px_black] dark:shadow-[0px_0px_5px_white] placeholder:text-gray-500 outline-none' rows={4}></textarea>
                    </label>
                </div>
                <input type='submit' value='Send Message' className='bg-white text-black ml-[5px] px-4 py-2 shadow-[0px_0px_5px_black]  dark:shadow-[0px_0px_3px_white] rounded-lg mt-[1px]'/>
            </form>
        </section>
    )
}
