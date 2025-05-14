export default function Contact() {
    return (
        <section className='w-full py-[25px] bg-gradient-to-r from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] text-white'>
            <h1 className='text-[50px] text-center'>Contact Us</h1>
            <p className='text-[20px] w-[90%] mx-auto text-center'>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to help you breathe easier and live better.</p>
            <form className='w-[500px] border-2 border-white mx-auto mt-[50px] p-4 rounded-lg bg-gradient-to-r from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] text-white'>
                <div className='w-full'>
                    <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="name">
                        <input type="text" id="name" name="name" placeholder="Name" required className='w-full bg-transparent outline-none'/>
                    </label>
                    <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="email">
                        <input type="email" id="email" name="email" placeholder="Email" required className='w-full bg-transparent outline-none'/>
                    </label>
                    <label className='border-2 border-white flex flex-row items-center py-[2.5px] pl-[5px] my-[10px]' htmlFor="message">
                        <textarea id="message" name="message" placeholder="Message" required className='w-full bg-transparent outline-none' rows={4}></textarea>
                    </label>
                </div>
                <input type='submit' value='Send Message' className='bg-white text-black px-4 py-2 rounded-lg mt-[1px]'/>
            </form>
        </section>
    )
}
