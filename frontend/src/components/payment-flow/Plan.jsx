const Plan = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-nunito text-base">Basic</p>
      <div className="flex flex-row gap-2 items-center">
        <span className="font-nunito font-semibold text-2xl">$14</span>
        <span className="font-nunito text-base">/</span>
        <span className="font-nunito text-base">Per Month</span>
      </div>
      <p className="text-[#8b70e9] font-nunito text-base">View Details</p>
    </div>
  );
};

export default Plan;
