const Button = ({ children, onClick, className }: any) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
