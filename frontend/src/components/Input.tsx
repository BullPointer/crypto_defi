import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type InputProps = {
  className?: String;
  label?: String;
  name: String;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword?: React.MouseEventHandler<HTMLElement>;
  placeholder?: String;
  required?: Boolean;
  showPassword?: Boolean;
  type: String;
};

export const Input = ({
  className,
  label,
  name,
  handleChange,
  handleShowPassword,
  placeholder,
  required,
  showPassword,
  type,
}: InputProps) => {
  return (
    <div
      className={`flex px-3
    ${
      type !== "checkbox" ? "flex-col gap-2" : "justify-center items-center"
    } ${className}`}
    >
      {label && (
        <label className="text-xs italic" htmlFor="">
          {label}
          {required && <span className="text-[#ec2525]">*</span>}
        </label>
      )}
      <div
        className={`${name === "password" && "flex items-center"} 
         bg-[#3b3a3a] rounded-lg p-2`}
      >
        <input
          className={`w-full p-1 sm:p-3 text-xs sm:text-sm outline-none `}
          onChange={handleChange}
          name={String(name)}
          type={String(type)}
          placeholder={String(placeholder)}
        />
        {name === "password" &&
          (showPassword ? (
            <Icon
              onClick={handleShowPassword}
              className="p-3 text-xl cursor-pointer"
              icon={"zondicons:view-hide"}
            />
          ) : (
            <Icon
              onClick={handleShowPassword}
              className=" p-3 text-xl cursor-pointer"
              icon={"zondicons:view-show"}
            />
          ))}
      </div>
    </div>
  );
};

type CheckboxProps = {
  className?: String;
  checked?: Boolean;
  inputStyling?: String;
  index?: Number;
  label?: String;
  name: String;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  required?: Boolean;
};

export const Checkbox = ({
  className,
  checked,
  inputStyling,
  index,
  name,
  handleChange,
  required,
}: CheckboxProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <input
        className={`cursor-pointer ${
          inputStyling && inputStyling
        } "p-2 rounded-lg text-sm outline-none"`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, Number(index))
        }
        name={String(name)}
        type={"checkbox"}
        checked={Boolean(checked || required) && Boolean(checked)}
      />
    </div>
  );
};
