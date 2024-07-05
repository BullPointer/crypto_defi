import moment from "moment";
import MarketsHeader from "./components/MarketsHeader";
import MarketsListing from "./components/MarketsListing";
import { getCoinDataByIdApi } from "../../../handleApi/coingeckoApi";
import { useEffect, useState } from "react";

const Market = () => {
  const [coinPrices, setCoinPrices] = useState([]);

  const fetchCoinDataByIdApi = async () => {
    try {
      const { data } = await getCoinDataByIdApi("ethereum", "usd", 60, "daily");

      const newPrices = data.prices?.map((d: Array<Number>) => {
        return {
          time: moment(Number(d[0])).format("MMMM DD YY, hh:mm:ss"),
          value: d[1].toFixed(2),
          name: "ethereum",
        };
      });

      setCoinPrices(newPrices);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCoinDataByIdApi();
  }, []);

  const filterCoin = (name: String) => {
    return coinPrices.filter((c) => c["name"] === name);
  };
  return (
    <div className="mb-10">
      <MarketsHeader />
      <MarketsListing coinPrices={coinPrices} filterCoin={filterCoin} />
    </div>
  );
};

export default Market;
