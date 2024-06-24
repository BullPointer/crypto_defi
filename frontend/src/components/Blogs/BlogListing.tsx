import { Fragment } from "react/jsx-runtime";
import Img from "../../assets/benefits/image-2.png";
import BlogCard from "./components/BlogCard";

export const blogData = [
  {
    _id: 0,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
  {
    _id: 1,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
  {
    _id: 2,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
  {
    _id: 3,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
  {
    _id: 4,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
  {
    _id: 5,
    blogImg: Img,
    date: "November 8, 2024",
    writer: "Osiex",
    title: "The unimaginable with cryptocurrencies",
    content: `The Main satisfying thing about mining Bitcoin, Ethereum and other top
          trending Cryptocurrency`,
  },
];
const BlogListing = () => {
  return (
    <Fragment>
      <div className="py-5">
        <BlogCard blogData={blogData} showMore />
      </div>
    </Fragment>
  );
};

export default BlogListing;
