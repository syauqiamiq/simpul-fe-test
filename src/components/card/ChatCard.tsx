import { IChat, IChatDetail } from "@/interfaces/apis/chat";
import { dateFormatter } from "@/libs/functions/date-formatter";

import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import React from "react";

interface IChatCardProps {
  data: IChat;
}

const ChatCard = ({ data }: IChatCardProps) => {
  return (
    <>
      {data.chatDetail.map((v: IChatDetail, i: any) => {
        return v.chatType === "FROM" ? (
          <div className="flex">
            <div className="max-w-[85%]">
              <div className="flex w-full font-lato font-semibold text-xs mt-2 text-quicks-chat-label-1">
                {v.senderName}
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-quicks-chat-1 p-2 shadow-md rounded-bl-none rounded-lg">
                  <p className="font-lato text-sm font-normal">{v.content}</p>
                  <div className="font-lato text-xs mt-2  text-[#979797]">
                    {dateFormatter(v.chatDate, "HH:ii")}
                  </div>
                </div>
                <Dropdown
                  trigger={["click"]}
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: "Reply",
                      },
                    ],
                  }}
                >
                  <EllipsisOutlined className="cursor-pointer" />
                </Dropdown>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="max-w-[85%]">
              <div className="flex w-full justify-end font-lato font-semibold text-xs mt-2 text-quicks-chat-label-2">
                You
              </div>
              <div className="flex gap-2 items-start">
                <Dropdown
                  trigger={["click"]}
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: "Edit",
                      },
                      {
                        key: "2",
                        danger: true,
                        label: "Delete",
                      },
                    ],
                  }}
                >
                  <EllipsisOutlined className="cursor-pointer" />
                </Dropdown>
                <div className="bg-amk-light-blue p-2 shadow-md rounded-br-none rounded-lg bg-quicks-chat-2">
                  <p className="font-lato text-sm font-normal">{v.content}</p>
                  <div className="flex w-full justify-end font-lato text-xs mt-2  text-[#979797]">
                    {dateFormatter(v.chatDate, "HH:ii")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex w-full gap-2 items-center justify-center">
        <div className="flex-grow ">
          <div className=" bg-black w-full h-[0.2px]"></div>
        </div>
        <div className="flex text-center">
          {dateFormatter(data.chatDate, "MMMM dd, yyyy hh:ii")}
        </div>
        <div className="flex-grow ">
          <div className=" bg-black w-full h-[0.2px]"></div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
