import { useEffect, useState } from "react";

const WalletHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  useEffect(() => {
    setTransactionHistory([]);
  }, []);
  return (
    <div>
      <div></div>
      <div
        className={`min-h-[15rem] border border-n-6 rounded-xl 
        py-5 mt-10 ${
          transactionHistory.length <= 0 && "flex items-center justify-center"
        }
      `}
      >
        <div className="text-sm text-[#dad4d4]">
          Oops!... No record of transactions
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
