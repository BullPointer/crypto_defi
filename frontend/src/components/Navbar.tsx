import { brainwave } from "../assets";
import { navigation } from "../constants/";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Navbar = () => {
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
    justify-evenly p-4"
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
            ? "translate-y-[55%] backdrop-blur-sm h-screen"
            : "-translate-y-[250%] backdrop-blur-none transition-none"
        }  w-full md:w-fit flex flex-col 
        md:flex-row  items-center transition-translate
        duration-[1000ms] ease-in-out font-code bg-n-8/90
        md:text-[0.8rem] text-[1.4rem] gap-5 mt-2 md:mt-0 
         absolute md:relative z-10 md:translate-y-[0%] 
         left-0`}
      >
        {navigation?.map((list, idx) => (
          <li
            className={`${list.onlyMobile && "block md:hidden"}
            cursor-pointer  ${!list.isList && "hover:bg-n-4/5 "} 
            w-full md:w-auto flex ${
              list.isList && "flex-col items-start "
            }  justify-start 
            rounded-none md:rounded-md
            
            `}
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
                className={`w-full ${
                  list.isList &&
                  `flex justify-between items-center gap-3 
                  opacity-60 md:opacity-100 pb-3 md:pb-0 pr-2`
                }`}
              >
                {!list.isList ? (
                  <NavLink to={`/${list.url}`}>
                    <div className="p-3 md:p-5">{list.title}</div>
                  </NavLink>
                ) : (
                  <div className="p-3 md:p-5">{list.title}</div>
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

              <div className="h-auto w-full md:w-auto md:absolute left-0 bg-[#171825f3] ">
                {list.isList &&
                  showList === list.title.toLowerCase() &&
                  list?.subLink?.map((data, subidx) => (
                    <Link key={subidx} to={`/${data.url}`}>
                      <div className=" w-full ">
                        <div className=" px-12 py-3 hover:bg-n-4/5 w-full">
                          {data.title}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <Link
          to="/signup"
          className="button hidden mr-8 text-n-1/50 
          transition-colors hover:text-n-1 md:block"
        >
          New account
        </Link>
        <Link to={"/login"}>
          <Button defaultStyling className="" href="#login">
            Sign in
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
