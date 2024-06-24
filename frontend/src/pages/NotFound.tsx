import { useEffect } from "react";
import { Footer, Navbar } from "../";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start h-screen">
        <div className="text-white font-extrabold text-4xl  p-10">
          Opps! Sorry, page not found...
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
