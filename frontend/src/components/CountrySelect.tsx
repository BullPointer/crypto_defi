// Main data and utils
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import {
  TCountryCode,
  getCountryCode,
  getEmojiFlag,
  // continents,
  // countries,
  // languages,
} from "countries-list";
import { useEffect, useState } from "react";
import { countryNames } from "../constants";

type CountrySelectProps = {
  country: String;
  required: Boolean;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

const CountrySelect = ({
  country,
  required,
  setCountry,
}: CountrySelectProps) => {
  const [countriesList, setCountriesList] = useState([] as String[]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleCountrySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);

    const filterSearch = countryNames?.filter((e) =>
      e.toLowerCase().includes(value.toLocaleLowerCase())
    );
    setCountriesList(filterSearch);
  };

  useEffect(() => {
    setCountriesList(countryNames);
  }, []);

  return (
    <div className="p-3 mt-3">
      <div className="text-xs italic mb-2">
        Select Country {required && <span className="text-[#ec2525]">*</span>}
      </div>
      <div className="bg-[#3b3a3a] rounded-md">
        {!showSearch ? (
          <div
            className="flex items-center justify-between p-4 
            cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <div className="font-bold">{country}</div>
            <Icon icon={"material-symbols:keyboard-arrow-down"} />
          </div>
        ) : (
          <div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`z-50 relative w-full flex items-center 
              px-2`}
            >
              <input
                className="w-full p-4 text-sm outline-none"
                onChange={handleCountrySelect}
                type="search"
                value={search}
              />
              <Icon
                className="text-2xl cursor-pointer "
                icon={"material-symbols:search"}
              />
            </div>
            <div
              onClick={() => setShowSearch(false)}
              className=" absolute left-0 top-0 w-full 
              h-screen bg-transparent opacity-10"
            />
          </div>
        )}
      </div>
      {showSearch && (
        <ul className="relative z-50 w-full h-80 overflow-y-auto">
          {countriesList?.map((name, idx) => (
            <li
              onClick={() => {
                setCountry(String(name));
                setShowSearch(false);
              }}
              key={idx}
              className="flex flex-wrap justify-between items-center 
            hover:bg-n-5/35 cursor-pointer"
            >
              <div className="flex items-center gap-1 py-4 px-2">
                <span>
                  {getEmojiFlag(getCountryCode(String(name)) as TCountryCode)}
                </span>
                <span>{getCountryCode(String(name))}</span>
              </div>
              <div className="px-3 py-4 font-bold">{name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
