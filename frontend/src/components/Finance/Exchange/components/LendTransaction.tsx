// import Currrencies from "./Currrencies";

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type TransactionProps = {
  title?: String;
  type?: String;
  exchangeType?: String;
  loading?: Boolean;
  symbol?: String;
};
const LendTransaction = ({ title, type }: TransactionProps) => {
  const commonFlex = `flex justify-center items-center gap-2`;
  const border = "border border-n-5";

  return (
    <div className="w-full relative  justify-center items-center mt-2">
      <div className={`${commonFlex} p-5`}>
        <Icon className="text-[2rem]" icon={"cryptocurrency-color:eth"} />
        <div className="flex items-center gap-1">
          <span>Ethereum</span>
          <span className="font-bold text-xs">(ETH)</span>
        </div>
        <div className={`${commonFlex} p-5`}>
          <Icon
            className="text-[1.8rem] cursor-pointer"
            icon={"material-symbols:keyboard-arrow-down"}
          />
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
      <div className={`${border} w-full `}>
        <div className="text-[12px] opacity-50 ">{"Amount Supplied"}</div>

        <div className={`${commonFlex} text-lg pl-2 `}>
          <span>{`0.32`}</span>
          <span>ETH</span>
        </div>
        <div className="text-sm pl-2 mt-1">{`$7.9902`}</div>
      </div>
      <div className={`${border} w-full `}>
        <div className="text-[12px] opacity-50 ">{"Reward"}</div>

        <div className="text-lg pl-2 ">{`$9000`}</div>
      </div>
      <div></div>
    </div>
  );
};

export default LendTransaction;
