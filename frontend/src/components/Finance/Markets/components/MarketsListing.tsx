import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import {
  getCoinDataByIdApi,
  getPopularCoinApi,
} from "../../../../handleApi/coingeckoApi";
import moment from "moment";

const MarketsListing = () => {
  const [coins, setCoins] = useState([]);
  const [coinsById, setCoinsById] = useState({ Bitcoin: [] } as any);

  const popularCoin = async () => {
    try {
      const { data } = await getPopularCoinApi();

      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  };
  const coinChartData = async () => {
    if (coins.length > 0) {
      coins.forEach(async (list: any) => {
        try {
          const response = await getCoinDataByIdApi(
            String(list.name.toLowerCase()),
            "usd",
            10,
            "daily"
          );

          const filteredData = response.data.prices?.map((d: Array<Number>) => {
            return {
              time: moment(Number(d[0])).format("MMMM DD YY, hh:mm:ss"),
              value: d[1].toFixed(2),
              name: list.name,
            };
          });

          const coinsByIdDemo = coinsById;
          if (coinsById[list.name] && coinsById[list.name].length > 0) {
            coinsByIdDemo[list.name] = [
              ...coinsByIdDemo[list.name],
              ...filteredData,
            ];
            setCoinsById(coinsByIdDemo);
          } else {
            coinsByIdDemo[list.name] = filteredData;
            setCoinsById(coinsByIdDemo);
          }
          console.log("coinsById: ", coinsById);
        } catch (error) {}
      });
    }
  };

  useEffect(() => {
    popularCoin();
  }, []);
  useEffect(() => {
    coinChartData();
  }, [coinsById, coins]);
  console.log("coinsById: ", coinsById);

  return (
    <div className="w-[80%] mx-auto p-8 rounded-lg bg-[#01020e63]">
      <div></div>
      <div className="grid grid-cols-9">
        {[
          "Coin name",
          "Coin Price",
          "Total Supply",
          "24h Price Change",
          "Make Exchange",
          "Chart",
        ]?.map((header, idx) => (
          <div
            key={idx}
            className="first:col-span-2 last:col-span-2 
              flex items-center justify-start text-xs p-2 
              [&:nth-child(3)]:col-span-2"
          >
            <span className="cursor-pointer">{header}</span>
          </div>
        ))}
      </div>
      {coins?.map((data: any, idx) => (
        <div
          className="grid grid-cols-9 text-[0.9rem] 
        hover:bg-n-8 cursor-pointer"
          key={idx}
        >
          <div
            className="flex items-center justify-start gap-2 
          col-span-2 px-2 py-4 text-[1rem] "
          >
            <span className="flex items-center gap-1">
              <Icon
                className="text-[1.3rem] "
                icon={`cryptocurrency-color:${data.symbol}`}
              />
              <span className="text-wrap px-1">{data.name}</span>
            </span>
            <span
              className="text-[0.55rem] border border-slate-500 
            rounded-md px-3 py-1"
            >
              {data.symbol.toUpperCase()}
            </span>
          </div>
          <div className="px-2 py-4">${data.current_price}</div>
          <span className="col-span-2 px-2 py-4 pr-3">
            ${Number(data.total_supply).toFixed(2)}
          </span>
          <div className="flex items-center px-2 py-4">
            ${Number(data.price_change_24h).toFixed(2)}
          </div>
          <div className="flex items-center px-2 py-4 ">
            <span
              className="px-2 py-2 bg-slate-700 hover:border border-bg-slate-800 
            rounded-lg text-xs"
            >
              Exchange
            </span>
          </div>
          {/* <div className="col-span-2 px-2 py-4">chart</div> */}
          {coinsById[data.name] && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={coinsById[data.name]}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      ))}
    </div>
  );
};

export default MarketsListing;
