type CurrencySummaryProps = {
  currency: String;
};

const CurrencySummary = ({ currency }: CurrencySummaryProps) => {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:[70%] p-10">
      <header className="text-sm text-[#b3aeae] mb-2 italic text-center md:text-left">
        Summary about {currency}
      </header>
      <div className="text-[1.0rem] font-bold text-center md:text-left">
        Bitcoin (BTC) is the utility token. As the first platform of its kind,
        Ethereum introduced the world to the concept of smart contracts and
        decentralized applications. Ether is used to pay transaction fees and
        incentivize Ethereum stakers to protect the network. BTC represents a
        wrapped version of BTC, that is bridged onto Base using the native Base
        bridge.
      </div>
    </div>
  );
};

export default CurrencySummary;
