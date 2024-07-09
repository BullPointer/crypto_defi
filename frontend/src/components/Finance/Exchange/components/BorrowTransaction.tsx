// import Currrencies from "./Currrencies";

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type TransactionProps = {
  title?: String;
  type?: String;
  exchangeType?: String;
  loading?: Boolean;
  symbol?: String;
};
const BorrowTransaction = ({ title, type }: TransactionProps) => {
  const border = "border border-n-5";
  return (
    <div className="w-full relative  justify-center items-center mt-2">
      <div className="flex justify-center items-center gap-2 p-5">
        <Icon className="text-[2rem]" icon={"cryptocurrency-color:btc"} />
        <div className="flex items-center gap-1">
          <span>Bitcoin</span>
          <span className="font-bold text-xs">(BTC)</span>
        </div>
      </div>
      <div className="w-full h-[100%] text-lg mb-5">
        <input
          // onChange={handleAmount}
          // onFocus={handleFocus}
          className="w-full outline-none p-2 text-center 
            rounded-md"
          type="text"
          name={String(type)}
          placeholder="Amount"
          // value={transactionObj.amount}
        />
      </div>
      <div className={`${border} w-full `}>
        <div className="text-[12px] opacity-50 ">{title}</div>

        <div className="text-lg pl-2 ">{`7.56% APY`}</div>
      </div>
      <div></div>
    </div>
  );
};

export default BorrowTransaction;
