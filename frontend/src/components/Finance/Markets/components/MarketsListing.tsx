import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

import { LineChart, Line, ResponsiveContainer } from "recharts";

export const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MarketsListing = () => {
  return (
    <div className="w-[80%] mx-auto p-8 rounded-lg bg-[#01020e63]">
      <div></div>
      <div className="grid grid-cols-8">
        {["Coin name", "Coin Price", "3", "4", "5", "Chart"]?.map(
          (header, idx) => (
            <div
              key={idx}
              className="first:col-span-2 last:col-span-2 
              flex items-center justify-start text-xs p-2 
              "
            >
              <span className="cursor-pointer">{header}</span>
              <Icon
                className="text-[1.2rem] cursor-pointer"
                icon={"material-symbols:arrow-drop-up-rounded"}
              />
            </div>
          )
        )}
      </div>
      {["1", "2", "3", "4", "5"]?.map((data, idx) => (
        <div
          className="grid grid-cols-8 text-[0.9rem] 
        hover:bg-n-8 cursor-pointer"
          key={idx}
        >
          <div
            className="flex items-center justify-start gap-2 
          col-span-2 px-2 py-4 text-[1rem] "
          >
            <span className="flex items-center gap-1">
              <Icon
                className="text-[1.3rem] "
                icon={"cryptocurrency-color:btc"}
              />
              <span className="text-wrap px-1">Bitcoin</span>
            </span>
            <span
              className="text-[0.55rem] border border-slate-500 
            rounded-md px-3 py-1"
            >
              BTC
            </span>
          </div>
          <div className="px-2 py-4">$0.003</div>
          <div className="px-2 py-4">$0.003</div>
          <div className="px-2 py-4">$0.003{data}cc</div>
          <div className="px-2 py-4">$0.003</div>
          {/* <div className="col-span-2 px-2 py-4">chart</div> */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={chartData}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default MarketsListing;