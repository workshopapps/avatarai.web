export default function Account() {
  return (
    <section className="flex flex-col align-center md:flex-row md:align-start border-box w-[100vw] p-8">
      <section className="md:w-[50%] w-[100%] border-box flex flex-col items-center">
        <article className="mb-[25px] w-[100%]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Account
          </h3>

          <label
            htmlFor="first-name"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal mb-[24px] text-[#8e8e93] rounded-lg"
          >
            First Name
            <input
              placeholder="Zazu"
              className="text-[16px] p-0 h-[16px] m-0 border-box text-[3a3a3c] focus:outline-0"
              type="first-name"
              name="first-name"
              id="first-name"
              onPaste={(e) => e.preventDefault()}
              autoComplete="no"
              onKeyPress={(e) => e.preventDefault()}
            />
          </label>

          <label
            htmlFor="last-name"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal mb-[24px]
              text-[#8e8e93] rounded-lg"
          >
            Last Name
            <input
              placeholder="Anikulapo"
              className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
              type="last-name"
              name="last-name"
              id="last-name"
              onKeyPress={(e) => e.preventDefault()}
              autoComplete="no"
              onPaste={(e) => e.preventDefault()}
            />
          </label>

          <label
            htmlFor="email"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal
              text-[#8e8e93] mb-[24px] rounded-lg"
          >
            Email
            <input
              placeholder="Anikulapo@gmail.com"
              className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
              type="email"
              name="email"
              id="email"
              onKeyPress={(e) => e.preventDefault()}
              autoComplete="no"
              onPaste={(e) => e.preventDefault()}
            />
          </label>
        </article>
        <article className="mb-[25px] w-[100%]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Location
          </h3>

          <label
            htmlFor="address"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal mb-[24px]
              text-[#8e8e93] rounded-lg"
          >
            Address
            <input
              placeholder="Abuja, Lagos"
              className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
              type="address"
              name="address"
              id="address"
              onKeyPress={(e) => e.preventDefault()}
              autoComplete="no"
              onPaste={(e) => e.preventDefault()}
            />
          </label>
          <div
            className="w-[90%] flex flex-row justify-between max-w-[484px]
          "
          >
            <label
              htmlFor="City"
              className="border-solid border-2 w-[32%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal
              text-[#8e8e93] mb-[24px]   rounded-lg"
            >
              City
              <input
                placeholder="Ikeja"
                className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
                type="city"
                name="city"
                autoComplete="no"
                id="city"
                onKeyPress={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              />
            </label>

            <label
              htmlFor="State"
              className="border-solid border-2 w-[32%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal
            text-[#8e8e93] mb-[24px] rounded-lg"
            >
              State
              <input
                placeholder="Lagos"
                className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
                type="state"
                name="state"
                id="state"
                onKeyPress={(e) => e.preventDefault()}
                autoComplete="no"
                onPaste={(e) => e.preventDefault()}
              />
            </label>

            <label
              htmlFor="zip"
              className="border-solid border-2 w-[32%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pt-[8px] pb-[8px] pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal mb-[24px]
          text-[#8e8e93] rounded-lg"
            >
              Zip code
              <input
                placeholder="12345"
                className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
                type="number"
                name="zip"
                id="zip"
                onKeyPress={(e) => e.preventDefault()}
                autoComplete="no"
                onPaste={(e) => e.preventDefault()}
              />
            </label>
          </div>
        </article>
        <article className="mb-[25px] w-[100%]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Billing
          </h3>

          <label
            htmlFor="full-name"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal
              text-[#8e8e93] mb-[24px] rounded-lg"
          >
            Contact
            <input
              placeholder="Anikulapo"
              className="text-[16px] h-[16px] text-[3a3a3c] focus:outline-0"
              type="full-name"
              name="full-name"
              id="full-name"
              onKeyPress={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              autoComplete="no"
            />
          </label>

          <label
            htmlFor="email"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal border-box
              text-[#8e8e93] mb-[24px] rounded-lg"
          >
            Email
            <input
              placeholder="Anikulapo@gmail.com"
              className="text-[16px] text-[3a3a3c] h-[16px] focus:outline-0"
              type="email"
              name="email"
              id="email"
              autoComplete="no"
              onKeyPress={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
          </label>
        </article>
      </section>
      <section className="flex flex-col gap-3 md:w-[50%]">
        <div>
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Notifications
          </h3>

          <p className="font-poppins text-[12px] text-[#aeae82] max-w-[93%]">
            Now we get in touch. Choose what notifications you wish to receive
            in your box.
          </p>
          <p className="font-poppins text-[12px] text-[#aeae82] max-w-[93%]">
            Notifications will be sent tio Anikulapo@gmail
          </p>
        </div>
        <h4>Change Email</h4>
        <div className="flex flex-col gap-4 mb-[25px]">
          <label
            htmlFor="recommendations"
            className="font-nunito text-[14px] text-[#1c1c1e] flex flex-row gap-[16px] align-center h-[56px] items-center max-w-[90%]"
          >
            <input
              type="checkbox"
              checked={false}
              id="recommendations"
              name="recommendations"
              className="min-w-[24px] min-h-[24px]"
            />
            Weekly Email with Recommendations
          </label>
          <label
            htmlFor="tips"
            className="font-nunito text-[14px] text-[#1c1c1e] flex flex-row gap-[16px] align-center h-[56px] items-center max-w-[90%]"
          >
            <input
              type="checkbox"
              checked={false}
              id="tips"
              name="tips"
              className="min-w-[24px] min-h-[24px]"
            />
            Weekly Email featuring tips from the blog
          </label>
          <label
            htmlFor="avatar-alert"
            className="font-nunito text-[14px] text-[#1c1c1e] flex flex-row gap-[16px] align-center h-[56px] items-center max-w-[90%]"
          >
            <input
              type="checkbox"
              checked={false}
              id="avatar-alert"
              name="avatar-alert"
              className="min-w-[24px] min-h-[24px] "
            />
            Email alerts when generated Avatar is saved and downloaded from
            cloud
          </label>
          <label
            htmlFor="general"
            className="font-nunito text-[14px] text-[#1c1c1e] flex flex-row gap-[16px] align-center h-[56px] items-center"
          >
            <input
              type="checkbox"
              checked={false}
              className="min-w-[24px] min-h-[24px]"
              id="general"
              name="general"
            />
            General Email updates
          </label>
          <label
            htmlFor="activities"
            className="font-nunito text-[14px] text-[#1c1c1e] flex align-center items-center gap-[16px] h-[56px] max-w-[90%]"
          >
            <input
              type="checkbox"
              checked={false}
              id="activities"
              name="activities"
              className="min-w-[24px] min-h-[24px] "
            />
            Receive recommendations based on my activities
          </label>
        </div>
        <div>
          <label
            htmlFor="tel"
            className="border-solid border-2 w-[90%] max-w-[484px] h-[56px] flex flex-col justify-center gap-0 align-start pt-[8px] pb-[8px] pl-[16px] pr-[16px] border-box font-nunito text-[12px] font-normal 
 text-[#8e8e93] mb-[24px] rounded-lg"
          >
            Phone Number (optional)
            <input
              type="tel"
              name="tel"
              id="tel"
              className="text-[16px] text-[#3a3a3c] h-[24px] focus:outline-0 "
              placeholder="(234) 8144 555-0116"
              autoComplete="no"
              onKeyPress={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
          </label>
          <p>Only for SMS Notifications</p>
        </div>
        <div>
          <p>Have a Question?</p>
          <p>
            We're only an email away:
            <span>support@example.com</span>
          </p>
        </div>
      </section>
    </section>
  );
}
