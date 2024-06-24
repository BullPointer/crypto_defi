import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import moment from "moment";

const checkActivity = [
  {
    device: "Chrome",
    os: "Linux",
    system: "laptop",
    actionType: "",
    time: new Date(),
    status: "Success",
    activity: "Authentication",
  },
  {
    device: "Chrome",
    os: "Android",
    system: "phone",
    actionType: "",
    time: new Date(),
    status: "Success",
    activity: "System settings",
  },
  {
    device: "Chrome",
    os: "Linux",
    system: "laptop",
    actionType: "",
    time: new Date(),
    activity: "System settings",
    status: "Success",
  },
];

const CheckActivity = () => {
  const commonStyle = `flex flex-col items-start justify-center py-4`;
  return (
    <div
      className="min-h-[15rem] border border-n-6
       rounded-xl py-5 px-3 mt-10"
    >
      <div
        className={`${commonStyle} gap-2 mb-3 py-5 
        text-[#afabab] `}
      >
        <span className="text-3xl">Check Activity</span>
        <span className="text-xs">
          Check for any activity related to your account
        </span>
      </div>
      <table className="w-full font-normal">
        <thead className="grid grid-cols-3 w-full ">
          {["Device", "Action Type", "Time"]?.map((data, idx) => (
            <th
              key={idx}
              className="text-left font-thin text-xs py-5
            bg-opacity-100 backdrop-blur-3xl bg-transparent 
            "
            >
              {data}
            </th>
          ))}
        </thead>
        {checkActivity?.map((data, idx) => (
          <tbody
            key={idx}
            className="grid grid-cols-3 border-b 
          border-n-6 last:border-b-0"
          >
            <th className={commonStyle}>
              {data.system === "laptop" ? (
                <Icon icon={`ic:twotone-laptop-mac`} />
              ) : (
                <Icon icon={`ic:twotone-tablet-android`} />
              )}
              <div className={commonStyle}>
                <span className="font-light">{data.device}</span>
                <span className="text-xs font-thin">{data.os}</span>
              </div>
            </th>
            <th className={commonStyle}>
              <span>{data.activity}</span>
              <span className="text-xs font-thin">{data.status}</span>
            </th>
            <th className={commonStyle}>
              <span>{String(moment(data.time).format("DD MMMM YYYY"))}</span>
              <span className="text-xs font-thin">
                {String(moment(data.time).format("hh:mm:ss a"))}
              </span>
            </th>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CheckActivity;
