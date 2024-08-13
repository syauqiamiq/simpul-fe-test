import { ITask } from "@/interfaces/apis/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const quicksTaskSlice = createSlice({
  name: "quicksTask",
  initialState,
  reducers: {
    setIsDone: (state: any, action: PayloadAction<any>) => {
      const task = state.data.find(
        (element: ITask) => element.id === action.payload.id
      );
      if (task) {
        task.isDone = action.payload.checked; // Directly mutate the task
      }
    },
    setIsExpand: (state: any, action: PayloadAction<any>) => {
      const task = state.data.find(
        (element: ITask) => element.id === action.payload.id
      );
      if (task) {
        task.isExpand = !task.isExpand; // Directly mutate the task
      }
    },
    setTaskData: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setIsDone, setTaskData, setIsExpand } = quicksTaskSlice.actions;

export default quicksTaskSlice.reducer;
