import { IInboxData } from "@/interfaces/apis/inbox";
import { baseApi } from "../config/base-query";
import { IChatRoom } from "@/interfaces/apis/chat";

export const chatRoomApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints: (builder) => {
    return {
      getQuicksChatRoomById: builder.query<IChatRoom, { id: number | any }>({
        query: ({ id }: { id: number | any }) => ({
          method: "GET",
          url: `/chat-room/${id}`,
          cache: "no-cache",
        }),
      }),
    };
  },
});

export const { useGetQuicksChatRoomByIdQuery } = chatRoomApi;
