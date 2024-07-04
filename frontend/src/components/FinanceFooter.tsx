import { Link } from "react-router-dom";
import img1 from "../assets/google-play-store.png";
import img2 from "../assets/apple-store.png";
import { financeFooterData } from "./Finance/constants";
import { socials } from "../constants";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const FinanceFooter = () => {
  return (
    <div className="mt-[10rem] p-5 text-[#e0dbdb9c]">
      <div
        className="flex flex-col md:flex-row justify-between 
      items-start md:items-center my-5 px-10"
      >
        <div className="flex flex-col items-start gap-2 my-8 ">
          <span className="text-sm font-bold text-white">Follow Us</span>

          <ul className="flex gap-3 ">
            {socials?.map((social, idx) => (
              <li key={idx} className="mr-2 mx-auto sm:mx-0">
                <Link to={social.url}>
                  <Icon
                    width={25}
                    height={25}
                    className="fa-brands"
                    icon={social.iconUrl}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2 my-8 ">
          <span
            className="text-sm font-bold text-white 
          text-center"
          >
            Mobile Apps
          </span>
          <div className="flex  gap-8">
            {[img1, img2].map((img, idx) => (
              <img
                className="h-[2rem] w-auto cursor-pointer"
                key={idx}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div
          className="flex flex-col items-start gap-2 
        text-xs "
        >
          <span className="text-sm font-bold text-white">Email Support</span>
          <span>support@osifi.com</span>
        </div>
      </div>
      <ul className="flex justify-center items-center gap-2 py-2">
        {financeFooterData?.map((data, idx) => (
          <Link to={data.link} key={idx}>
            <li className="text-xs hover:text-[#c2a4c2f8]">{data.text}</li>
          </Link>
        ))}
      </ul>
      <div className="text-sm text-center mt-2 py-2">©2024 OSIFI, Plc</div>
      <div></div>
    </div>
  );
};

export default FinanceFooter;
