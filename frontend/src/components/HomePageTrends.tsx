import moment from "moment";
import { blogData } from "./Blogs/BlogListing";
import { shortenSubtopic, shortenTopic } from "../utils/shortenText";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Link } from "react-router-dom";

const HomePageTrends = () => {
  return (
    <div className="w-[80%] mx-auto h-auto my-20">
      <div>
        <div
          className="text-center text-[2.1rem] md:text-[3rem] font-bold 
        py-10"
        >
          {"Blog Updates".toUpperCase()}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          {blogData?.slice(0, 6).map((list, idx) => (
            <Link key={idx} to={`/blog/${list._id}`}>
              <div
                className="p-5 bg-gradient-to-tr from-n-6 
              to-n-4 rounded-3xl border border-n-3/5 
              cursor-pointer hover:scale-105 transition-scale 
              duration-500"
              >
                <div
                  className="text-xl md:text-2xl py-4 font-bold 
              opacity-85"
                >
                  {shortenTopic(list.title)}
                </div>
                <div
                  className="flex justify-between py-1 font-bold
               text-sm text-[#e04e22e6]" // 4370cae5 ff4b12
                >
                  <div className="italic">
                    {moment(list.date).format("MMM DD, YYYY")}
                  </div>
                  <div className="flex items-center">
                    <Icon className="text-2xl " icon={"ph:dot-fill"} />
                    <span>OSIFI</span>
                  </div>
                </div>
                <div className="py-2 text-[18px] md:text-[16px]">
                  {shortenSubtopic(list.content)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link to={"/blog"}>
        <div
          className=" border border-n-[#4370ca5e] w-fit 
        p-4 mx-auto mt-5 hover:font-bold rounded-md rounded-tl-3xl 
        rounded-br-3xl hover:rounded-none"
        >
          Check out Blog
        </div>
      </Link>
    </div>
  );
};

export default HomePageTrends;
