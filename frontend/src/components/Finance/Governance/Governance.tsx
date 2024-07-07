import trustImg from "../../../assets/we-keep-our-word.jpeg";
import communityImg from "../../../assets/community.jpeg";

const Governance = () => {
  return (
    <div className="mt-10">
      <div></div>
      <div
        className="flex gap-1 w-[95%] md:w-[80%] mx-auto bg-gradient-to-tr from-slate-500 
        to-neutral-700 mb-5 rounded-lg p-5 text-xl shadow-sm shadow-n-5 border border-slate-600"
      >
        <img className="w-[50%]" src={communityImg} alt="" />
        <div className="leading-9 text-[#dad7d7] p-3">
          <div className="text-sm font-bold mb-2 text-blue-400">
            Community governance
          </div>
          <div>
            Osifi is governed by community members like you. We scale through
            decisions made by our community to render the best and provide the
            best service you can trust, Osifi reserves the right to make update
            as at when due, to fluctuating market conditions without consent
            from any individual or entity.
          </div>
        </div>
      </div>
      <div
        className="flex gap-1 w-[95%] md:w-[80%] mx-auto bg-gradient-to-tr from-slate-500 
        to-neutral-700 mb-5 rounded-lg p-5 text-xl shadow-sm shadow-n-5 border border-slate-600"
      >
        <img className="w-[50%]" src={trustImg} alt="" />
        <div className="leading-9 text-[#dad7d7] p-3">
          <div className="text-sm font-bold mb-2 text-blue-400">
            We keep our word
          </div>
          <div> We(Osifi) protect our reputation by keeping our word. </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
