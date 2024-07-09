// import Currrencies from "./Currrencies";

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type TransactionProps = {
  title: String;
  type: String;
  exchangeType: String;
  loading: Boolean;
  symbol: String;
};
const BorrowTransaction = ({
  title,
  type,
  exchangeType,
  loading,
  symbol,
}: TransactionProps) => {
  const border = "border border-n-5";
  return (
    <div className="relative grid grid-cols-2 justify-center items-center  mt-2">
      <div
        className={`flex flex-col justify-center items-center  w-full ${border}`}
      >
        <div className="text-[12px] opacity-50 ">{title}</div>
        {loading ? (
          <Icon
            className="text-2xl text-black"
            icon="streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting"
          />
        ) : type == "send" ? (
          <div className="w-full h-[100%] text-lg">
            <input
              // onChange={handleAmount}
              // onFocus={handleFocus}
              className="w-full outline-none pl-2 text-center text-black"
              type="text"
              name={String(type)}
              // value={transactionObj.amount}
            />
          </div>
        ) : (
          <div className="text-lg pl-2 ">{"7.56299295"}</div>
        )}
      </div>
      <div></div>
      {/* {showCurrencies[type] && (
        <Currrencies
          setData={setData}
          transactionObj={transactionObj}
          name={type}
          handleRemoveCurrencies={handleRemoveCurrencies}
          allCoins={allCoins}
          mostPopularCoin={mostPopularCoin}
          allFiats={allFiats}
          mostPopularFiat={mostPopularFiat}
          exchangeType={exchangeType}
          handleSelectedCurrency={handleSelectedCurrency}
          handleSearch={handleSearch}
        />
      )} */}
    </div>
  );
};

export default BorrowTransaction;
