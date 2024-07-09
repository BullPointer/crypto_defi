import { Link } from "react-router-dom";
import Transaction from "./components/Transaction";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";
import TransactionHeader from "./components/TransactionHeader";

const Exchange = () => {
  const [exchangeType, setExchangeType] = useState("crypto-to-crypto");
  const [exchangeError, setExchangeError] = useState("crypto-to-crypto");
  const [receipient, setReceipient] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Exchange Details";
  }, []);

  const commonStyle = "flex flex-row justify-center items-center";
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-x border-n-5 cursor-pointer hover:text-slate-600";
  return (
    <>
      <div className="">
        <TransactionHeader header={"Exchange"} />
        <div className="max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto px-[10px] py-5 text-[#fff]">
          {/* <div className="text-[#fff] text-[3rem] font-bold p-2 my-5">
            Exchange
          </div> */}

          <div
            className="h-auto left-10 w-[90%] mx-auto text-white 
          shadow-lg shadow-slate-950 rounded-lg border border-n-8 p-5"
          >
            <div className={`${commonStyle}`}>
              <div
                onClick={() => {
                  setExchangeType("crypto-to-crypto");
                  //   cryptoToCrypto(send, setSend, receive, setReceive);
                }}
                className={`${exchangeStyle} ${
                  exchangeType === "crypto-to-crypto"
                    ? "bg-[#eeeeee] text-[#3f3737b6]"
                    : ""
                }`}
              >
                Exchange Currency
              </div>
              <div
                onClick={() => {
                  setExchangeType("fiat-to-crypto");
                  //   fiatToCrypto(send, setSend, receive, setReceive);
                }}
                className={`${exchangeStyle} ${
                  exchangeType === "fiat-to-crypto"
                    ? "bg-[#eeeeee] text-[#3f3737b6]"
                    : ""
                } `}
              >
                Buy/Sell Crypto
              </div>
            </div>
            <Transaction
              title={"You Send"}
              type={"send"}
              exchangeType={exchangeType}
              loading={loading}
              symbol={"BTC"}
            />
            {error && (
              <div className="text-[14px] text-[#be5959] px-2 py-1 font-serif">
                {error}
              </div>
            )}
            <div className={`text-[#ff4b12] w-full ${commonStyle} p-1`}>
              <Icon icon="gg:arrows-exchange-alt-v" />
            </div>
            <Transaction
              title={"You Recieve"}
              type={"receive"}
              exchangeType={exchangeType}
              loading={loading}
              symbol={"ETH"}
            />
            <div className="w-full mb-2 mt-5">
              <div className="my-2">
                <div className="text-[#1b2a8bc0] text-[14px] sm:text-[17px] italic p-2">
                  Enter the wallet address
                </div>
                <div className="text-[#12205fb2] text-lg font-bold"></div>
              </div>
              <div className="w-full h-[100%] text-lg ">
                <input
                  placeholder="Receipient's address"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setReceipient(e.target.value)
                  }
                  className="w-full outline-none pl-2 py-2 text-center"
                  type="text"
                  name={"addressTo"}
                  value={receipient}
                />
                <p className="text-red-500 text-xs py-4">
                  Invalid {"receive.symbol"} address
                </p>
              </div>
            </div>

            <div
              //   onClick={handleExchange}
              className={`bg-[#ff4b12] cursor-pointer text-white font-bold ${commonStyle} p-2 m-2 rounded font-[500]`}
            >
              Exchange
            </div>
            <p className=" p-2 text-xs sm:text-xs">
              By clicking <span className="text-slate-400"> Exchange</span>, I
              agree to the{" "}
              <Link className="text-red-400" to={"/privacy-policy"}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="text-red-400" to={"/terms-and-conditions"}>
                Terms of Service.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
