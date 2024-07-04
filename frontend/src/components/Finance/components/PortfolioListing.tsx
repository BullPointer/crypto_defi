import { Link } from "react-router-dom";

export type PortfolioListingPropsType = {
  id?: Number;
  name: String;
  symbol: String;
  currencyBalance: Number;
  current_price: Number;
  price_change_percentage_24h: String;
  eur_balance?: Number;
  image: string | any;
  usd_balance: Number;
};

const PortfolioListing = ({
  name,
  symbol,
  currencyBalance,
  price_change_percentage_24h,
  current_price,
  image,
  usd_balance,
}: PortfolioListingPropsType) => {
  return (
    <Link to={String(symbol).toLowerCase()}>
      <div
        className="flex justify-between my-2 text-sm sm:text-[16px]
      transition-scale duration-500 hover:scale-105 md:text-[14px] 
      border rounded-md p-4 shadow-2xl shadow-[#223251e5] 
      cursor-pointer"
      >
        <ul className="flex gap-5 item-center">
          <li className="flex items-center ">
            <img className="w-5 h-5 sm:w-10 sm:h-10 text-[2rem]" src={image} />
          </li>
          <li
            className="flex items-center text-[18px] 
            font-bold"
          >
            {name}
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex gap-1 text-xs">
              <span>{Number(currencyBalance) || 0}</span>
              <span>BTC</span>
            </div>
            <div className="flex gap-1 text-xs">
              <span>{Number(usd_balance) || 0}</span>
              <span>USD</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex gap-2">
              <span>{Number(current_price)}</span>
              <span>USD</span>
            </div>
            <div className={`text-red-500 text-xs`}>
              {price_change_percentage_24h}
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default PortfolioListing;
