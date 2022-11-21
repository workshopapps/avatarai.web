const NavigationLink = ({ image, text }) => {
  return (
    <div className="flex gap-[16px] w-[216px] p-[16px] text-[#6C6C6C] font-nunito-sans">
      <img src={image} height="24px" width="24px" />
      <p>{text}</p>
    </div>
  );
};

export default NavigationLink;
