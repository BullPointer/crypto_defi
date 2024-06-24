import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

export type ActionButtonProps = {
  actionClassName?: String;
  actionBgColor?: String;
  actionIcon: String;
  actionText: String;
  actionTextColor?: String;
};
export const ActionButton = ({
  actionBgColor,
  actionClassName,
  actionIcon,
  actionText,
  actionTextColor,
}: ActionButtonProps) => {
  return (
    <div
      className={`${
        actionBgColor ? actionBgColor : "bg-[#223251e5]"
      } h-fit py-2 px-4 ${actionClassName && actionClassName}
        rounded-xl backdrop-blur-3xl bg-opacity-85 font-bold
        flex items-center gap-1 ${
          actionTextColor ? actionTextColor : "text-[#2565e6]"
        }  cursor-pointer`}
    >
      <Icon
        className="text-[0.7rem] text-lg sm:text-xl"
        icon={String(actionIcon)}
      />
      <span className="text-[0.7rem]">{actionText}</span>
    </div>
  );
};
