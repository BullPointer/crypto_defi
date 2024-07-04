import { WalletHeader, WalletHistory } from ".";
import WalletCharts from "./components/WalletCharts";

const MainWalltet = () => {
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 
      my-20 md:my-28"
      >
        <WalletCharts />
        <WalletHeader />
      </div>
      <WalletHistory />
    </div>
  );
};

export default MainWalltet;
