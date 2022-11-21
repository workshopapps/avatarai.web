const FaqGetInTouch = () => {
  return (
    <div className="flex flex-col gap-[42px]">
      <div className="flex flex-col items-center">
        <h3 className="font-medium text-[20px]">Still have a question?</h3>
        <p>Can't find the answer you are looking for?</p>
      </div>
      <a className="cursor-pointer text-white font-semibold flex items-center justify-center h-[52px] w-full bg-[#8B70E9] rounded">
        <p className="text-white">Get in touch</p>
      </a>
    </div>
  );
};

export default FaqGetInTouch;
