import { useNavigate } from "react-router-dom";
import { ActionBtns } from "./ActionBtns";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const TopIconBar = () => {
  const navigate = useNavigate();
  const commonStyle = "flex justify-between items-center";

  return (
    <div className={`${commonStyle} flex-col-reverse md:flex-row`}>
      <ActionBtns />
      <div
        onClick={() => navigate(-1)}
        className={`${commonStyle} gap-1 text-[#4370cae5] 
          cursor-pointer bg-transparent backdrop-blur-3xl 
          bg-n-6 py-3 px-5 rounded-full`}
      >
        <Icon
          className="text-xl "
          icon={"material-symbols:arrow-circle-left-outline-rounded"}
        />
        <span className="text-sm">Back</span>
      </div>
    </div>
  );
};

export default TopIconBar;
