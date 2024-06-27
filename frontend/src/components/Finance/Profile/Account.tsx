import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useNavigate } from "react-router-dom";
import { accountData } from "../constants";

const Account = () => {
  const navigate = useNavigate();

  const commonStyle = "flex flex-col justify-center p-3";
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
        Account
      </div>
      <div className="border border-n-5 rounded-md">
        {accountData?.map((data, idx) => (
          <div
            onClick={() => {
              data.actionType === "link" && navigate({ pathname: data.action });
            }}
            key={idx}
            className={`${
              data.align === "row"
                ? `p-3 flex justify-start items-center 
           gap-2`
                : `${commonStyle} `
            } ${commonBorderStyle}`}
          >
            <div
              className="flex justify-start items-center 
            gap-1"
            >
              <Icon icon={data.icon} className="text-xl font-bold opacity-80" />
              <span className="text-lg font-bold opacity-80">{data.text}</span>
            </div>
            <span
              className={`${
                data.align == "row" ? "text-base italic ml-2" : "text-xs"
              }`}
            >
              {data.subText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
