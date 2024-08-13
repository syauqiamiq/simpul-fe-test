import { QuicksButtonConditionType } from "@/interfaces/quicks-button-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedButtonType: "SHOW_DEFAULT",
};

export const quicksButtonSlice = createSlice({
  name: "quicksButton",
  initialState,
  reducers: {
    setSelectedButtonType: (
      state,
      action: PayloadAction<QuicksButtonConditionType>
    ) => {
      state.selectedButtonType = action.payload;
    },
  },
});

export const { setSelectedButtonType } = quicksButtonSlice.actions;

export default quicksButtonSlice.reducer;
