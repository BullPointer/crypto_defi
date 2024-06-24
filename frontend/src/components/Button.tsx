const Button = ({ children, onClick, className, defaultStyling }: any) => {
  const buttonStyle = `hidden md:flex border border-spacing-10 
          border-n-5 rounded-md p-5 cursor-pointer bg-gradient-to-r 
          from-slate-500 to-red-300`;

  return (
    <div
      className={defaultStyling ? `${buttonStyle} ${className}` : className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
