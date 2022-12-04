import image from "./images/green.png"
import cancel from "./images/cancel.png"
const SuccessModal =({closeModalNow})=>{
return(
    <>
   

    <div className="flex justify-center items-center w-[80%] md:w-[50%] lg:w-[40%] rounded shadow-2xl
    fixed top-[50%] md:bottom-[0%] left-[50%] translate-x-[-50%]  translate-y-[-50%] z-[9999] bg-white h-[fit-content]">
        <div className="relative p-[1.5rem] ">
            <img src={cancel} alt="" 
            className="absolute right-[5%] top-[-4%] md:top-[-4%] font-bold w-[1.5rem]"
            onClick={closeModalNow}/>
           
            <div className="flex-[100%] md:flex-[80%]">
            <div className="flex justify-center">
               
              <img src={image} alt="green tick" className="w-[5rem] md:w-[7rem] pt-3" />
                  </div>
                <h2 className="font-bold text-[1.1rem] md:text-[1.5rem] xl:text-[2rem] pb-[1rem] text-center pb-[2rem] pt-[3rem]">
                    Thanks for subscribing with Zuvatar!!!</h2>
                    
                <p className=" pb-[1rem] text-[16px] md:text-[18px] lg:text-[20px]  text-center">
                 Check your mail to keep up with our newsletter.
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