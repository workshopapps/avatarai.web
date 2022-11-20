const NavigationFooter = ({ username, email }) => {
  return (
    <div className="flex p-[16px] gap-[27px] w-[248px] border-t border-t-[#F4F5F6]">
      <div className="flex gap-[8px]">
        <img
          height={`36px`}
          width={`36px`}
          className="rounded-full overflow-hidden"
          src="https://s3-alpha-sig.figma.com/img/5183/4b12/a67380fced7885527aea1b6f1b5c9c8c?Expires=1669593600&Signature=e1~0PHkDKyYeD05hhC6D-ohdEpAQbhqcJFLnwY0n50okMJobjwLUTexyAfmGMfSP9goYcU4RxPie~oQA-AbAlXnrWMcXLLv8~ERa3UQimbnBm4ZyHQohjjfVlEAA1nzQlN~fvITPmVI5k7m-ynxbyHDt9r3fGWIV1L3Nnq3UInQs824rpBxFv5j~2~p6idahnUlfEa-qQLrIwawU78hBR6L9XnNVlOgSwpqsKULUXEkNSKBdMMZJCJ2opGdR3ugLFL~2pB0wM7g2~U0FNY6n8fDZvv06vWxpQdbcqCG2-kUvCCsjkYAlTHwrxhmltQt6vnJNNKfDHdfUvY7PSx2GXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <div className="font-inter font-medium">
          <p className=" text-sm text-[#0D0F11]">{username}</p>
          <p className="text-[10px] text-[#AFB6B6]">{email}</p>
        </div>
      </div>
      <img src="/logout.svg" />
    </div>
  );
};

export default NavigationFooter;
