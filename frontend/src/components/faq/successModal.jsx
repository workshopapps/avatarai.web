import image from "./images/greenTick.png"
const SuccessModal =({close})=>{
return(
    <>
   

    <div className="flex justify-center items-center w-[80%] md:w-[50%] lg:w-[40%] rounded shadow-2xl
    fixed top-[50%] md:bottom-[0%] left-[50%] translate-x-[-50%]  translate-y-[-50%] z-[9999] bg-white">
        <div className="flex p-[1.5rem] justify-center">
            <div className="flex-[100%] md:flex-[80%]">
                {/* <h1 className="font-bold">X</h1> */}
                <h2 className="font-bold text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] pb-[1rem] text-center pb-[2rem] ">
                    Thanks for subscribing</h2>
                    <div className="flex justify-center">

                    <img src={image} alt="green tick" className="w-[5rem] " />
                    </div>
                <p className=" pb-[1rem] text-[16px] md:text-[18px] lg:text-[20px] pt-[3rem] text-center">
                 You are now subscribed to our newsletter! You'll hear from us shortly.
                </p>
                <div className="">
                    
                       
                        
                    
                       

                </div>
            </div>
          
        </div>
       
    </div>
  
    </>
)

}

export default SuccessModal;