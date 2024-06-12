import { ScrollParallax } from "react-just-parallax";
import { serviceRobot1 } from "../assets";
import Button from "./Button";

const TrustSection = () => {
  return (
    <div className="relative w-full">
      <div
        className="w-full md:w-[80%] z-2 flex flex-col 
      items-start py-10 justify-center sm:p-10 sm:text-left 
      text-center"
      >
        <ScrollParallax isAbsolutelyPositioned={false}>
          <div
            className="text-5xl md:text-7xl mb-5 text-neutral-50/55 
          cursor-none py-12 sm:py-4"
          >
            Service you can trust
          </div>
          <div className="leading-8 text-lg">
            At Osiex, security isn't just a priority—it's our passion. Our
            platform is fortified with cutting-edge technology and tested in the
            most rigorous environments. Every smart contract is meticulously
            audited to ensure the highest standards of safety and reliability.
            We're dedicated to providing our community with a fortress-like
            infrastructure, offering unmatched protection for your assets. With
            Osiex, your funds are safeguarded by the best in the business, so
            you can focus on growing your digital wealth with peace of mind.
          </div>
        </ScrollParallax>
        <Button
          className="text-md text-pretty mt-10 
        transition-colors duration-700 text-n-1 
        hover:text-[#497dc2] font-grotesk z-1
        hover:underline cursor-pointer font-bold 
        rounded-md hover:bg-slate-200 p-4 hover:text-sm"
        >
          See more to trust more <span></span>
        </Button>
        <div
          className="absolute inset-0 opacity-0 
          transition-opacity hover:opacity-10 "
        >
          <img
            className="w-full h-full object-cover"
            src={serviceRobot1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
