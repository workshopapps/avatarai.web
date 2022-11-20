const FaqNewsletter = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-around gap-[24px] bg-[#F9F9FB] py-[40px] md:py-[48px] px-[24px]">
      <div className="flex flex-col gap-[24px]">
        <img src="/tapart.svg" height={`40px`} width={`40px`} />
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#201F23] font-jakarta font-bold">
            Subscribe to our newsletter for info for new avatar scenes, blogs
            and updates
          </p>
          <p className="text-[#605E65] font-nunito">
            We'd send a confirmation email to you
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="h-[52px] w-full bg-[#8B70E9] rounded"></div>
        <p className="text-[#AFB6B6] text-sm">
          By subscribing you agree to accept newsletter and Emails from us.
        </p>
      </div>
    </section>
  );
};

export default FaqNewsletter;
