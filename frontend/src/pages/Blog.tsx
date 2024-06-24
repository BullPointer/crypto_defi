/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import BlogBody from "../components/Blogs/BlogBody";
import BlogHeader from "../components/Blogs/BlogHeader";
import { useParams } from "react-router-dom";
import { Footer, Navbar } from "..";

const Blog = () => {
  const params = useParams();

  const handleScrollTo = () =>
    window.scrollTo({
      top: screen.width <= 700 ? 120 : 250,
      left: 0,
      behavior: "smooth",
    });
  useEffect(() => {
    document.title = "Blog";
    addEventListener("load", handleScrollTo);
    return () => removeEventListener("load", handleScrollTo);
  }, []);

  return (
    <div className="p-3 sm:p-5">
      <Navbar />
      <BlogHeader />
      {Object.keys(params).length < 1 && (
        <div className="pt-5 flex justify-center items-center">
          <div
            className={`w-[90%] md:w-[80%] lg:w-[50%] mt-10 
            lg:mt-0 p-4 text-lg sm:text-xl md:text-[22px]
            rounded-b-lg font-bold text-center text-[#e9e6e6]
            bg-gradient-to-b from-n-3/5 to-[#332f42d8]`}
          >
            Cryptocurrency related news and most recent stories on blockchain
            tech, DeFi industry, crypto markets, and renowned coins.
          </div>
        </div>
      )}
      <BlogBody />
      <Footer />
    </div>
  );
};

export default Blog;
