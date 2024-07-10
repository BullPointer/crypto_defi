type TransactionHeaderProps = {
  header: String;
  subheader?: String;
};

const TransactionHeader = ({ header, subheader }: TransactionHeaderProps) => {
  return (
    <div className="text-center sm:p-10 md:py-16 md:w-[80%] mx-auto">
      <header
        className="font-mono text-pretty text-2xl sm:text-4xl 
        md:text-5xl font-bold mb-5"
      >
        {header}
      </header>
      <section className="font-grotesk leading-8 px-8 text-[1.5rem] md:text-[1.3rem]">
        {subheader}
      </section>
    </div>
  );
};

export default TransactionHeader;
