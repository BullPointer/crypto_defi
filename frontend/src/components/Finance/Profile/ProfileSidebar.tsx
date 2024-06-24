import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Link } from "react-router-dom";

const profileSidebarData = [
  {
    icon: "material-symbols:account-circle-full",
    text: "Account",
    link: "account",
  },

  {
    icon: "pajamas:information-o",
    text: "Personal Info",
    link: "personal-info",
  },
  {
    icon: "material-symbols:edit-notifications-outline-sharp",
    text: "Notifications",
    link: "notifications",
  },
  {
    icon: "ic:round-help-outline",
    text: "Help",
    link: "help",
  },
  {
    icon: "material-symbols:rule-settings-rounded",
    text: "Application Settings",
    link: "application-settings",
  },
];
const ProfileSidebar = () => {
  const commonStyle = "flex justify-start";
  return (
    <div
      className="w-[80%] mx-auto bg-transparent bg-opacity-30 
    "
    >
      <ul
        className={`w-full ${commonStyle} flex-col gap-2 
        text-[#4370cae5] 
      `}
      >
        {profileSidebarData?.map((data, idx) => (
          <Link className="w-fit" key={idx} to={data.link}>
            <li
              className={`w-fit ${commonStyle} items-center gap-2 py-2 
            px-5 cursor-pointer`}
            >
              <Icon icon={data.icon} />
              <span>{data.text}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
