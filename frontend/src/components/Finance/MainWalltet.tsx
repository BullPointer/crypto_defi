import { useEffect, useState } from "react";
import { WalletHeader, WalletHistory } from ".";
import WalletCharts from "./components/WalletCharts";
import { getCoinDataByIdApi } from "../../handleApi/coingeckoApi";

// [[1720102558000, 57194.5614298522]]
export type CoinType = {
  time: Number;
  value: Number | String;
};

const MainWalltet = () => {
  const [coinPrices, setCoinPrices] = useState([] as CoinType[]);
  const [coinMarketCaps, setCoinMarketCaps] = useState([]);
  const [coinTotalVolumes, setCoinTotalVolumes] = useState([]);

  const fetchCoinDataByIdApi = async () => {
    try {
      const { data } = await getCoinDataByIdApi("ethereum", "usd", 1);

      const newMarketCaps = data.market_caps?.map((d: Array<Number>) => {
        return {
          time: d[0],
          value: String(d[1]),
        };
      });
      const newPrices = data.prices?.map((d: Array<Number>) => {
        return {
          time: d[0],
          value: d[1],
        };
      });
      const newTotalVolumes = data.total_volumes?.map((d: Array<Number>) => {
        return {
          time: d[0],
          value: d[1],
        };
      });

      setCoinPrices(newPrices);
      setCoinMarketCaps(coinMarketCaps);
      setCoinTotalVolumes(coinTotalVolumes);

      // console.log("The newMarketCaps data ", newMarketCaps);
      // console.log("The newPrices data ", typeof newPrices);
      // console.log("The newTotalVolumes data ", typeof newTotalVolumes);
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
        <WalletCharts coinPrices={coinPrices} />
        <WalletHeader />
      </div>
      <WalletHistory />
    </div>
  );
};

export default MainWalltet;
