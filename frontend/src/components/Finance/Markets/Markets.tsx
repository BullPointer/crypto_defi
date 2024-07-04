import MarketsHeader from "./components/MarketsHeader";
import MarketsListing from "./components/MarketsListing";

const Market = () => {
  return (
    <div className="mb-10">
      <MarketsHeader />
      <MarketsListing />
    </div>
  );
};

export default Market;
