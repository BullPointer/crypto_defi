import { ActionButton } from "../designs/ActionButton";

export const ActionBtns = () => {
  return (
    <div className="w-full md:w-auto grid grid-cols-2 md:flex flex-wrap gap-2">
      <ActionButton
        actionIcon={"icon-park-outline:slightly-frowning-face-whit-open-mouth"}
        actionText={"Log Out"}
        actionBgColor={"bg-n-6"} // ff491298
        actionTextColor={"text-[#4370cae5]"} // ff4b12
        actionClassName={"w-full md:w-fit my-3"} // 223251e5
      />
      <ActionButton
        actionIcon={"icon-park-outline:weixin-cards-offers"}
        actionText={"Offer for You"}
        actionBgColor={"bg-n-6"}
        actionTextColor={"text-[#4370cae5]"}
        actionClassName={"w-full md:w-fit my-3"}
      />
      <ActionButton
        actionIcon={"icon-park-outline:help"}
        actionText={"Help"}
        actionBgColor={"bg-n-6"}
        actionTextColor={"text-[#4370cae5]"} // ff4b12
        actionClassName={"w-full md:w-fit my-3"}
      />
      <ActionButton
        actionIcon={"icon-park-outline:user-positioning"}
        actionText={"Verify Identity"}
        actionBgColor={"bg-n-6"}
        actionTextColor={"text-[#4370cae5]"} // ff4b12
        actionClassName={"w-full md:w-fit my-3"}
      />
    </div>
  );
};
