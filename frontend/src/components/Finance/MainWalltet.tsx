import { useEffect, useState } from "react";
import { WalletHeader, WalletHistory } from ".";
import WalletCharts from "./components/WalletCharts";
import { getCoinDataByIdApi } from "../../handleApi/coingeckoApi";
import moment from "moment";

export type CoinType = {
  time: number | any;
  value: number;
};

const MainWalltet = () => {
  const [coinPrices, setCoinPrices] = useState([] as CoinType[]);
  const [coinMarketCaps, setCoinMarketCaps] = useState([]);
  const [coinTotalVolumes, setCoinTotalVolumes] = useState([]);

  const fetchCoinDataByIdApi = async () => {
    try {
      const { data } = await getCoinDataByIdApi(
        "ethereum",
        "usd",
        365,
        "daily"
      );

      const newMarketCaps = data.market_caps?.map((d: Array<Number>) => {
        return {
          time: d[0],
          value: String(d[1]),
        };
      });
      const newPrices = data.prices?.map((d: Array<Number>) => {
        return {
          time: moment(Number(d[0])).format("MMMM DD YY, hh:mm:ss"),
          value: d[1].toFixed(2),
        };
      });
      const newTotalVolumes = data.total_volumes?.map((d: Array<Number>) => {
        return {
          time: d[0],
          value: d[1],
        };
      });

      setCoinPrices(newPrices);
      setCoinMarketCaps(newMarketCaps);
      setCoinTotalVolumes(newTotalVolumes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoinDataByIdApi();
  }, []);
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 
       my-20 md:my-28"
      >
        <WalletCharts
          coinPrices={coinPrices}
          coinMarketCaps={coinMarketCaps}
          coinTotalVolumes={coinTotalVolumes}
        />
        <WalletHeader />
      </div>
      <WalletHistory />
    </div>
  );
};

export default MainWalltet;
