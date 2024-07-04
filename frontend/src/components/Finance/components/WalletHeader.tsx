import { useEffect, useState } from "react";
import { ActionButton } from "../designs/ActionButton";
import { portfolioListingData } from "../constants";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { PortfolioListingPropsType } from "./PortfolioListing";

const actionBtnData = [
  {
    actionIcon: "icon-park-outline:download",
    actionText: "Deposit",
  },
  {
    actionIcon: "icon-park-outline:weixin-cards-offers",
    actionText: "Withdraw",
  },
  {
    actionIcon: "icon-park-outline:slightly-frowning-face-whit-open-mouth",
    actionText: "Convert",
  },
  {
    actionIcon: "icon-park-outline:slightly-frowning-face-whit-open-mouth",
    actionText: "Trade",
  },
];

const WalletHeader = () => {
  const [currencyData, setCurrencyData] = useState(
    {} as PortfolioListingPropsType
  );

  useEffect(() => {
    const filteredData = portfolioListingData?.find((d) => d._id === 0);
    setCurrencyData(filteredData as PortfolioListingPropsType);
  }, []);

  const commonStyle = "flex justify-center items-center";

  return (
    <div
      className="h-auto border border-n-6 rounded-xl py-5 
       mb-10 md:mb-0 mt-10 order-first md:order-last"
    >
      <div className="grid grid-cols-2 p-3">
        <ul className={`col-span-2 gap-1 mb-5 md:mb-3 ${commonStyle}`}>
          <li className="flex items-center ">
            <Icon className="text-[2rem]" icon={currencyData.icon} />
          </li>
          <li
            className="flex items-center text-[18px] 
            font-bold"
          >
            {currencyData.name}
          </li>
        </ul>
        <ul className={`flex gap-5 item-center ${commonStyle}`}>
          <li className="flex flex-col justify-center">
            <div className="flex gap-1 text-xs">
              <span>{Number(currencyData.currencyBalance)}</span>
              <span>BTC</span>
            </div>
            <div className="flex gap-1 text-xs">
              <span>{Number(currencyData.usdBalance)}</span>
              <span>USD</span>
            </div>
          </li>
        </ul>
        <ul className={`flex gap-5 item-center ${commonStyle}`}>
          <li>
            <div className="flex gap-2">
              <span>{Number(currencyData.currencyPrice)}</span>
              <span>USD</span>
            </div>
            <div className={`text-red-500 text-xs`}>
              {currencyData.currencyPercentageRate}
            </div>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-2 p-2">
        {actionBtnData?.map((data, idx) => (
          <ActionButton
            key={idx}
            actionIcon={data.actionIcon}
            actionText={data.actionText}
            actionBgColor={"bg-n-6"} // ff491298
            actionTextColor={"text-[#4370cae5]"} // ff4b12
            actionClassName={"w-fit my-3 w-full justify-center"} // 223251e5
          />
        ))}
      </div>
      <div className="p-2">
        <ActionButton
          actionIcon={"icon-park-outline:weixin-cards-offers"}
          actionText={"Buy Crypto"} // prev color 4370cae5
          actionBgColor={"bg-n-6"} // ff491298
          actionTextColor={"text-[#ff4b12]"} // ff4b12
          actionClassName={`w-fit my-3 w-full justify-center 
          bg-gradient-to-tl from-gray-900 to-n-10/100 
          font-extrabold text-[#d3baba]`} // 223251e5
        />
      </div>
    </div>
  );
};

export default WalletHeader;
