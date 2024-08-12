import { ReactNode } from "react";
import CloudLightningIcon from "@/assets/icons/cloud-lightning.png";
import MessageIcon from "@/assets/icons/message-icon.png";
import Message2Icon from "@/assets/icons/message-2-icon.png";
import TaskManagementIcon from "@/assets/icons/task-management-icon.png";
import TaskManagemen2Icon from "@/assets/icons/task-management-2-icon.png";
import { QuicksButtonType } from "@/interfaces/quicks-button-type";

interface IFloatingQuicksButtonProps {
  type: QuicksButtonType;
  active: boolean;
  onClick?: () => void;
}

const FloatingQuicksButton = ({
  type,
  active = true,
  onClick,
}: IFloatingQuicksButtonProps) => {
  return type === "ALL" ? (
    <div
      onClick={onClick}
      className={`w-[68px] h-[68px] bg-quicks-primary-1 flex justify-center items-center cursor-pointer rounded-full`}
    >
      <img src={CloudLightningIcon} width={20} height={20} />
    </div>
  ) : type === "INBOX" ? (
    active ? (
      <div
        onClick={onClick}
        className={`w-[68px] h-[68px] bg-quicks-indicator-2 flex justify-center items-center cursor-pointer rounded-full`}
      >
        <img src={MessageIcon} width={25} height={25} />
      </div>
    ) : (
      <div
        onClick={onClick}
        className={`w-[68px] h-[68px] bg-[#F2F2F2] flex justify-center items-center cursor-pointer rounded-full`}
      >
        <img src={Message2Icon} width={25} height={25} />
      </div>
    )
  ) : type === "TASK" ? (
    active ? (
      <div
        onClick={onClick}
        className={`w-[68px] h-[68px] bg-quicks-indicator-1 flex justify-center items-center cursor-pointer rounded-full`}
      >
        <img src={TaskManagementIcon} width={25} height={25} />
      </div>
    ) : (
      <div
        onClick={onClick}
        className={`w-[68px] h-[68px] bg-[#F2F2F2] flex justify-center items-center cursor-pointer rounded-full`}
      >
        <img src={TaskManagemen2Icon} width={25} height={25} />
      </div>
    )
  ) : (
    <div
      onClick={onClick}
      className={`w-[68px] h-[68px] bg-[#4F4F4F] flex justify-center items-center cursor-pointer rounded-full`}
    ></div>
  );
};

export default FloatingQuicksButton;
