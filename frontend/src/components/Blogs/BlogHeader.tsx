import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useBlogContext } from "../../context/BlogContext";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogHeader = () => {
  const { handleCategoryNav, active } = useBlogContext();
  const activeStyle = (selectedCategory: string) =>
    selectedCategory == active
      ? "gradient-blue-card rounded-full text-red-400"
      : "";
  const [displayList, setDisplayList] = useState(false);

  return (
    <div className="flex flex-col justify-end items-center w-full h-auto lg:h-[30vh]">
      <div
        className="py-3 text-5xl w-[80%] text-center 
      rounded-t-lg text-[#e7e4e3] font-extrabold"
      >
        BLOG
      </div>
      <div className="w-[90%] lg:w-[80%] mb-2">
        <ul
          className="hidden lg:flex gap-4 py-4 px-2 
        font-bold text-[#e9e6e6]"
        >
          {[
            "All",
            "Latest News",
            "For You",
            "Price Predictions",
            "Crypto Updates",
          ].map((list, index) => (
            <Link
              to={
                list.toLowerCase() === "all"
                  ? "/blog"
                  : `category/${list.split(" ").join("-").toLowerCase()}`
              }
              onClick={() => handleCategoryNav(list)}
              className={`text-lg cursor-pointer p-4 
              hover:text-red-300 ${activeStyle(list)}`}
              key={index}
            >
              {list}
            </Link>
          ))}
        </ul>
        <div>
          {displayList && (
            <div
              onClick={() => setDisplayList(!displayList)}
              className="h-screen w-full absolute left-0 top-0 
              text-xl"
            />
          )}
          <div
            className="relative w-full lg:hidden block 
            h-[100%] p-1 rounded-md"
          >
            <ul
              className="absolute top-0 left-0 z-2 w-full p-2 
            rounded-md backdrop-blur-sm bg-[#171722e3] shadow-md 
            font-bold "
              id=""
            >
              <li
                className="flex flex-row justify-between 
            items-center"
              >
                <div
                  className="px-4 py-1 md:text-lg opacity-80 
              font-[600]"
                >
                  {active}ddd
                </div>
                <div
                  onClick={() => setDisplayList(!displayList)}
                  className="px-4 cursor-pointer py-1 opacity-80"
                >
                  <Icon icon="ep:arrow-down-bold" />
                </div>
              </li>
              {displayList &&
                [
                  "All",
                  "Latest News",
                  "For You",
                  "Price Predictions",
                  "Crypto Updates",
                ].map((list, index) => (
                  <Link
                    to={
                      list.toLowerCase() === "all"
                        ? "/blog"
                        : `category/${list.split(" ").join("-").toLowerCase()}`
                    }
                    className={`flex flex-col items-start 
                  justify-center py-2 text-lg px-4 cursor-pointer 
                  hover:text-red-300 ${activeStyle(list)}`}
                    key={index}
                  >
                    {list}
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
