import { WalletHeader, WalletHistory } from ".";

const MainWalltet = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <WalletHeader />
      </div>
      <WalletHistory />
    </div>
  );
};

export default MainWalltet;
