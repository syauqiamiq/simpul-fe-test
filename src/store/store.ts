import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../libs/apis/config/base-query";
import quicksButtonSlice from "./slices/quicks-button-slice";
import quicksChatSlice from "./slices/quicks-chat-slice";
import quicksTaskSlice from "./slices/quicks-task-slice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quicksButton: quicksButtonSlice,
    quicksChat: quicksChatSlice,
    quicksTask: quicksTaskSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
