const FaqHero = () => {
  return (
    <section className="flex flex-col gap-[20px] items-center p-[24px] md:p-[94px] bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/67ae/db4d/827320a8065271b507f5f40f95906d6f?Expires=1669593600&Signature=X4aMQMssyYHb-msSCgO1FT9ym4FF2B4sfej9jUoMVFYCZpXlL2ddPbMc5Ux1o0-NSqyzonzG72MT8RUVhZYVClWFKNXCcGeB8wB-p5UcuIEYdoJIYsNP1NJMZDD7u5oQDvFZs-ouRQELoH7f4Hsr2Ll~I2Adt6fUb~XgMq7V4Uwbgd4rgs8uscstYij7P938JgYmsK3nIGTgfVY9Um38aRUTQTkzigdfInmFRsi0oQwNKhvNnSloyNy-1xLP3EDl6G~~a3DkcAw2eaL4vEEgu3kdwVKCB6mKIM1XJKcYYppVlCwuGGseQvDCHoIq~m16qrguQKKUR~E2t-ONhxsQug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">
      <header className="flex flex-col gap-[8px] text-[20px] items-center font-nunito text-white">
        <h1
          data-testid="heading"
          className="text-white font-bold md:text-[32px]"
        >
          Frequently Asked Questions
        </h1>
        <p className="text-white">Have questions? We are here to help.</p>
      </header>
      <div className="flex items-center md:gap-4 gap-1 justify-between p-[5px] h-[52px] w-full max-w-[512px] bg-white rounded">
        <div className="h-full flex md:gap-[8px] gap-1 items-center font-nunito grow text-[#848484] rounded py-[8px] md:pl-[18px] pl-2">
          <img src="/magnifying-glass.svg" />
          <input
            type={`text`}
            className="grow outline-none"
            placeholder="Type keyword to find answer"
          />
        </div>
        <div className="cursor-pointer bg-[#8B70E9] h-full flex items-center font-nunito text-white rounded px-[20px] py-[8px]">
          <span className="text-white">Search</span>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
