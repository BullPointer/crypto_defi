import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="text-center sm:p-10 md:py-16 md:w-[80%] mx-auto">
      <header
        className="font-mono text-pretty text-2xl sm:text-4xl 
        md:text-5xl font-bold mb-5"
      >
        Experience the endless possibilities of Crypto platform
      </header>
      <section className="font-grotesk leading-8 px-8 text-[1.2rem] md:text-[1.0rem]">
        Get excited about putting your digital assets to work! With our
        platform, you can lend or borrow to tackle life's surprises
        effortlessly. Repay at your own pace—no monthly payments, no extra fees.
        Whether you're a newbie or a pro, our user-friendly crypto lending and
        earning platform makes managing your digital assets fun and simple.
      </section>
      <div className="flex justify-center gap-5 mt-8">
        <Button className="rounded-md rounded-r-3xl font-extrabold bg-n-3 backdrop-blur-md py-2 px-4">
          <Link to="signup">Create Account</Link>
        </Button>
        <Button className="rounded-md rounded-l-3xl font-semibold bg-white text-gradient from-neutral-600 to-neutral-400 text-neutral-700 backdrop-blur-md py-2 px-4">
          <Link to={`fi/lend`}>Lend Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
