export default function PackageComponent(props:any)
{
    // const feaure_content = props
    const feature_content = props.item.features.map((dataItem: string)=>{
        return (<li>{dataItem}</li>)
    })
    return (
        <div className="shadow-[0px_0px_12px_rgb(25,25,50)] relative   flex flex-col w-[300px] h-[400px] border rounded-md  hover:opacity-[1] ">
            <div className='detailText absolute h-full w-full bg-linear-to-r from-[rgb(168,171,197)] to-[rgb(66,80,94)] flex flex-col justify-center  items-center rounded-md  transition-opacity duration-[1s] ease-in-out hover:opacity-0 '>            
                <p>{props.item.package}</p>
            </div>
          <h2 className="text-[25px] text-center font-semibold mb-2">{props.item.package}</h2>
          <p className="text-gray-700 mb-2 text-[20px] text-center">{props.item.price}</p>
          <h3 className='text-center text-[20px]'>Features</h3>
          <div>
            <ul className="list-decimal mx-auto w-[80%] mt-[10px] text-gray-800">
                {feature_content}
            </ul>
          </div>
          <button className='mt-[20px] py-[2.5px] bg-sky-400 border-none w-[50%] mx-auto rounded-md'>Get Package</button>
        </div>
    )
}