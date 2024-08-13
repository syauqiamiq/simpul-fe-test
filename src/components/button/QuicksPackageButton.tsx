import { QuicksButtonConditionType } from "@/interfaces/quicks-button-type";
import { useAppDispatch } from "@/libs/hooks/useAppDispatch";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import { setSelectedButtonType } from "@/store/slices/quicks-button-slice";
import FloatingQuicksChatDisplat from "../display/FloatingQuicksChatDisplay";
import FloatingQuicksInboxDisplay from "../display/FloatingQuicksInboxDisplay";
import FloatingQuicksTaskDisplay from "../display/FloatingQuicksTaskDisplay";
import FloatingQuicksButton from "./FloatingQuicksButton";

type Props = {};

const QuicksPackageButton = (props: Props) => {
  const quicksButtonState = useAppSelector((state) => state.quicksButton);
  const quicksChatState = useAppSelector((state) => state.quicksChat);
  const dispatch = useAppDispatch();

  const handleQuicksButtonClick = (target: QuicksButtonConditionType) => {
    dispatch(setSelectedButtonType(target));
  };

  return quicksButtonState.selectedButtonType === "SHOW_DEFAULT" ? (
    <div className="fixed bottom-10 right-10">
      <FloatingQuicksButton
        active={false}
        type="ALL"
        onClick={() => handleQuicksButtonClick("SHOW_ALL")}
      />
    </div>
  ) : quicksButtonState.selectedButtonType === "SHOW_ALL" ? (
    <>
      <div className="fixed bottom-10 right-10">
        <FloatingQuicksButton
          active={false}
          type="ALL"
          onClick={() => handleQuicksButtonClick("SHOW_DEFAULT")}
        />
      </div>
      <div className="fixed bottom-10 right-32">
        <FloatingQuicksButton
          active={false}
          type="INBOX"
          onClick={() => handleQuicksButtonClick("SHOW_INBOX")}
        />
      </div>
      <div className="fixed bottom-10 right-[216px]">
        <FloatingQuicksButton
          active={false}
          type="TASK"
          onClick={() => handleQuicksButtonClick("SHOW_TASK")}
        />
      </div>
    </>
  ) : quicksButtonState.selectedButtonType === "SHOW_INBOX" ? (
    <>
      {quicksChatState.isChatOpen ? (
        <div>
          <FloatingQuicksChatDisplat />
        </div>
      ) : (
        <div>
          <FloatingQuicksInboxDisplay />
        </div>
      )}
      <div className="fixed bottom-10 right-10">
        <FloatingQuicksButton
          active={true}
          type="INBOX"
          onClick={() => handleQuicksButtonClick("SHOW_DEFAULT")}
        />
      </div>
      <div className="fixed bottom-10  right-14 z-[-1] ">
        <FloatingQuicksButton
          active={false}
          type="SHADOW"
          onClick={() => handleQuicksButtonClick("SHOW_DEFAULT")}
        />
      </div>
      <div className="fixed bottom-10 right-36">
        <FloatingQuicksButton
          active={false}
          type="TASK"
          onClick={() => handleQuicksButtonClick("SHOW_TASK")}
        />
      </div>
    </>
  ) : quicksButtonState.selectedButtonType === "SHOW_TASK" ? (
    <>
      <div>
        <FloatingQuicksTaskDisplay />
      </div>
      <div className="fixed bottom-10 right-10">
        <FloatingQuicksButton
          active={true}
          type="TASK"
          onClick={() => handleQuicksButtonClick("SHOW_DEFAULT")}
        />
      </div>
      <div className="fixed bottom-10  right-14 z-[-1] ">
        <FloatingQuicksButton
          active={false}
          type="SHADOW"
          onClick={() => handleQuicksButtonClick("SHOW_DEFAULT")}
        />
      </div>
      <div className="fixed bottom-10 right-36">
        <FloatingQuicksButton
          active={false}
          type="INBOX"
          onClick={() => handleQuicksButtonClick("SHOW_INBOX")}
        />
      </div>
    </>
  ) : (
    <></>
  );
};

export default QuicksPackageButton;
