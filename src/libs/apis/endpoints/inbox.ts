import { IInboxData } from "@/interfaces/apis/inbox";
import { baseApi } from "../config/base-query";

export const inboxApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints: (builder) => {
    return {
      getQuicksInbox: builder.query<IInboxData[], void>({
        query: () => ({
          method: "GET",
          url: "/inbox",
          cache: "no-cache",
        }),
      }),
    };
  },
});

export const { useGetQuicksInboxQuery } = inboxApi;
