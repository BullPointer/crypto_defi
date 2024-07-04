import {
  Area,
  AreaChart,
  //   CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "../Markets/components/MarketsListing";
import { CoinType } from "../MainWalltet";

// type WalletChartsProps = {
//   name: String;
//   currency: String;
//   days: Number;
// };

const WalletCharts = ({ coinPrices }: CoinType[]) => {
  console.log("I have data to be", coinPrices);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={coinPrices}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="5 5" /> */}
        {/* <CartesianGrid /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis dataKey={""} /> */}
        <XAxis />
        {/* <YAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          type="monotone"
          stackId={"1"}
          dataKey="value"
          stroke="#8884d8"
          fill="#2a293f"
          //   fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WalletCharts;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="p-2 bg-slate-900 flex flex-col 
            gap-2 rounded-md"
      >
        <p className="text-medium text-sm md:text-lg">{label}</p>
        <p className="text-xs md:text-sm text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
