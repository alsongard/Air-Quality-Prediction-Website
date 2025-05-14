export default function About()
{
    return (
        <section className="w-full ">
            <h1 className="text-center my-[20px] text-[30px]">About Us</h1>
            <div className='w-[90%] mx-auto'>
                <p>Founded in 2024 by Alson Tech, Breath Easy Real‑Time Air Quality Prediction was born out of a shared vision: to put clear, actionable air quality data into the hands of city dwellers everywhere. In an age where urban populations face ever‑rising levels of pollution, we recognized the urgent need for a transparent, reliable service that not only reports the current air quality index (AQI) but also forecasts short‑term trends—so you can plan your day with confidence.</p>
                <p>From day one, we’ve collaborated with leading environmental and technology organizations to ensure our data is both accurate and accessible:</p>
            {/* </div> */}
            

                <div className='w-[95%] my-[20px] mx-auto'>

                    <ul className="list-disc list-inside">
                        <li>United States Environmental Protection Agency (EPA)</li>
                        <p className='ml-[18px]'>Integrating EPA reference stations and datasets to benchmark our readings against official U.S. government measurements.</p>
                        
                        <li>World Health Organization (WHO)</li>
                        <p className='ml-[18px]'>Working together to ensure our data aligns with health guidelines and recommendations for air quality.</p>
                        
                        <li>Google Cloud</li>
                        <p className='ml-[18px]'>Leveraging Google’s powerful machine‑learning infrastructure to process millions of data points in real time, enabling our predictive algorithms to give you up‑to‑the‑minute forecasts.</p>
                    </ul>
                </div>

            {/* <p>Leveraging Google’s powerful machine‑learning infrastructure to process millions of data points in real time, enabling our predictive algorithms to give you up‑to‑the‑minute forecasts.</p> */}
                <p>Leveraging python  machine‑learning  model  to process millions of data points in real time, enabling our predictive algorithms to give you up‑to‑the‑minute forecasts.</p>
                <div className='w-[95%] my-[20px] mx-auto'>
                    <ul className="list-disc list-inside">
                        <li>Decide the best time for your morning jog without worrying about smog spikes</li>
                        <li>Plan errands and outdoor activities around periods of cleaner air</li>
                        <li>Make informed choices for the health of your family, especially those with asthma, allergies, or other respiratory conditions</li>
                    </ul>
                </div>
            

                <p>Our mission goes beyond data delivery. We’re committed to:</p>
                <div className='w-[95%] my-[20px] mx-auto'>
                    <ul className="list-disc list-inside">
                        <li>Education:</li>
                        <p className='ml-[18px]'>Publishing easy‑to‑understand guides about what AQI numbers mean and how they’re calculated</p>
                        <li>Community Engagement</li>
                        <p className='ml-[18px]'>Supporting local “citizen science” initiatives by providing low‑cost sensor kits and open APIs so enthusiasts can contribute to—and benefit from—our network.</p>
                        <li>Advocacy:</li>
                        <p className='ml-[18px]'>Working with policymakers and non‑profits to promote cleaner air standards and urban planning strategies that prioritize public health.</p>
                    </ul>
                </div>
                <p className="text-center ">As we continue to grow, Alson Tech and our partners remain dedicated to pushing the boundaries of real‑time environmental monitoring. Welcome to Breath Easy—because clean air is more than a statistic; it’s the foundation of a healthy, vibrant life in the city.</p>
            </div>
        </section>
    )
}