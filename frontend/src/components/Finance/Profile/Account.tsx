import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useNavigate } from "react-router-dom";

const accountData = [
  {
    _id: 0,
    icon: "ic:round-account-tree",
    text: "Account Type",
    subText: "Personal",
    align: "row",
  },
  {
    _id: 1,
    icon: "f7:gift",
    text: "Refer to earn",
    subText: "Earn bonuses from us by referring our service",
    align: "column",
    actionType: "link",
    action: "/fi/profile/account/refer_to_earn",
  },
  {
    _id: 2,
    icon: "material-symbols:stabilization-lock",
    text: "Change Password",
    subText: `You will be prompted to click a verification link sent to the email
            you registered with email@email.com`,
    align: "column",
    actionType: "button",
    action: "Confirm Change of Password",
  },
  {
    _id: 3,
    icon: "solar:password-outline",
    text: "Check Activity",
    subText: "Learn about your account",
    align: "column",
    actionType: "link",
    action: "/fi/profile/account/check_activity",
  },
];
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
