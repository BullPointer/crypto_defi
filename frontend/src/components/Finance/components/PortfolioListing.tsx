import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Link } from "react-router-dom";

export type PortfolioListingPropsType = {
  _id?: Number;
  currency: String;
  currencyAbbriev: String;
  currencyBalance: Number;
  currencyPrice: Number;
  currencyPercentageRate: String;
  eurBalance?: Number;
  icon: string | any;
  usdBalance: Number;
};

const PortfolioListing = ({
  currency,
  currencyAbbriev,
  currencyBalance,
  currencyPercentageRate,
  currencyPrice,
  icon,
  usdBalance,
}: PortfolioListingPropsType) => {
  return (
    <Link to={String(currencyAbbriev).toLowerCase()}>
      <div
        className="flex justify-between my-2 text-sm sm:text-[16px]
      transition-scale duration-500 hover:scale-105 md:text-[14px] 
      border rounded-md p-4 shadow-2xl shadow-[#223251e5] 
      cursor-pointer"
      >
        <ul className="flex gap-5 item-center">
          <li className="flex items-center ">
            <Icon className="text-[2rem]" icon={icon} />
          </li>
          <li
            className="flex items-center text-[18px] 
            font-bold"
          >
            {currency}
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex gap-1 text-xs">
              <span>{Number(currencyBalance)}</span>
              <span>BTC</span>
            </div>
            <div className="flex gap-1 text-xs">
              <span>{Number(usdBalance)}</span>
              <span>USD</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex gap-2">
              <span>{Number(currencyPrice)}</span>
              <span>USD</span>
            </div>
            <div className={`text-red-500 text-xs`}>
              {currencyPercentageRate}
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default PortfolioListing;
