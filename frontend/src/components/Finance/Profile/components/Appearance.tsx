import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { CardContainer } from "../../Reusables/CardContainer";

type AppearanceProps = {
  appearance: String;
  setAppearance: React.Dispatch<React.SetStateAction<string>>;
};
const Appearance = ({ appearance, setAppearance }: AppearanceProps) => {
  return (
    <CardContainer
      className="backdrop-blur-3xl bg-transparent py-5 
        px-2 border border-n-5 rounded-md mt-2"
    >
      <div className="text-sm py-2">
        Use device settings to toggle between Day or Night, mode will be
        followed by device settings
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Icon
            className={`text-xl ${
              appearance === "night" ? "text-[#4370cae5]" : "text-[#cad5ebe5]"
            }`}
            icon={
              appearance === "day"
                ? "material-symbols:dark-mode-rounded"
                : "material-symbols:light-mode"
            }
          />
          <div className="text-xl font-serif font-bold">Appearance</div>
        </div>
        <Icon
          className={`text-3xl cursor-pointer ${
            appearance === "night" ? "text-[#4370cae5]" : "text-[#cad5ebe5]"
          }`}
          onClick={() =>
            appearance === "day" ? setAppearance("night") : setAppearance("day")
          }
          icon={
            appearance === "day"
              ? "material-symbols:toggle-off-outline"
              : "material-symbols:toggle-on-outline"
          }
        />
      </div>
    </CardContainer>
  );
};

export default Appearance;
