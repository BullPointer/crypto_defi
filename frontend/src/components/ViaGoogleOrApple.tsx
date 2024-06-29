import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type ViaGoogleOrAppleProps = {
  icon: String;
  text: String;
};
const ViaGoogleOrApple = ({ icon, text }: ViaGoogleOrAppleProps) => {
  return (
    <div
      className="w-full flex justify-center items-center gap-1
          mt-3 h-11 border border-n-5 py-3 px-5 cursor-pointer
          text-sm mx-auto hover:font-bold hover:rounded-md
           bg-gradient-to-bl from-n-5 to-[#535ba1]"
    >
      <Icon className="text-xl" icon={String(icon)} />
      <div className="text-sm font-bold">{text}</div>
    </div>
  );
};

export default ViaGoogleOrApple;
