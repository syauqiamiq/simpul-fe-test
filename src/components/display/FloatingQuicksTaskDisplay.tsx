import { taskDummy } from "@/constants/task-dummy";
import { ITask } from "@/interfaces/apis/task";
import { useGetQuicksTaskQuery } from "@/libs/apis/endpoints/task";
import { dateFormatter } from "@/libs/functions/date-formatter";
import { useAppDispatch } from "@/libs/hooks/useAppDispatch";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import {
  setIsDone,
  setIsExpand,
  setTaskData,
} from "@/store/slices/quicks-task-slice";

import {
  ClockCircleOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Input,
  Skeleton,
  Space,
} from "antd";
import { differenceInBusinessDays } from "date-fns";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

import { useEffect, useState } from "react";

interface IFloatingQuicksTaskDisplayProps {}

const FloatingQuicksTaskDisplay = (props: IFloatingQuicksTaskDisplayProps) => {
  const quicksTaskState = useAppSelector((state) => state.quicksTask);
  const quicksButtonState = useAppSelector((state) => state.quicksButton);
  const dispatch = useAppDispatch();
  const [taskFilter, setTaskFilter] = useState("ALL");

  const { data, isError, isFetching, isLoading, isSuccess, refetch } =
    useGetQuicksTaskQuery({ filter: taskFilter });

  useEffect(() => {
    refetch();
  }, [quicksButtonState.selectedButtonType, taskFilter]);

  useEffect(() => {
    let fixData = data?.map((v: ITask) => {
      return { ...v, isExpand: false };
    });
    dispatch(setTaskData(fixData));
  }, [isSuccess, taskFilter]);

  const handleCheckboxChange = (e: any, id: any) => {
    dispatch(
      setIsDone({
        checked: e.target.checked,
        id,
      })
    );
  };

  const handleExpandChange = (id: any) => {
    dispatch(
      setIsExpand({
        id,
      })
    );
  };
  const dateFormatList = [
    "DD/MM/YYYY HH:mm",
    "DD/MM/YY",
    "DD-MM-YYYY",
    "DD-MM-YY",
  ];

  return (
    <div className=" flex flex-col w-[300px] h-[300px] lg:w-[750px] lg:h-[750px] rounded-lg fixed bottom-32 right-10 p-3 shadow-lg">
      <div className="flex w-full justify-between">
        <Dropdown
          menu={{
            items: [
              {
                key: "ALL",
                label: "ALL",
                onClick: (v) => setTaskFilter(v.key),
              },
              {
                key: "Personal Errands",
                label: "Personal Errands",
                onClick: (v) => setTaskFilter(v.key),
              },
              {
                key: "Urgent To-Do",
                label: "Urgent To-Do",
                onClick: (v) => setTaskFilter(v.key),
              },
            ],
          }}
        >
          <Button>
            <Space className="font-lato">
              My Task
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Button type="primary">New Task</Button>
      </div>

      <div className="flex w-full flex-col gap-3 mt-2  overflow-auto">
        {isLoading || isFetching ? (
          [1, 2, 3].map((_, i: any) => {
            return <Skeleton key={i} avatar paragraph={{ rows: 3 }} />;
          })
        ) : isSuccess ? (
          quicksTaskState.data?.map(
            (v: ITask & { isExpand: boolean }, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col w-full gap-2  border-b-4 p-3 items-center  cursor-pointer"
                >
                  <div className="flex w-full justify-between gap-2 items-start">
                    <div className="flex gap-2">
                      <Checkbox
                        checked={v.isDone}
                        onChange={(e) => handleCheckboxChange(e, v.id)}
                      />
                      <div
                        className={`text-base font-lato w-full font-semibold ${
                          v.isDone && "line-through italic"
                        }`}
                      >
                        {v.title}
                      </div>
                    </div>
                    <div className="flex min-w-[45%] gap-4 justify-end">
                      <div className="font-lato text-sm text-red-600">
                        {differenceInBusinessDays(
                          new Date(),
                          new Date(v.endDate)
                        ) * -1}{" "}
                        Days Left
                      </div>
                      <div className="font-lato text-sm">
                        {dateFormatter(v.endDate, "dd/MM/yyy")}
                      </div>
                      {v.isExpand ? (
                        <DownOutlined
                          onClick={() => handleExpandChange(v.id)}
                        />
                      ) : (
                        <UpOutlined onClick={() => handleExpandChange(v.id)} />
                      )}
                      <Dropdown
                        trigger={["click"]}
                        menu={{
                          items: [
                            {
                              key: "1",
                              label: "Delete",
                              danger: true,
                            },
                          ],
                        }}
                      >
                        <EllipsisOutlined className="cursor-pointer" />
                      </Dropdown>
                    </div>
                  </div>
                  {v.isExpand && (
                    <div className="flex flex-col w-full pl-6 gap-5 mt-3">
                      <div className="flex gap-3">
                        <ClockCircleOutlined />
                        <DatePicker
                          showTime
                          defaultValue={dayjs(
                            "01/01/2015 14:10",
                            "DD/MM/YYYY HH:mm"
                          )}
                          format={dateFormatList}
                          onChange={(value, dateString) => {
                            console.log("Selected Time: ", value);
                            console.log(
                              "Formatted Selected Time: ",
                              dateString
                            );
                          }}
                          onOk={(value) => console.log("onOk: ", value)}
                        />
                      </div>
                      <div className="flex gap-3 w-full">
                        <EditOutlined />
                        <Input.TextArea rows={4} value={v.description} />
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )
        ) : isError ? (
          "SOMETHING WRONG WITH API"
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FloatingQuicksTaskDisplay;
