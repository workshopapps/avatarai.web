import "@dotlottie/player-component";

const Loading = ({ height, width }) => {
  return (
    <dotlottie-player
      autoplay
      loop
      src="/loading.lottie"
      style={{ height, width }}
    ></dotlottie-player>
  );
};

export default Loading;
