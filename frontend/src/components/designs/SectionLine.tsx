export const HorizontalLine = () => {
  return (
    <div className="w-full h-[50px] relative flex flex-row justify-center items-center">
      <div className="w-5 h-5 aspect-square border border-neutral-300 rounded-full" />
      <div className=" w-[90%] h-[0.08px] bg-neutral-300" />
      <div className="w-5 h-5 aspect-square border border-neutral-300 rounded-full" />
    </div>
  );
};

export const VerticalLine = () => {
  return (
    <div className="my-10">
      <div className="w-full border-[1px] -rotate-1 border-neutral-300" />
    </div>
  );
};
