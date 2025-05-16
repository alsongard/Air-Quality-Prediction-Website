import Image from "next/image"
export default function PackageComponent(props:any)
{
    // const feaure_content = props
    const feature_content = props.item.features.map((dataItem: string)=>{
        return (<li className="dark:text-white text-black">{dataItem}</li>)
    })
    return (
        <div className="shadow-[0px_0px_12px_rgb(25,25,50)] relative  flex flex-col items-center w-[300px] h-[400px] border rounded-md  hover:opacity-[1] ">
            {/* <div className='detailText absolute h-full w-full bg-linear-to-r from-[rgb(115,192,140)] to-[rgb(70,179,104)] flex flex-col justify-center  items-center rounded-md  transition-opacity duration-[1s] ease-in-out hover:opacity-0 '>            
                <p className="text-[25px]">{props.item.package}</p> 
            </div> */}
            <div className='bg-linear-to-br z-[5] from-[rgba(51,255,231,0.46)] to-[rgba(51,255,231,0.84)] opacity-[0.5] w-full h-full'>
                <Image className="bg-cover" fill src={props.item.img} alt='city-1'/>
            </div>
            <div className='z-[11] h-[400px] border-2 border-white dark:text-white '>
                <h2 className="text-[25px] text-center font-semibold mb-2">{props.item.package}</h2>
                <p className=" mb-2 text-[20px] text-center">{props.item.price}</p>
                <h3 className='text-center text-[20px]'>Features</h3>
                <div className="w-full flex flex-col justify-center items-center">
                    <ul className="list-decimal mx-auto w-[80%] mt-[10px] text-gray-800">
                        {feature_content}
                    </ul>
                </div>
            </div>
            <button className='z-[11] mt-[20px] py-[2.5px] bg-sky-400 border-none w-[50%] mx-auto rounded-md'>Get Package</button>
        </div>
    )
}