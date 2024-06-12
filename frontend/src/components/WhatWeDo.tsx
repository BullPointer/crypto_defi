import { BackgroundCircles } from "./designs/BackgroundCircles";

const WhatWeDo = () => {
  return (
    <div className="relative">
      <div
        className="flex justify-center md:justify-end 
      text-center items-center min-h-[100vh] py-10 md:py-0"
      >
        <div className="w-[80%]">
          <div
            className="text-2xl sm:text-3xl md:text-5xl mb-5 text-neutral-50 
          cursor-none py-12 sm:py-4"
          >
            Your No.1 choice for exchange, lending, earning
          </div>
          <div className="leading-8 text-lg text-neutral-300/50">
            Discover the ultimate crypto playground where your digital assets
            come to life! Effortlessly exchange over 900+ cryptocurrencies, earn
            rewards just by storing your assets, and borrow crypto whenever you
            need it. Dive into a world where your investments work for you, and
            experience the freedom of financial growth like never before. Join
            us today and unlock the full potential of your digital wealth!
          </div>
        </div>
      </div>
      <BackgroundCircles />
    </div>
  );
};

export default WhatWeDo;
