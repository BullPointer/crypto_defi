import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Help = () => {
  const commonStyle = "flex gap-2 items-center p-3";
  const commonBorderStyle = `border border-n-5 rounded-md 
  cursor-pointer`;
  return (
    <div>
      <div
        className={`p-3 text-3xl font-bold ${commonBorderStyle}
          mb-1 text-[#abafd4] backdrop-blur-3xl 
          bg-gradient-to-bl from-[#151b29e5] to-[#0f0c1a]
        `}
      >
        Help
      </div>
      <div className="mt-2 ">
        <div
          className={`${commonStyle} ${commonBorderStyle} 
            hover:scale-105 transition-scale duration-500`}
        >
          <Icon className="text-xl" icon={"ic:outline-chat-bubble-outline"} />
          <div className="text-xl">Contact Support</div>
        </div>
        <div className="my-2" />
        <div
          className={`${commonStyle} ${commonBorderStyle} 
            hover:scale-105 transition-scale duration-500`}
        >
          <Icon className="text-xl" icon={"ic:outline-contact-support"} />
          <div className="text-xl">Help Center</div>
        </div>
      </div>
    </div>
  );
};

export default Help;
