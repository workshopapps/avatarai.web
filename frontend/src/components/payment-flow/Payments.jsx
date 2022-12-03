import Plan from "./Plan";

const Payment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:pt-16">
      <div className="w-full max-w-lg hidden lg:flex ">
        <div className="flex flex-col py-8 px-6 items-center gap-10">
          <Plan />
          <div>
            <img src="/payment-illustration.svg" />
          </div>
          <div className="max-w-[400px]">
            <p className="font-nunito font-bold text-base text-[#595959]">
              4K avatars are 4096x4096. AI can have random results and may
              include artistic nudes, erotic or otherwise shocking images, if
              you do not want that and are sensitive, we recommend you to NOT
              use this site!
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 px-6 flex flex-col gap-5 w-full max-w-lg">
        <div className="h-10 w-10 lg:hidden">
          <img src="/tapart.svg" />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="lg:hidden">
            <Plan />
          </div>
          <form className="flex flex-col gap-6 w-full">
            <p className="font-nunito text-base">Enter payment details</p>
            <div className="flex flex-col ">
              <label className="font-nunito text-base">Email</label>
              <input
                className="border-[0.5px] border-[#403e46] w-full py-3 px-2 rounded-[4px]"
                type={`email`}
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-nunito text-base" htmlFor="card">
                Card Number
              </label>
              <input
                name="card"
                className="border-[0.5px] border-[#403e46] w-full py-3 px-2 rounded-[4px]"
                type={`text`}
                pattern={`[0-9]*`}
                inputMode={`numeric`}
              />
            </div>
            <div className="flex flex-row w-full gap-5">
              <div className="flex flex-col w-full">
                <label
                  className="font-nunito text-base"
                  htmlFor="expiration-date"
                >
                  Expiration Date
                </label>
                <input
                  name="expiration-date"
                  className="border-[0.5px] border-[#403e46] w-full py-3 px-2 rounded-[4px]"
                  type={`text`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-nunito text-base" htmlFor="cvv">
                  CVV
                </label>
                <input
                  name="cvv"
                  className="border-[0.5px] border-[#403e46] w-full py-3 px-2 rounded-[4px]"
                  type={`text`}
                  pattern={`[0-9]*`}
                  inputMode={`numeric`}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <input type={`checkbox`} />
              <span className="font-inter text-[#919191]">
                Save card details
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#8B70E9] text-white font-nunito font-bold text-lg lg:text-xl p-4  rounded-lg"
            >
              Subscribe
            </button>
            <div>
              <p className="text-center text-[#262626] lg:font-bold lg:text-base font-nunito text-xs">
                By confirming your subscription, you allow Generated Media, Inc.
                to charge your card for this payment and future payments in
                accordance with their terms. You can always cancel your
                subscription.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
