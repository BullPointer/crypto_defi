import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopStories = () => {
  const [topStories, setTopStories] = useState([] as TopStoriesType[]);

  type TopStoriesType = { title: string; _id: number };

  const handleScrollTo = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    const stories = [
      { title: "Bitcoin hits high", _id: 0 },
      { title: "Cypto is going no where", _id: 1 },
      { title: "I'm coming home", _id: 2 },
    ];
    setTopStories([...stories]);
  }, []);

  return (
    <div
      className="flex flex-col justify-start items-start gap-2 
    py-2 border h-auto left-10 w-[90%] mx-auto bg-white  
    shadow-md hover:shadow-white rounded-xl"
    >
      <div className="text-[22px] px-5 rounded-t-xl font-[semibold] text-[#ff4b12]">
        Top stories
      </div>
      <div className="px-5 text-black text-[16px] ">
        <ul className="flex flex-col justify-center items-start gap-1">
          {topStories?.map((story: TopStoriesType, index) => (
            <Link
              to={`/blog/${story?.title?.split(" ").join("-").toLowerCase()}`}
              state={{ id: story._id }}
              onClick={handleScrollTo}
              className="last:border-b-0 text-[15px] py-2 w-full border-b cursor-pointer font-thin hover:text-blue-400"
              key={index}
            >
              {story.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopStories;
