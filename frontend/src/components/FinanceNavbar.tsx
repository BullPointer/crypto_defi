import { brainwave } from "../assets";
import { financeNavigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const FinanceNavbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showList, setShowList] = useState<string | null>(null);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleShowList = (title: string) => {
    setShowList((prev) => {
      if (prev === title) {
        return null;
      } else return title;
    });
  };

  return (
    <nav
      className="relative flex flex-col md:flex-row 
    justify-evenly p-5"
    >
      <div className="flex justify-between">
        <Link to={"/"} className="block w-[12rem] xl:mr-8 p-4">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>
        <Button
          className={`ml-auto lg:hidden h-8 flex items-center 
          p-4 border-2 rounded-md ${
            openNavigation
              ? "rounded-tl-3xl rounded-br-3xl"
              : "rounded-tr-3xl rounded-bl-3xl"
          }`}
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      <ul
        className={`${
          openNavigation
            ? `translate-y-[55%] backdrop-blur-sm h-fit py-10
            overflow-y-hidden `
            : "-translate-y-[250%] backdrop-blur-none transition-none"
        }  w-full md:w-fit flex flex-col 
        md:flex-row  items-center transition-translate
        duration-[1000ms] ease-in-out font-code bg-n-8/90
        md:text-[0.8rem] text-[1.4rem] gap-5 mt-2 md:mt-0 
         absolute md:relative z-10 md:translate-y-[0%] 
         left-0`}
      >
        {financeNavigation?.map((list, idx) => (
          <li
            className={`
             cursor-pointer ${!list.isList && "hover:bg-n-4/5 "} 
            w-full md:w-auto flex ${
              list.isList && "flex-col items-start "
            }  justify-start 
            rounded-none md:rounded-md`}
            key={idx}
            onMouseEnter={() =>
              window.innerWidth >= 768 &&
              handleShowList(list.title.toLowerCase())
            }
            onMouseLeave={() =>
              window.innerWidth >= 768 &&
              handleShowList(list.title.toLowerCase())
            }
            onClick={() => handleShowList(list.title.toLowerCase())}
          >
            <div className="relative w-full">
              <div
                className={`${
                  list.isList &&
                  `flex justify-between items-center pr-2
                  opacity-60 md:opacity-100 pb-3 md:pb-0 `
                }`}
              >
                {!list.isList ? (
                  <NavLink
                    onClick={() => setOpenNavigation(false)}
                    to={list.url}
                  >
                    <div className="p-3 md:p-5">{list.title}</div>
                  </NavLink>
                ) : (
                  <div className="p-3 md:py-5">{list.title}</div>
                )}
                {list.isList &&
                  (showList === list.title.toLowerCase() ? (
                    <Icon
                      className="text-white text-xl"
                      icon="ep:arrow-up-bold"
                    />
                  ) : (
                    <Icon
                      className="text-white text-xl"
                      icon="ep:arrow-down-bold"
                    />
                  ))}
              </div>
              <div className="z-50 backdrop-blur-3xl bg-[#10111a86] h-auto w-full md:w-auto md:absolute left-0 ">
                {list.isList &&
                  showList === list.title.toLowerCase() &&
                  list?.subLink?.map((data, subidx) => (
                    <Link
                      onClick={() => setOpenNavigation(false)}
                      key={subidx}
                      to={`${data.url}`}
                    >
                      <div className=" w-full ">
                        <div
                          className="flex items-center gap-2 
                        px-12 md:px-8 py-3 hover:bg-n-3/5 w-full 
                        text-[#4370cae5]"
                        >
                          <Icon className="text-lg" icon={data.icon} />
                          <span>{data.title}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Button defaultStyling className="" href="#login">
        Connect Wallet
      </Button>
    </nav>
  );
};

export default FinanceNavbar;
