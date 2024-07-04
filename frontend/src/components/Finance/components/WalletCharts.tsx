import {
  Area,
  AreaChart,
  //   CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  // XAxis,
  YAxis,
} from "recharts";
// import { CoinType } from "../MainWalltet";

const WalletCharts = ({ coinPrices }: any) => {
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
        <YAxis dataKey={"value"} />
        {/* <XAxis /> */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          type="monotone"
          stackId={"1"}
          dataKey="value"
          stroke="#8884d8"
          fill="#2a293f"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WalletCharts;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const splitedTime = payload[0]?.payload.time.split(",");
    return (
      <div
        className="p-2 bg-slate-900 flex flex-col 
            gap-2 rounded-md"
      >
        <p className="text-medium text-sm md:text-lg">
          {splitedTime[0]} <span className="text-xs">{splitedTime[1]}</span>
        </p>
        <p className="text-xs md:text-sm text-blue-400">
          Bitcoin Price:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
