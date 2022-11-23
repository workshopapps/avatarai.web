import Loading from "../loading/Loading";

const Content = () => {
  return (
    <div className="flex flex-col gap-[120px] h-full justify-center items-center">
      <div className="flex flex-col gap-[4px] items-center">
        <h2 className="md:text-[32px] text-[18px] text-[#333333] font-semibold">
          Generating Avatar
        </h2>
        <p className="md:text-xl text-sm text-[#6C6C6C] font-medium">
          We are currently generating your Avatar
        </p>
      </div>
      <Loading />
      <div>
        <p className="font-medium md:text-xl text-sm text-[#6C6C6C]">
          Rendering Avatars...
        </p>
      </div>
    </div>
  );
};

export default Content;
