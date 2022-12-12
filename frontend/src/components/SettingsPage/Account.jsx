export default function Account() {
  return (
    <section className="flex flex-col md:flex-row border-box w-[100%]">
      <section className="md:w-[50%] ">
        <article className="mb-[25px]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Account
          </h3>

          <label htmlFor="first-name"
          className="">
            First Name
            <input
              placeholder="Zazu"
              type="first-name"
              name="first-name"
              id="first-name"
            />
          </label>

          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              placeholder="Anikulapo"
              type="last-name"
              name="last-name"
              id="last-name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Anikulapo@gmail.com"
              type="email"
              name="email"
              id="email"
            />
          </div>
        </article>
        <article className="mb-[25px]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Location
          </h3>
          <div>
            <label htmlFor="address">Address</label>
            <input
              placeholder="Abuja, Lagos"
              type="address"
              name="address"
              id="address"
            />
          </div>
          <div>
            <label htmlFor="City">City</label>
            <input placeholder="Ikeja" type="city" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="State">State</label>
            <input placeholder="Lagos" type="state" name="state" id="state" />
          </div>
          <div>
            <label htmlFor="zip">Zip code</label>
            <input placeholder="12345" type="number" name="zip" id="zip" />
          </div>
        </article>
        <article className="mb-[25px]">
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Billing
          </h3>
          <div>
            <label htmlFor="full-name">Contact</label>
            <input
              placeholder="Anikulapo"
              type="full-name"
              name="full-name"
              id="full-name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Anikulapo@gmail.com"
              type="email"
              name="email"
              id="email"
            />
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-3 md:w-[50%]">
        <div>
          <h3 className="font-nunito text-[18px] text-[700] text-[#1c1c1e] mb-[24px]">
            Notifications
          </h3>

          <p>
            Now we get in touch. Choose what notifications you wish to receive
            in your box.
          </p>
          <p>Notifications will be sent tio Anikulapo@gmail</p>
        </div>
        <h4>Change Email</h4>
        <div className="flex flex-col gap-4 mb-[25px]">
          <label htmlFor="recommendations">
            <input
              type="checkbox"
              checked={false}
              id="recommendations"
              name="recommendations"
            />
            Weekly Email with Recommendations
          </label>
          <label htmlFor="tips">
            <input type="checkbox" checked={false} id="tips" name="tips" />
            Weekly Email featuring tips from the blog
          </label>
          <label htmlFor="avatar-alert">
            <input
              type="checkbox"
              checked={false}
              id="avatar-alert"
              name="avatar-alert"
            />
            Email alerts when generated Avatar is saved and downloaded from
            cloud
          </label>
          <label htmlFor="general">
            <input
              type="checkbox"
              checked={false}
              id="general"
              name="general"
            />
            General Email updates
          </label>
          <label htmlFor="activities">
            <input
              type="checkbox"
              checked={false}
              id="activities"
              name="activities"
            />
            Receive recommendations based on my activities
          </label>
        </div>
        <div>
          <label htmlFor="tel">Phone Number (optional)</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="(234) 8144 555-0116"
          />
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
