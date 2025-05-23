import Image from "next/image";
import FormLoginSignup from "./components/form_login_signup";


export default function Home() {
  return (
    <main className="w-full  text-black dark:text-white bg-gradient-to-r from-white  dark:from-[rgba(85,153,167,0.66)] to-white  dark:to-[rgba(10,105,105,0.33)]">
      <div className='relative w-full h-[100vh]'>
        <Image fill src="/images/pexels-alexazabache-3214995.jpg" alt='cityscape'/>
      </div>

      <section className='services  text-black  w-full'>
        <div className='w-full py-[25px]   dark:text-white'>
          <h1 className='text-[50px] max-sm:text-[40px]  max-sssm:text-[25px] text-center '>Breathe Smarter in the City</h1>
          <p className='text-[20px] max-sm:text-[18px] max-sssm:text-[17px]  w-[90%] mx-auto text-center'>City life moves fast—and so does the air around you. At Breath Easy Real-Time Air Quality Prediction, we deliver real-time air quality updates designed for urban living. Whether you're commuting, exercising outdoors, or simply navigating your day, our service helps you stay ahead of pollution spikes and make healthier choices in the environments you live, work, and breathe in every day.</p>
          <button className='dark:bg-white bg-linear-to-r  from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] w-[200px] max-sm:w-[150px] mx-auto block text-black px-4 py-2 rounded-lg mt-4'>Get Started</button>
        </div>
      </section>

      <section className="about text-black dark:text-white">
        <div className='w-full py-[25px] '>
          <h1 className='text-[50px] max-sm:text-[40px]  max-sssm:text-[25px] text-center'>About</h1>
          <p className='text-[20px] max-sm:text-[18px] max-sssm:text-[17px] w-[90%] mx-auto text-center  '>At Breath Easy Real-Time Air Quality Prediction, our mission is simple: empower urban communities with accurate, real-time information about the air they breathe. Born from a need for transparency in environmental data, we combine cutting-edge technology with predictive analytics to monitor and forecast air quality across cities. Our goal is to help you make smarter decisions—whether it's choosing when to go for a run, commute, or simply open a window. We believe clean air is a right, not a luxury, and we're here to help you breathe easier, every day.</p>
          <button className='dark:bg-white bg-linear-to-r  from-[rgba(85,153,167,0.66)] to-[rgba(10,105,105,0.33)] w-[200px] max-sm:w-[150px] mx-auto block text-black px-4 py-2 rounded-lg mt-4'>About Us</button>
        </div>
      </section>
    </main>
  );
}
