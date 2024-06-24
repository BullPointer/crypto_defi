/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { getAllBlog } from "../handleApi/documentApi";

type ContextType = {
  active: String;
  handleCategoryNav: (category: string) => void;

  // setCurrentPage,
};

type ChildrenProps = {
  children: React.ReactNode;
};

type BlogProps = {
  category: string;
};

export type BlogsType = {
  _id: String;
  blogImage: String;
  title: String;
  subtitle: String;
  date: String;
  author: String;
  category: String;
  notes?: String;
};

const BlogContext = createContext({} as ContextType);

export const BlogProvider = ({ children }: ChildrenProps) => {
  const [blogs, setBlogs] = useState([] as BlogsType[]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await getAllBlog();
        const filteredBlog = data.blogs?.filter(
          (blogs: BlogProps) => blogs.category !== "Trending Stories"
        );
        setBlogs(filteredBlog);
        console.log(blogs);
      } catch (error) {
        console.log("The error for Blog Container ", error);
      }
    };

    getBlogs();
  }, []);

  const handleCategoryNav = async (category: string) => {
    try {
      const { data } = await getAllBlog();
      const filteredBlog = data.blogs?.filter(
        (blogs: BlogProps) => blogs.category === category
      );
      if (category === "All") {
        setBlogs(data.blogs);
        setActiveCategory("All");
      } else {
        setBlogs(filteredBlog);
        setActiveCategory(category);
      }
    } catch (error) {
      console.log("The error for Blog Container ", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        active: activeCategory,
        handleCategoryNav,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
