import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Img from "../../../../assets/confetti.svg";

const ReferToEarn = () => {
  // 4370cae5
  return (
    <div>
      <div className="text-3xl mb-5">Refer To Earn</div>
      <div className="flex justify-start items-center gap-3">
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="text-xs text-[#afabab]">Total Bonus</div>
          <div className="flex items-center text-2xl">
            <Icon icon={"icon-park-outline:dollar"} />
            <span className="text-3xl">0</span>
          </div>
        </div>
        <div className="mb-5">
          <div className="text-xs text-[#afabab]">Joined User</div>
          <div className="text-center text-2xl">
            <span className="text-3xl">0</span>
          </div>
        </div>
      </div>
      <div
        className="relative border border-n-5 py-3 px-5  
        rounded-2xl bg-transparent bg-gradient-to-bl 
        from-[#2a4579e5] to-n-12/5"
      >
        <div className="text-xl p-3">
          Refer Your Friends, Get 30% of your friend reward
        </div>
        <div className="text-sm p-3">
          Share your referral code or link with a friend and win win 30% of
          exiting reward on rewards and gifts.
        </div>
        <img
          className="w-[50%] h-full -z-10 absolute top-0 right-[3rem] bottom-[50%] outline-0"
          src={Img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ReferToEarn;
