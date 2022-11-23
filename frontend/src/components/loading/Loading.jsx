import "@dotlottie/player-component";

const Loading = () => {
  return (
    <div className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]">
      <dotlottie-player autoplay loop src="/loading.lottie"></dotlottie-player>
    </div>
  );
};

export default Loading;
