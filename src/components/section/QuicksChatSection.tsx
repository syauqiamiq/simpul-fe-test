import { IInboxData } from "@/interfaces/apis/inbox";
import { dateFormatter } from "@/libs/functions/date-formatter";

import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";

interface IQuicksChatSectionProps {
  data: IInboxData;
  onClick?: () => void;
}

const QuicksChatSection = ({ data, onClick }: IQuicksChatSectionProps) => {
  return (
    <div
      onClick={onClick}
      className="flex w-full border-b-4 p-3 items-center justify-between cursor-pointer hover:bg-gray-200"
    >
      <div className="flex gap-4 w-full">
        <Avatar.Group>
          <Tooltip title={data.receiverUserName} placement="top">
            <Avatar
              className="w-9 h-9"
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Tooltip title={data.receiverUserName} placement="top">
            <Avatar
              className="w-9 h-9"
              style={{ backgroundColor: "#1677ff" }}
              icon={<AntDesignOutlined />}
            />
          </Tooltip>
        </Avatar.Group>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full">
            <div className="text-lg font-lato text-quicks-primary-1 max-w-[75%]">
              {data.subject}
            </div>
            <div className="text-sm font-lato font-medium">
              {dateFormatter(data.sentDate, "MMMM dd, yyyy hh:ii")}
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="w-full flex flex-col gap-2 mr-2">
              <div className="text-base font-semibold font-lato">
                {data.senderUserName && `${data.senderUserName} :`}
              </div>
              <div className="text-sm font-normal font-lato line-clamp-1">
                {data.lastMessage}
              </div>
            </div>
            {!data.isRead && (
              <div className="bg-red-600 w-2 h-2 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuicksChatSection;
