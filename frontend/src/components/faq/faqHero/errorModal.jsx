import image from "../images/red.png"
import cancel from "../images/cancel.png"
const ErrorModal =({close})=>{
return(
    <>
   

    <div className="flex justify-center items-center w-[80%] md:w-[50%] lg:w-[40%] rounded shadow-2xl
    fixed top-[50%] md:bottom-[0%] left-[50%] translate-x-[-50%]  translate-y-[-50%] z-[9999] bg-white h-[fit-content]">
        <div className="relative p-[1.5rem] ">
            <img src={cancel} alt="" 
            className="absolute right-[5%] top-[-4%] md:top-[-4%] font-bold w-[1.5rem]"/>
           
            <div className="flex-[100%] md:flex-[80%]">
            <div className="flex justify-center">
               
              <img src={image} alt="red tick" className="w-[5rem] md:w-[7rem] pt-3" />
                  </div>
                <h2 className="font-bold text-[1.1rem] md:text-[1.5rem] xl:text-[2rem] pb-[1rem] text-center pb-[2rem] pt-[3rem]">
                    Oops!! Something when wrong </h2>
                    
                
                
            </div>
          
        </div>
       
    </div>
  
    </>
)

}

export default ErrorModal;