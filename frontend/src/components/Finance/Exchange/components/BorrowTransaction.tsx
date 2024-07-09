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
      <div className={`flex flex-col justify-center items-center  w-full `}>
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

          <div className="text-lg pl-2 ">{"7.56299295"}</div>
        </div>
        {/* // )} */}
      </div>
      <div></div>
    </div>
  );
};

export default BorrowTransaction;
