import { useState } from "react";
import { shortenSubtopic, shortenTopic } from "../../../utils/shortenText";
import { Link } from "react-router-dom";

type BlogDataType = {
  _id: Number;
  blogImg: String;
  date: String;
  writer: String;
  title: String;
  content: String;
};
type BlogCardProps = {
  blogData: BlogDataType[];
  showMore?: Boolean;
  displayIdx?: number;
};

const BlogCard = ({ blogData, showMore, displayIdx }: BlogCardProps) => {
  const [showCount, setShowCount] = useState<number>(displayIdx || 6);
  const handleShowmore = () => {
    setShowCount((prev) => prev + 6);
  };

  const handleScroll = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  };

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 p-2 gap-3"
      >
        {blogData?.slice(0, showCount)?.map((list: BlogDataType, idx) => (
          <div
            key={idx}
            className="px-3 text-center md:text-left 
          bg-white transition-scale duration-1000 
          hover:scale-105 cursor-pointer"
          >
            <Link onClick={handleScroll} to={`/blog/${list._id}`}>
              <div className="h-[15rem] md:h-[18rem] w-full mb-5 ">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={String(list.blogImg)}
                  alt=""
                />
              </div>
              <div
                className="text-3xl md:text-2xl lg:text-xl 
              font-bold py-2 leading-9"
              >
                {shortenTopic(list.title)}
              </div>
              <div className="flex justify-between py-1 text-base md:text-sm">
                <div className="font-semibold italic">{list.date}</div>
                <div className="font-serif font-[600]">
                  Written by: {list.writer}
                </div>
              </div>
              <div className="py-8">{shortenSubtopic(list.content)}</div>
              <div></div>
            </Link>
          </div>
        ))}
      </div>
      {showMore && (
        <div
          onClick={handleShowmore}
          className="w-fit my-2 bg-n-7/20 font-bold 
          transition-bg duration-1000 hover:bg-gradient-to-br from-n-5 
          to-n-3/5 backdrop-blur-md py-3 px-6 mx-auto 
          cursor-pointer hover:text-white rounded-tl-3xl 
          rounded-br-3xl hover:rounded-tr-3xl 
          hover:rounded-bl-3xl"
        >
          Show More
        </div>
      )}
    </div>
  );
};

export default BlogCard;
