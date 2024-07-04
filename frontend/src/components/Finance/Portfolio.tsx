import { useEffect, useState } from "react";
import { Balance, PortfolioListing } from ".";
import { ActionBtns } from "./Reusables/ActionBtns";
import { getPopularCoinApi } from "../../handleApi/coingeckoApi";

const Portfolio = () => {
  const [coins, setCoins] = useState([]);

  const popularCoin = async () => {
    try {
      const { data } = await getPopularCoinApi();
      setCoins(data);
      // console.log("Coins list: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    popularCoin();
  }, []);

  return (
    <div className="px-10">
      <ActionBtns />
      <Balance
        title={"Total Balance"}
        amount={100}
        className={`border border-[#223251e5] bg-gradient-to-tl 
        from-n-3/5 to-n-5/10`}
        actionIcon={"icon-park-outline:download"}
        actionText={"Deposit"}
      />
      <div className="md:grid grid-cols-2 gap-3">
        <Balance
          title={"Stake"}
          amount={parseFloat("0.00")}
          className={`border border-[#223251e5] 
          bg-gradient-to-br from-n-3/5 to-n-5/10`}
          actionIcon={"icon-park-outline:chart-line"}
          actionText={"Stack more"}
        />
        <Balance
          title={"Loan"}
          amount={parseFloat("0.00")}
          className={`border border-[#223251e5] 
          bg-gradient-to-bl from-n-3/5 to-n-5/10`}
          actionIcon={"icon-park-outline:trend"}
          actionText={"Borrow more"}
        />
      </div>
      <div className="my-16 md:px-10">
        <section
          className="my-10 text-[1.5rem] sm:text-[2rem] 
          md:text-[3rem]"
        >
          Portfolio
        </section>

        {coins?.map((data: any, idx) => (
          <PortfolioListing
            key={idx}
            id={data.id}
            name={data.name}
            symbol={data.symbol}
            currencyBalance={data.currencyBalance}
            price_change_percentage_24h={data.price_change_percentage_24h}
            current_price={data.current_price}
            eur_balance={data.eur_balance}
            image={data.image}
            usd_balance={data.usd_balance}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
