import {
  QuicksButtonConditionType,
  QuicksButtonType,
} from "@/interfaces/quicks-button-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isChatOpen: false,
  chatId: null,
};

export const quicksChatSlice = createSlice({
  name: "quicksChat",
  initialState,
  reducers: {
    setIsChatOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatOpen = action.payload;
    },
    setChatId: (state, action: PayloadAction<any>) => {
      state.chatId = action.payload;
    },
  },
});

export const { setIsChatOpen, setChatId } = quicksChatSlice.actions;

export default quicksChatSlice.reducer;
