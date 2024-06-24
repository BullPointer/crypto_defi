type InputProps = {
  className?: String;
  label: String;
  name: String;
  placeholder: String;
  required?: Boolean;
  type: String;
};

const Input = ({
  className,
  label,
  name,
  placeholder,
  type,
  required,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs italic" htmlFor="">
        {label}
        {required && <span className="text-[#ec2525]">*</span>}
      </label>
      <input
        className="p-2 rounded-lg text-sm outline-none"
        name={String(name)}
        type={String(type)}
        placeholder={String(placeholder)}
      />
    </div>
  );
};

export default Input;
