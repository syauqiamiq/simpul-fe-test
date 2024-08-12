interface IFloatingQuicksTaskDisplayProps {}

const FloatingQuicksTaskDisplay = (props: IFloatingQuicksTaskDisplayProps) => {
  return (
    <div className=" flex w-[300px] h-[300px] lg:w-[750px] lg:h-[750px] rounded-lg fixed bottom-32 right-10 p-3 shadow-lg">
      TASK MANAGEMENT
    </div>
  );
};

export default FloatingQuicksTaskDisplay;
