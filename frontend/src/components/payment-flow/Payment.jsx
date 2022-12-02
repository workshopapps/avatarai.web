const Payment = () => {
  return (
    <div className="py-8 px-6 flex flex-col gap-5">
      <div className="h-10 w-10">
        <img src="/tapart.svg" />
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <p>Basic</p>
          <div className="flex flex-row gap-2">
            <span>$14</span>
            <span>/</span>
            <span>Per Month</span>
          </div>
          <p>View Details</p>
        </div>
        <form className="flex flex-col gap-6 w-full">
          <p>Enter payment details</p>
          <div className="flex flex-col ">
            <label>Email</label>
            <input className="border w-full" type={`email`} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="card">Card Number</label>
            <input
              name="card"
              className="border w-full"
              type={`text`}
              pattern={`[0-9]*`}
              inputMode={`numeric`}
            />
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="expiration-date">Expiration Date</label>
              <input
                name="expiration-date"
                className="border w-full"
                type={`text`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cvv">CVV</label>
              <input
                name="cvv"
                className="border w-full"
                type={`text`}
                pattern={`[0-9]*`}
                inputMode={`numeric`}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <input type={`checkbox`} />
            <span>Save card details</span>
          </div>
          <button>Subscribe</button>
          <div>
            <p className="text-center">
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
