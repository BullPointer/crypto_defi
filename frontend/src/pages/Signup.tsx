import { useState } from "react";
import { Footer, Navbar, ViaGoogleOrApple } from "..";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import CountrySelect from "../components/CountrySelect";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState("");

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = () => {};
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(!loading);
  };
  return (
    <div>
      <Navbar />
      <div className="px-3 sm:px-10 md:p-0 md:grid grid-cols-3">
        <div className="hidden md:block">
          <div className="zigzag-container">
            <div className="zigzagtopdown"></div>
            <div className="zigzag"></div>
            <div className="zigzagdowntop"></div>
          </div>
        </div>
        <div className="h-auto mt-8 px-2 my-20">
          <div
            className="text-center text-[1.5rem] lg:text-[2rem]
            font-bold "
          >
            SIGN UP
          </div>
          <form>
            <div className="mt-5">
              <CountrySelect
                country={country}
                required={true}
                setCountry={setCountry}
              />
              <Input
                className={""}
                label={"Email"}
                name={"email"}
                handleChange={handleChange}
                placeholder={"example@domain.com"}
                type={""}
                required={true}
              />
            </div>
            <div className="mt-5">
              <Input
                className={""}
                handleChange={handleChange}
                handleShowPassword={handleShowPassword}
                label={"Password"}
                name={"password"}
                placeholder={"min 4 characters, 1 uppercase, 1 lowercase"}
                required={true}
                showPassword={showPassword}
                type={showPassword === true ? "password" : "text"}
              />
            </div>
            <div
              className="flex justify-between items-center 
            my-5"
            >
              <div className="text-xs text-[#9e9ef8b4]">Forgot password?</div>
              <Link to={"/login"} className="text-sm text-[#ee9090] underline">
                Sign In
              </Link>
            </div>
            <div className="w-full ">
              <button
                onClick={handleSubmit}
                className="w-full h-11 border border-n-5 
               mx-auto hover:font-bold hover:rounded-md
               py-3 px-5 text-sm bg-gradient-to-bl from-n-5 
               to-n-8"
                type="submit"
              >
                {!loading ? (
                  "SIGN UP"
                ) : (
                  <div
                    className="w-5 h-5 border-whtie
                border-b-4 border-r-4 mx-auto animate-spin
                rounded-full"
                  />
                )}
              </button>
            </div>
            <div className="flex items-center my-3">
              <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
              <div className="flex-grow-0 mx-5 text dark:text-white">or</div>
              <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
            </div>
            <ViaGoogleOrApple
              icon={"logos:google-icon"}
              text={"Continue with Google"}
            />
            <ViaGoogleOrApple icon={"uiw:apple"} text={"Continue with Apple"} />
          </form>
        </div>
        <div className="hidden md:block">
          <div className="zigzag-container">
            <div className="zigzagtopdown"></div>
            <div className="zigzag"></div>
            <div className="zigzagdowntop"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
