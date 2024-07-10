import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TransactionHeader from "./components/TransactionHeader";
import BorrowTransaction from "./components/BorrowTransaction";
import CurrencySummary from "./components/CurrencySummary";

const Borrow = () => {
  const [exchangeType, setExchangeType] = useState("crypto-to-crypto");
  //   const [exchangeError, setExchangeError] = useState("crypto-to-crypto");
  // const [receipient, setReceipient] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Exchange Details";
  }, []);

  const commonStyle = "flex flex-row justify-center items-center";
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-x border-n-5 cursor-pointer hover:text-slate-600";
  return (
    <>
      <div className="">
        <TransactionHeader header={"Borrow"} />
        <div className="max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto px-[10px] py-5 text-[#fff]">
          {/* <div className="text-[#fff] text-[3rem] font-bold p-2 my-5">
            Exchange
          </div> */}

        <div
          className="h-auto left-10 w-[90%] mx-auto text-white 
          shadow-lg shadow-slate-950 rounded-lg border border-n-8 p-5"
        >
          <div className={`${commonStyle}`}>
            <Link
              to={"/fi/borrow"}
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
              BORROW
            </Link>
            <Link
              to={"/fi/lend"}
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
              LEND
            </Link>
          </div>

          <BorrowTransaction
            title={"Borrow APY"}
            type={"receive"}
            exchangeType={exchangeType}
            loading={loading}
            symbol={"ETH"}
          />
          <div className="w-full mb-2 mt-5">
            <div className="my-2">
              <div className="text-[#1b2a8bc0] text-[14px] sm:text-[17px] italic p-2">
                {true
                  ? "Connect to your wallet address"
                  : "Enter the wallet address"}
              </div>
              <div className="text-[#12205fb2] text-lg font-bold"></div>
            </div>
          </div>

          {true ? (
            <div
              //   onClick={handleExchange}
              className={`bg-gradient-to-r 
          from-slate-500 to-red-300 cursor-pointer text-white font-bold ${commonStyle} p-2 m-2 rounded font-[500]`}
            >
              Connect Wallet
            </div>
          ) : (
            <div
              //   onClick={handleExchange}
              className={`bg-[#ff4b12] cursor-pointer text-white font-bold ${commonStyle} p-2 m-2 rounded font-[500]`}
            >
              Proceed
            </div>
          )}
        </div>
      </div>
      <CurrencySummary currency={"Bitcoin"} />
    </div>
  );
};

export default Borrow;
