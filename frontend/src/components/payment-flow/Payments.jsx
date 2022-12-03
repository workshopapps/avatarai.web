const Payment = () => {
  return (
    <div className="py-8 px-6 flex flex-col gap-5">
      <div className="h-10 w-10">
        <img src="/tapart.svg" />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <p className="font-nunito text-base">Basic</p>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-nunito font-semibold text-2xl">$14</span>
            <span className="font-nunito text-base">/</span>
            <span className="font-nunito text-base">Per Month</span>
          </div>
          <p className="text-[#8b70e9]">View Details</p>
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
          <div className="flex flex-row gap-5">
            <div className="flex flex-col ">
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
            <div className="flex flex-col ">
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
            <span className="font-inter text-[#919191]">Save card details</span>
          </div>
          <button
            type="submit"
            className="bg-[#8B70E9] text-white font-nunito font-bold text-lg lg:text-xl p-4  rounded-lg"
          >
            Subscribe
          </button>
          <div>
            <p className="text-center font-nunito text-xs">
              By confirming your subscription, you allow Generated Media, Inc.
              to charge your card for this payment and future payments in
              accordance with their terms. You can always cancel your
              subscription.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
