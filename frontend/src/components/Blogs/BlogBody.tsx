/* eslint-disable react/prop-types */
import CurrenciesCard from "./CurrenciesCard";
import TopStories from "./TopStories";
import { Outlet } from "react-router-dom";

const BlogBody = () => {
  return (
    <div
      className="w-full h-fit pt-10 lg:pt-0 grid gap-5 
    md:gap-0 grid-cols-1 xl:grid-cols-3 mx-auto pb-20"
    >
      <div
        className="xl:col-span-2 my-10 bg-[#eeecec] 
      text-[#080808ef] min-h-screen md:min-h-full rounded-md"
      >
        <Outlet />
      </div>
      <div
        className="flex flex-col justify-start items-center 
      gap-6 pt-10 pb-0"
      >
        <CurrenciesCard />
        <div
          className="flex flex-col justify-start 
          items-start gap-2 py-2 border h-auto left-10 
          w-[90%] mx-auto bg-white shadow-md 
          hover:shadow-white rounded-xl"
        >
          <div
            className="text-[22px] px-5 rounded-t-xl 
          font-[semibold] text-[#ff4b12]"
          >
            Would like to make a contribution by writing for our Blog?
          </div>
          <div className="px-5 text-black text-[16px] py-2">
            Hurry now!{" "}
            <span
              className="font-bold text-sm text-white 
            bg-[#353641] hover:bg-gradient-to-br 
            from-slate-700 to-slate-900 shadow p-2 
            rounded-sm rounded-tl-xl rounded-br-2xl  
            ml-2 cursor-pointer"
            >
              Get started
            </span>
          </div>
        </div>
        <TopStories />
      </div>
    </div>
  );
};

export default BlogBody;
