import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { footerNavigation, socials } from "../constants";

const Footer = () => {
  const handleScrollTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const aboutOsifi = `Osifi is a user-friendly and efficient 
  crytocurrency exchange platform that enable customers to 
  instanty and seamlessly swap coins.`;
  const socialmediaUpdate = `If you would like to stay 
  up-to-date with the latest news. updates, and promotions 
  from our platform, be sure to follow us on social media`;

  return (
    <>
      {/* <!-- start of footer --> */}
      <footer
        className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 py-10 px-8 mt-5"
      >
        <div className="copy-right">
          <h1>© OSIFI</h1>
          <p className="pr-[22px] md:pr-5 py-[22px]">{aboutOsifi}</p>
          <p>Contact Us: support@Osifi.com</p>
          <p style={{ paddingTop: "35px" }}>
            Copyright © 2023 <span>OSIFI</span> All rights reserved
          </p>
        </div>
        <div
          className="col-span-2 grid sm:grid-cols-2 
        md:grid-cols-3 text-center sm:text-left my-4"
        >
          {footerNavigation?.map((data, idx) => (
            <div key={idx} className="py-4">
              <h3
                className="mb-2 font-bold opacity-50 
              cursor-none "
              >
                {data.title}
              </h3>
              <ul>
                {data?.subData.map(({ link, text }, idx) => (
                  <li
                    key={idx}
                    className="font-serif leading-8 
                  "
                  >
                    <Link onClick={handleScrollTo} to={link}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="social-media sm:col-span-2 md:col-span-3 mt-6">
            <h3 className="mb-2 text-2xl">Social Media</h3>
            <p className="leading-6">{socialmediaUpdate}</p>
            <ul className="flex gap-3 my-8">
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
            <a
              href="#"
              className="a bg-[#ff4b12] py-3 px-6 
            rounded-md backdrop-blur-lg font-[600]"
            >
              Exchange
            </a>
          </div>
        </div>
      </footer>

      {/* <!-- end of footer --> */}
    </>
  );
};
export default Footer;
