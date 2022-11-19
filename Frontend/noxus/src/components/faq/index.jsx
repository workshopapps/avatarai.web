import { useState } from "react";

const Faq = () => {
  const [hidden, setHidden] = useState(() => true);

  const handleClick = () => {
    setHidden((prev) => !prev);
  };

  const data = Array(8).fill(1);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col gap-[20px] items-center p-[24px] bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/67ae/db4d/827320a8065271b507f5f40f95906d6f?Expires=1669593600&Signature=X4aMQMssyYHb-msSCgO1FT9ym4FF2B4sfej9jUoMVFYCZpXlL2ddPbMc5Ux1o0-NSqyzonzG72MT8RUVhZYVClWFKNXCcGeB8wB-p5UcuIEYdoJIYsNP1NJMZDD7u5oQDvFZs-ouRQELoH7f4Hsr2Ll~I2Adt6fUb~XgMq7V4Uwbgd4rgs8uscstYij7P938JgYmsK3nIGTgfVY9Um38aRUTQTkzigdfInmFRsi0oQwNKhvNnSloyNy-1xLP3EDl6G~~a3DkcAw2eaL4vEEgu3kdwVKCB6mKIM1XJKcYYppVlCwuGGseQvDCHoIq~m16qrguQKKUR~E2t-ONhxsQug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">
        <header className="flex flex-col gap-[8px] text-[20px] items-center font-nunito text-white">
          <h1 className="font-bold ">Frequently Asked Questions</h1>
          <p>Have questions? We are here to help.</p>
        </header>
        <div className="h-[52px] w-full bg-white rounded"></div>
      </section>

      {/* Details Section */}
      <section className="font-nunito flex flex-col items-center px-[24px] py-[80px] gap-[94px]">
        {/* FAQs and Contact Us Toggle */}
        <div className="h-[52px] w-full bg-[#8B70E9] rounded"></div>
        {/* Expandable cards Section */}
        <div className="w-full">
          {data.map((_, i) => (
            <div
              key={i}
              className=" flex flex-col gap-[8px] py-[24px] border-b"
            >
              {/* Card Heading and Symbol */}
              <div onClick={handleClick} className="flex justify-between ">
                <h2 className="w-[260px] text-[20px] font-medium">
                  What are digital avatars used for?
                </h2>
                <p className="text-[32px] font-bold">{hidden ? "+" : "-"}</p>
              </div>
              {/* Card Description */}
              <p className={`${hidden ? "hidden" : "block"} w-[260px]`}>
                Digital avatars can serve a number of purposes, including
                representing a person, an online friend, a brand, or an
                influencer.
              </p>
            </div>
          ))}
        </div>
        {/* Get in Touch Section */}
        <div className="flex flex-col gap-[42px]">
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-[20px]">Still have a question?</h3>
            <p>Can't find the answer you are looking for?</p>
          </div>
          <a className="text-white font-semibold flex items-center justify-center h-[52px] w-full bg-[#8B70E9] rounded">
            <p>Get in touch</p>
          </a>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="flex flex-col gap-[24px] bg-[#F9F9FB] py-[40px] px-[24px]">
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
    </>
  );
};

export default Faq;
