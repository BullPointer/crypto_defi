import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useState } from "react";
import { Input } from "..";
import { formData } from "../constants";

const PersonalInfo = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    city: "",
    zipcode: "",
    dateofbirth: "",
    idnum: "",
  });
  const [clipboard, setClipboard] = useState({ copied: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleClipboard = () => {
    navigator.clipboard.writeText("Helo");
    setClipboard({ ...clipboard, copied: true });
    setTimeout(() => {
      setClipboard({ ...clipboard, copied: false });
    }, 2000);
  };

  const commonStyle = "flex flex-col justify-center p-3";
  const commonBorderStyle = `border border-n-5 rounded-md 
  cursor-pointer`;

  return (
    <div>
      <div
        className={`p-3 text-3xl font-bold ${commonBorderStyle}
          mb-1 text-[#abafd4] backdrop-blur-3xl 
          bg-gradient-to-bl from-[#151b29e5] to-[#0f0c1a]
        `}
      >
        Personal Information
      </div>
      <div
        className={`${commonStyle} gap-2 mb-3 py-5 
        text-[#afabab] `}
      >
        <div className="relative flex items-center gap-2 w-fit">
          <span className="text-xs">User ID</span>

          <Icon
            onClick={() => handleClipboard()}
            className="text-sm cursor-pointer"
            icon={"solar:copy-outline"}
          />
          {clipboard.copied && (
            <div
              className="absolute -top-8 -right-[100%] text-[11px]
            backdrop-blur-3xl px-3 rounded-lg font-bold bg-opacity-30
             border border-n-5 bg-gradient-to-br from-[#4370cae5] 
             to-n-5 rounded-bl-none rounded-tl-2xl 
             rounded-br-2xl leading-9"
            >
              Copied
            </div>
          )}
        </div>
        <span className="text-lg text-[#4370cae5]">
          8023fab5-348c-45df-ae71-49b3b56ec2f0
        </span>
      </div>
      <div className="border border-n-5 rounded-md p-3">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="text-xl" icon={"ic:twotone-mail-outline"} />
          <div className="text-base">email@email.com</div>
          <div
            className="bg-[#4370cae5] px-2 py-1 text-xs italic
            rounded-md font-bold backdrop-blur-3xl bg-opacity-100"
          >
            verified
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Icon className="text-xl" icon={"material-symbols:phone-iphone"} />
          <div className="text-base font-bold">Phone Number:</div>
          <div className="text-base">+1-68508758</div>
        </div>
        <form className="" method="post">
          <div className="grid grid-cols-2 gap-2 mt-10 mb-3">
            {formData?.map((data, idx) => (
              <Input
                key={idx}
                className={"last:col-span-2"}
                handleChange={handleChange}
                label={data.label}
                name={data.name}
                placeholder={data.placeholder}
                type={data.type}
                required={data.required}
              />
            ))}
          </div>
          <button
            className="w-fit py-2 my-4 px-6 bg-gradient-to-tr 
            from-n-3/50 to-n-5/45 text-white hover:border 
            border-[#a08a8a] hover:font-bold text-sm 
            rounded-lg rounded-tl-3xl rounded-br-3xl 
            hover:rounded-none transition-border duration-300"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
