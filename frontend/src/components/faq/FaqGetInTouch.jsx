import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const FaqGetInTouch = () => {
  return (
    <div className="flex flex-col gap-[42px] items-center align-center">
      <div className="flex flex-col items-center">
        <h3
          data-testid="h3"
          className="font-medium text-[26px] md:text-[32px] ld:text-[32px] font-[700] text-center"
        >
          Still have questions?
        </h3>
      </div>
      <Link to="/contactus" className="flex items-center w-full">
        <Button className="cursor-pointer text-white m-auto font-semibold flex items-center justify-center h-[48px] w-[100%] md:w-[150px] ld:w-[150px] bg-[#8B70E9] rounded">
          <p data-testid="button" className="text-white text-[16px]">
            Contact Us
          </p>
        </Button>
      </Link>
    </div>
  );
};

export default FaqGetInTouch;
