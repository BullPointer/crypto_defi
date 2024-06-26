export type CardContainerProps = {
  children: React.ReactNode;
  className: String;
  heading?: String;
};

export const CardContainer = ({
  children,
  className,
  heading,
}: CardContainerProps) => {
  return (
    <div
      className="bg-transparent py-5 
        px-2 border border-n-5 rounded-md mt-2"
    >
      {heading && <div className="text-xs py-2 italic">{heading}</div>}
      <div className={`${className}`}>{children}</div>
    </div>
  );
};
