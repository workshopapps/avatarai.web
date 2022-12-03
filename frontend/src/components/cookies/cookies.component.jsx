import { Link } from "react-router-dom";
import image from "./images/cookies.png"
const Cookies =({offCookies})=>{
return(
    <>
   

    <div className="flex justify-center items-center w-[70%] md:w-[50%] lg:w-[40%] rounded shadow-2xl
    fixed bottom-[-3%] md:bottom-[0%] left-[50%] translate-x-[-50%]  z-[9999] bg-white">
        <div className="flex p-[1.5rem]">
            <div className="flex-[100%] md:flex-[80%]">
                <h2 className="font-bold pb-[1rem]">Cookie settings</h2>
                <p className=" pb-[1rem]">
                We use cookies and similar technologies to help personalize content, 
                tailor and measure ads and provide a better experience. By clicking accept,
                 you agree to this as outlined in our Cookies Policy.
                </p>
                <div className="">
                    
                        <button className="bg-[#8B70E9] text-white px-[1rem] md:px-[1.5rem] xl:px-[2rem] py-[0.5rem] rounded mr-[1rem]"
                        onClick={offCookies}>Accept</button>
                        
                    
                        <Link to="/" className="text-[#8B70E9] underline md:text-[15px]">Learn More</Link>
                        

                </div>
            </div>
            <div className="hidden md:inline-block my-auto"> 
              <img src={image} alt="cookies" />
            </div>
        </div>
       
    </div>
  
    </>
)

}

export default Cookies;