import { Balance, PortfolioListing } from ".";
import { ActionBtns } from "./Reusables/ActionBtns";
import { portfolioListingData } from "./constants";

const Portfolio = () => {
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
        {portfolioListingData?.map((data, idx) => (
          <PortfolioListing
            key={idx}
            _id={data._id}
            currency={data.currency}
            currencyAbbriev={data.currencyAbbriev}
            currencyBalance={data.currencyBalance}
            currencyPercentageRate={data.currencyPercentageRate}
            currencyPrice={data.currencyPrice}
            eurBalance={data.eurBalance}
            icon={data.icon}
            usdBalance={data.usdBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
