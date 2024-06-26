import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { CardContainer } from "../../Reusables/CardContainer";
import { Checkbox } from "../..";

type DeleteAccountProps = {
  appearance: String;
  confirmDelete: Boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DeleteAccount = ({
  appearance,
  confirmDelete,
  handleChange,
}: DeleteAccountProps) => {
  return (
    <CardContainer
      heading={"It breaks our heart to see you want to leave..."}
      className="py-5 px-2
      border border-n-5 rounded-md mt-2"
    >
      <div className="flex items-center gap-1 text-xl">
        <Icon
          className={`${
            appearance === "night" ? "text-[#4370cae5]" : "text-[#cad5ebe5]"
          }`}
          icon={`material-symbols:heart-broken-outline`}
        />
        <div className="font-serif font-bold">Delete Account</div>
      </div>
      <div>
        <div className="text-sm py-2">
          Please be sure to do the following before requesting deletion of your
          account
        </div>
        <ol className=" text-white text-base mt-4">
          <li className="flex items-center">
            <Icon className="text-3xl text-[#4370cae5]" icon={"ph:dot-fill"} />
            <div> Withdraw all available funds in your wallet</div>
          </li>
          <li className="flex items-center">
            <Icon className="text-3xl text-[#4370cae5]" icon={"ph:dot-fill"} />
            <div>Complete any pending deposit/s</div>
          </li>
          <li className="flex items-center">
            <Icon className="text-3xl text-[#4370cae5]" icon={"ph:dot-fill"} />
            <div>Close every activity</div>
          </li>
        </ol>
        <div className="flex items-start mt-8">
          <Checkbox
            index={Number(0)}
            checked={confirmDelete}
            handleChange={handleChange}
            inputStyling={"w-[40px] h-[20px]"}
            name={"deleteAccount"}
          />
          <div>
            I confirm that I have read the instructions listed above and would
            like to request to delete my account.
          </div>
        </div>
        <button
          className={`w-fit py-2 my-4 px-6 bg-gradient-to-tr 
            from-n-3/50 to-n-5/45 text-white hover:border 
            border-[#a08a8a] hover:font-bold text-sm 
            rounded-lg rounded-tl-3xl rounded-br-3xl 
            hover:rounded-none transition-border duration-300 
            ${confirmDelete === false ? "opacity-20" : "opacity-100"}`}
          type="submit"
        >
          Make Request
        </button>
      </div>
    </CardContainer>
  );
};

export default DeleteAccount;
