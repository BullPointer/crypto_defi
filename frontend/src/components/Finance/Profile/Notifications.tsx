import { useEffect, useState } from "react";
import { Checkbox } from "..";
import { notificationsData } from "../constants";

type ActionNotificationType = {
  _id: Number;
  checked: Boolean;
  inputStyling: String;
  name: String;
  required: Boolean;
};
type NotificationsType = {
  _id: Number;
  title: String;
  subtitle: String;
  action: ActionNotificationType[];
};

const Notifications = () => {
  const [notificationSetting, setNotificationSetting] = useState(
    [] as NotificationsType[]
  );

  const commonStyle = "py-4";
  const commonBorderStyle = `border border-n-5 rounded-md`;
  const commonGrid = `grid grid-cols-4`;

  useEffect(() => {
    setNotificationSetting(notificationsData);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { name, checked } = e.target as HTMLInputElement;

    let data = [...notificationSetting];
    const index = data.findIndex((d) => d._id === idx);
    const mapedData = data[index].action.map((d) => {
      if (d.name === name && d.required === false) {
        return { ...d, checked: checked };
      }
      return d;
    });
    data[index].action = mapedData;

    setNotificationSetting(data);
  };

  return (
    <div>
      <div
        className={`p-3 text-3xl font-bold ${commonBorderStyle}
          mb-1 text-[#abafd4] backdrop-blur-3xl cursor-none
          bg-gradient-to-bl from-[#151b29e5] to-[#0f0c1a]
        `}
      >
        Notifications
      </div>
      <div className="w-full mt-4">
        <div
          className="flex justify-between items-center 
        text-[#afabab] text-xs"
        >
          <span className="text-[#afabab] text-xs">
            Select your via method of receiving notification
          </span>
          <div className="italic">
            Field with <span className="text-[#ec2525]">*</span> are required
          </div>
        </div>

        <table className="w-full mt-8">
          <thead className={`${commonGrid} ${commonStyle}`}>
            <th></th>
            <th>
              Email <span className="text-[#ec2525] text-xs">*</span>
            </th>
            <th>SMS</th>
            <th>Call</th>
          </thead>
          {notificationSetting?.map((data, index) => (
            <tbody key={index} className={`${commonGrid} ${commonStyle}`}>
              <td className="flex flex-col ">
                <span className="text-lg">{data.title} </span>
                <span className="text-xs">{data.subtitle} </span>
              </td>
              {data.action.map((d, idx) => (
                <td key={idx}>
                  <Checkbox
                    index={Number(index)}
                    checked={d.checked}
                    handleChange={handleChange}
                    inputStyling={d.inputStyling}
                    name={d.name}
                    required={d.required}
                  />
                </td>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Notifications;
