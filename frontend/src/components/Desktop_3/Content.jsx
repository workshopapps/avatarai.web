import Loading from "../loading/Loading";

const Content = () => {
  return (
    <div className="flex flex-col gap-[120px] h-full justify-center items-center">
      <div className="flex flex-col gap-[4px] items-center">
        <h2 className="md:text-[32px] text-[18px] text-[#333333] font-semibold">
          Getting your images
        </h2>
        <p className="md:text-xl text-sm text-[#6C6C6C] font-medium">
          Wait while we load your images
        </p>
      </div>
      <Loading />
      <p className="font-medium md:text-xl text-sm text-[#6C6C6C]">
        Uploading images...
      </p>
    </div>
  );
};

export default Content;
