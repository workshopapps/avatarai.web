import { truncateString } from "./truncateString";

const MessagePreview = ({ name, message, time }) => {
  return (
    <div className="flex items-center gap-4 py-4 px-[26px] font-nunito">
      <div className="relative w-[56px] h-[56px]">
        <img
          height={`56px`}
          width={`56px`}
          className="rounded-full w-[56px] h-[56px] object-cover overflow-hidden"
          src="https://s3-alpha-sig.figma.com/img/a230/8ca9/afd207487926c16c03b1077b1edbbdcb?Expires=1669593600&Signature=ctcOhC5srAv-5EXGbjcpvItpTtUaX84vZZ~v5rKSKtfY14W1a0CKKLM~TBTRnJTD20sKvtnvaiRGdZ7zB5gG7ZD~g9-q39ihG7CKUSQiF-vYxdbchtbRPrKAa-cogrLx~ZxzgHzAuJP6X0sKjgNdrbTgR8kEHuKRtuNfhcOo7MNxhPY20AZmeS2pzOjqvgHTfXTk0hHKYKApUou0PfEJZuVamV6ShkA--VIFUZnsd3mw28kld9nKj15EnG1zX5ifGcCtYbsVMYZs2gUtxvQeVJEGL2gVT-xS~CtPMwIZETnnmWur-e-pr~A3cCOd1W6MrwbtirekvtC9PBDabbVZfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <div className="right-0 bottom-0 absolute rounded-full w-[14px] h-[14px] bg-[#2800C7] border-[1.5px] border-[#FFFFFF]"></div>
      </div>
      <div className="flex flex-col">
        <p className="text-xl text-[#344054]">{name}</p>
        <div className="flex gap-[40px] items-end">
          <p className="text-[#667085]">{truncateString(message, 30)}</p>
          <p className="text-[#333333] font-semibold text-[12px]">.{time}</p>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;
