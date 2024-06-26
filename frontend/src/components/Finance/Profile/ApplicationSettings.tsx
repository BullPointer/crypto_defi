import { useState } from "react";
import { Appearance, DeleteAccount, Language } from "..";

const ApplicationSettings = () => {
  const [appearance, setAppearance] = useState("night");
  const [language, setLanguage] = useState("english");
  const [showLanguage, setShowLanguage] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const commonBorderStyle = `border border-n-5 rounded-md 
  cursor-pointer`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target as HTMLInputElement;

    setConfirmDelete(checked);
  };

  return (
    <div className="">
      <div
        className={`p-3 text-3xl font-bold ${commonBorderStyle}
          mb-1 text-[#abafd4] backdrop-blur-3xl 
          bg-gradient-to-bl from-[#151b29e5] to-[#0f0c1a]
        `}
      >
        Application Settings
      </div>
      <Appearance appearance={appearance} setAppearance={setAppearance} />
      <Language
        appearance={appearance}
        setShowLanguage={setShowLanguage}
        showLanguage={showLanguage}
        setLanguage={setLanguage}
        language={language}
      />
      <DeleteAccount
        appearance={appearance}
        confirmDelete={confirmDelete}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ApplicationSettings;
