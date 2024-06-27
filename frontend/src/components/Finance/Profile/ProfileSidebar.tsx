import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Link } from "react-router-dom";
import { profileSidebarData } from "../constants";

const ProfileSidebar = () => {
  const commonStyle = "hidden md:flex justify-start";
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
