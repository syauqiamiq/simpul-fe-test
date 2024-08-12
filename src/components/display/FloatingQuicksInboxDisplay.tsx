import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Skeleton, Tooltip } from "antd";
import QuicksChatSection from "../section/QuicksChatSection";
import { inboxDummy } from "@/constants/inbox-dummy";
import { IInboxData } from "@/interfaces/apis/inbox";
import { useAppDispatch } from "@/libs/hooks/useAppDispatch";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import { setChatId, setIsChatOpen } from "@/store/slices/quicks-chat-slice";
import { useGetQuicksInboxQuery } from "@/libs/apis/endpoints/inbox";
import { useEffect } from "react";

interface FloatingQuicksInboxDisplayProps {}

const FloatingQuicksInboxDisplay = (props: FloatingQuicksInboxDisplayProps) => {
  const quicksChatState = useAppSelector((state) => state.quicksChat);
  const dispatch = useAppDispatch();

  const { data, isError, isFetching, isLoading, isSuccess, refetch } =
    useGetQuicksInboxQuery();

  useEffect(() => {
    refetch();
  }, [quicksChatState.isChatOpen]);

  return (
    <div className=" flex flex-col w-[300px] h-[300px] lg:w-[750px] lg:h-[750px] rounded-lg fixed bottom-32 right-10 p-3 shadow-lg">
      <div className="flex w-full">
        <Input.Search placeholder="Search" onSearch={(v) => console.log(v)} />
      </div>

      <div className="flex w-full flex-col gap-3 mt-2  overflow-auto">
        {isLoading || isFetching ? (
          [1, 2, 3].map(() => {
            return <Skeleton avatar paragraph={{ rows: 3 }} />;
          })
        ) : isSuccess ? (
          data?.map((v: IInboxData, i: any) => {
            return (
              <QuicksChatSection
                onClick={() => {
                  dispatch(setIsChatOpen(true));
                  dispatch(setChatId(v.id));
                }}
                key={i}
                data={v}
              />
            );
          })
        ) : isError ? (
          "SOMETHING WRONG WITH API"
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FloatingQuicksInboxDisplay;
