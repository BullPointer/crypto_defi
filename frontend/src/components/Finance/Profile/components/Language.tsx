import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { CardContainer } from "../../Reusables/CardContainer";

type LanguageProps = {
  appearance: String;
  setShowLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  showLanguage: Boolean;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  language: String;
};
const Language = ({
  appearance,
  setShowLanguage,
  showLanguage,
  setLanguage,
  language,
}: LanguageProps) => {
  const commonStyle = `flex justify-between items-center p-3 
      cursor-pointer`;

  return (
    <CardContainer
      className="backdrop-blur-3xl bg-transparent py-5 
                px-2 border border-n-5 rounded-md mt-2 
                flex justify-between items-center"
    >
      <div className="flex items-center gap-1 text-xl">
        <Icon
          className={`${
            appearance === "night" ? "text-[#4370cae5]" : "text-[#cad5ebe5]"
          }`}
          icon={`material-symbols:language`}
        />
        <div className="font-serif font-bold">Language</div>
      </div>
      <div className=" relative ">
        <div
          onClick={() => setShowLanguage(!showLanguage)}
          className={`${commonStyle} gap-2 text-left rounded-md
            border border-[#4370cae5] shadow-2xl`}
        >
          <div className="text-sm">{language.toUpperCase()}</div>
          <Icon className="text-lg" icon="ep:arrow-down-bold" />
        </div>
        {showLanguage && (
          <ul className="w-full h-fit bg-n-8 absolute top-full right-0 ">
            {["English", "Spanish", "French", "German"].map((item, idx) => (
              <li
                key={idx}
                onClick={() => setLanguage(item.toLowerCase())}
                className={`shadow z-50 ${commonStyle} ${
                  language.toLowerCase() === item.toLowerCase()
                    ? "bg-n-5/65 z-50"
                    : "bg-n-8 z-50"
                }`}
              >
                <div className="text-sm">{item}</div>
                {language === item.toLowerCase() && (
                  <Icon
                    className="text-3xl text-[#4370cae5]"
                    icon={"ph:dot-fill"}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </CardContainer>
  );
};

export default Language;
