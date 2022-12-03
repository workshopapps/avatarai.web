import './faqs.css'
import Button from '../landingPage/Button/Button';
const FaqNewsletter = () => {
  return (
    <section className="bg-[#F9F9FB]">
      <div className="flex flex-col md:flex-row md:items-center justify-between  bg-[#F9F9FB] w-[80%] md:[90%] m-auto py-[3.5rem]">
        <div className="flex-[100%] md:flex-[45%]">
          <div className="flex flex-col gap-[24px] w-[100%] md:w-[100%]">
            <img src="/tapart.svg" height={`40px`} width={`40px`} />
            <div className="flex flex-col gap-[8px] ">
              <p
                data-testid="subscribe"
                className="text-[#201F23] font-jakarta font-bold"
              >
                Subscribe to our newsletter for info for new avatar scenes,
                blogs and updates
              </p>
              <p className="text-[#605E65] font-nunito">
                We'd send a confirmation email to you
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:flex-[20%] md:flex-[0%]"></div>
        <div className="flex-[100%] md:flex-[55%]">
          <div className="flex flex-col gap-[16px] w-[100%]   md:ml-[1.7rem]  pt-[2rem]">
            <div
              id="big-div"
              className="border border-[#403E46] flex items-center md:gap-4 gap-1 justify-between rounded-[16px] p-[5px] h-[52px] w-full max-w-[512px] bg-white rounded"
            >
              <div
                id="input"
                className="h-full flex md:gap-[8px] gap-1 items-center font-nunito grow text-[#848484] rounded py-[8px] md:pl-[12px] pl-2"
              >
                <img src="/sms.svg" />
                <input
                  type={`text`}
                  className="grow outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <Button
                id="subscribe"
                className="text-white border-[#8B70E9] bg-[#8B70E9] cursor-pointer bg-[#8B70E9] h-full relative flex items-center font-nunito text-white rounded-[12px] px-[20px] py-[8px]"
              >
                <span className="text-white">Subscribe</span>
              </Button>

            </div>
            <p className="text-[#AFB6B6] text-sm">
              By subscribing you agree to accept newsletter and Emails from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqNewsletter;
