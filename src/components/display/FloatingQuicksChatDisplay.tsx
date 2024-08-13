import { dummyChat } from "@/constants/chat-dummy";
import {
  CaretRightFilled,
  CloseOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ChatCard from "../card/ChatCard";
import { Button, Input, Skeleton } from "antd";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import { useAppDispatch } from "@/libs/hooks/useAppDispatch";
import { setSelectedButtonType } from "@/store/slices/quicks-button-slice";
import { setChatId, setIsChatOpen } from "@/store/slices/quicks-chat-slice";
import { useGetQuicksChatRoomByIdQuery } from "@/libs/apis/endpoints/chat";

interface IFloatingQuicksChatDisplayProps {}

const FloatingQuicksChatDisplay = ({}: IFloatingQuicksChatDisplayProps) => {
  const quicksButtonState = useAppSelector((state) => state.quicksButton);
  const quicksChatState = useAppSelector((state) => state.quicksChat);
  const dispatch = useAppDispatch();

  const handleChatRoomClose = () => {
    dispatch(setSelectedButtonType("SHOW_DEFAULT"));
    dispatch(setChatId(null));
    dispatch(setIsChatOpen(false));
  };

  const handleChatRoomBack = () => {
    dispatch(setChatId(null));
    dispatch(setIsChatOpen(false));
  };

  const { data, isError, isFetching, isLoading, isSuccess, refetch } =
    useGetQuicksChatRoomByIdQuery({
      id: quicksChatState.chatId,
    });

  useEffect(() => {
    refetch();
  }, [quicksChatState.isChatOpen]);

  return (
    <div className="flex flex-col w-[300px] h-[300px] lg:w-[750px] lg:h-[750px] rounded-lg fixed bottom-32 right-10 p-3 shadow-lg overflow-hidden">
      <div className="flex flex-col w-full h-full ">
        <div className="flex w-full min-h-16 justify-between items-center  p-2  border-b-4">
          <div className="flex gap-3 w-full">
            <LeftOutlined
              className="cursor-pointer text-2xl"
              onClick={handleChatRoomBack}
            />
            <div className="flex flex-col w-full">
              {isLoading || isFetching ? (
                <Skeleton.Button block shape="square" className="w-full" />
              ) : (
                <>
                  <h1 className="font-lato text-base font-semibold text-quicks-primary-1">
                    {data?.roomTitle}
                  </h1>
                  <h2 className="font-lato font-normal text-sm">
                    {`${data?.totalParticipant} Participants`}
                  </h2>
                </>
              )}
            </div>
          </div>
          <div>
            <CloseOutlined
              className="text-2xl cursor-pointer"
              onClick={handleChatRoomClose}
            />
          </div>
        </div>
        <div className="flex-grow overflow-auto">
          {isLoading || isFetching ? (
            <div className="p-5">
              {[1, 2, 3].map((_, i: any) => {
                return (
                  <Skeleton key={i} className="mt-4" paragraph={{ rows: 3 }} />
                );
              })}
            </div>
          ) : isSuccess ? (
            <InfiniteScroll
              className="p-5 flex flex-col-reverse gap-4"
              dataLength={data.chats.length!}
              next={() => {
                console.log("Infinite Load");
              }}
              hasMore={true}
              loader={<>LOADING</>}
              inverse={true}
            >
              {data?.chats.map((v, index) => (
                <ChatCard key={index} data={v} />
              ))}
            </InfiniteScroll>
          ) : isError ? (
            "SOMETHING WRONG WITH API"
          ) : (
            <></>
          )}
        </div>
        <div className="min-h-18 gap-2 flex p-2 w-full">
          <Input multiple placeholder="Type a new message..." />
          <Button type="primary">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingQuicksChatDisplay;
