import { brainwave } from "../assets";
import { navigation } from "../constants/";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <nav
      className="relative flex flex-col md:flex-row 
    justify-evenly p-4"
    >
      <div className="flex justify-between">
        <a className="block w-[12rem] xl:mr-8 p-4" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
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
            cursor-pointer p-3 md:p-5`}
            key={idx}
          >
            {list.title}
          </li>
        ))}
      </ul>
      {/* )} */}

      <div className="flex items-center">
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 
          transition-colors hover:text-n-1 md:block"
        >
          New account
        </a>
        <Button
          className="hidden md:flex border border-spacing-10 
          border-n-5 rounded-md p-5 cursor-pointer bg-gradient-to-r 
          from-slate-500 to-red-300"
          href="#login"
        >
          Sign in
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
