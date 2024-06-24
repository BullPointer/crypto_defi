/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getBlogById } from "../../handleApi/documentApi";
// import parser from "html-react-parser";
import { Link, useLocation } from "react-router-dom";
import { BlogsType } from "../../context/BlogContext";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Img from "../../assets/benefits/image-2.png";
import { blogData } from "./BlogListing";
import { socials } from "../../constants";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import BlogCard from "./components/BlogCard";

const BlogContainer = () => {
  const { state } = useLocation();
  const id = state?.id;
  const [blogs, setBlog] = useState({} as BlogsType);

  const getBlog = async () => {
    try {
      const { data } = await getBlogById(id);
      setBlog(data.data);
      console.log(blogs);
    } catch (error) {
      console.log("The error for Blog Container ", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  const blog = blogData[0];
  console.log("Much data on blog: ", blog);

  return (
    <div className="">
      <Navbar />
      <div className="p-10">
        <div
          className={`prose bg-[#eeecec] text-black 
        h-auto rounded-md px-5 py-14 md:p-16 mt-10 max-w-full`}
        >
          {/* {parser(String(blog?.notes))} */}
          <div className="px-3 text-left">
            <div className="h-[20rem] md:h-[28rem] w-full mb-5 ">
              <img
                className="w-full h-full rounded-md object-cover"
                src={Img}
                alt=""
              />
            </div>
            <div
              className="text-3xl md:text-2xl lg:text-xl 
            font-bold py-2 leading-9 text-center md:text-left"
            >
              {blog.title}
            </div>
            <div>
              <div className="flex justify-between text-base md:text-sm">
                <div className="font-semibold italic">{blog.date}</div>
                <div className="font-serif font-[600]">
                  Written by: {blog.writer}
                </div>
              </div>
              <ul className="flex gap-3 my-4">
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
            <div className="py-8">{blog.content}ssss</div>
          </div>
        </div>
        <div className="my-16">
          <div className="text-3xl font-bold py-5">Trending News</div>
          <div className="bg-white text-black rounded-md">
            <BlogCard blogData={blogData} showMore={false} displayIdx={3} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogContainer;
