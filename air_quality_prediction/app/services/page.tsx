// app/services/page.tsx or pages/services.tsx depending on your structure
import React from 'react';
import PackageComponent from './component/servicePackageComponent';
import { servicesDataPackage } from '@/lib/services_data';
export default function ServicesPage() {

    const content = servicesDataPackage.map((dataItem)=>{
        return <PackageComponent key={dataItem.id} item={dataItem}/>
    })
    return (
        <section className="px-8 py-[15px]   bg-linear-to-r   dark:from-[rgba(85,153,167,0.66)] from-white dark:to-[rgba(10,105,105,0.33)] to-white text-black dark:text-white ">
        {/* Service Title */}
        <h1 className="title text-[45px] max-sm:text-[40px]  max-sssm:text-[25px]  text-center mb-[10px]">Services</h1>

        {/* Introduction */}
        <p className="text-center max-w-[800px] mx-auto mb-12 text-[20px] max-sm:text-[18px] max-sssm:text-[17px] leading-relaxed">
            At Breath Easy, we offer state-of-the-art air quality prediction services driven by real-time environmental data and cutting-edge machine learning. Our platform helps individuals, businesses, and governments make informed decisions to safeguard health and improve indoor and outdoor living conditions. Whether you’re looking for basic air index readings or enterprise-level analytics, we have a package tailored for your needs.
        </p>

        {/* Service Packages */}
        <div className=" w-full  max-w-[1200px] mx-auto grid grid-cols-3  gap-y-[50px] py-0 ">
            {/* Free Package */}
            {/* <div className="shadow-[0px_0px_12px_rgb(25,25,50)] relative py-[10px] px-[20px]  flex flex-col w-[300px] h-[400px] border rounded-md opacity-30 hover:opacity-[1]"> */}
            {content}
        </div>
        


        {/* Register CTA */}
        <div className="text-center mt-12">
            <p className="mb-4 text-lg max-sm:text-[18px] max-sssm:text-[17px]">Ready to breathe easy with better predictions?</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
            Register Now
            </button>
        </div>
        </section>
    );
}
