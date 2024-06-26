type InputProps = {
  className?: String;
  label?: String;
  name: String;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: String;
  required?: Boolean;
  type: String;
};

export const Input = ({
  className,
  label,
  name,
  handleChange,
  placeholder,
  type,
  required,
}: InputProps) => {
  return (
    <div
      className={`flex 
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
      <input
        className={`p-3 rounded-lg text-sm outline-none`}
        onChange={handleChange}
        name={String(name)}
        type={String(type)}
        placeholder={String(placeholder)}
      />
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
