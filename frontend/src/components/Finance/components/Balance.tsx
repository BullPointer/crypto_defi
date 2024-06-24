import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ActionButton } from "../designs/ActionButton";

type BalanceProps = {
  amount: Number;
  actionIcon: String;
  actionText: String;
  className?: String;
  title: String;
};

const Balance = ({
  amount,
  actionText,
  actionIcon,
  className,
  title,
}: BalanceProps) => {
  return (
    <div
      className={`bg-n-5/10 backdrop-blur-3xl mb-5 
    p-5 sm:p-6 md:p-8 rounded-3xl ${className}`}
    >
      <div className="flex justify-between">
        <div>
          <div className="font-bold text-xl md:text-2xl mb-2">{title}</div>
          <div className="flex flex-wrap items-center gap-0">
            <Icon icon={"icon-park-outline:dollar"} />
            <div>{Number(amount)}</div>
          </div>
        </div>
        <ActionButton actionIcon={actionIcon} actionText={actionText} />
      </div>
    </div>
  );
};

export default Balance;
