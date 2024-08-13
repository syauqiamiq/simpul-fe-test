import { IInboxData } from "@/interfaces/apis/inbox";
import { baseApi } from "../config/base-query";
import { ITask } from "@/interfaces/apis/task";

export const taskApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints: (builder) => {
    return {
      getQuicksTask: builder.query<ITask[], { filter: string }>({
        query: ({ filter }) => ({
          method: "GET",
          url: `/task${filter === "ALL" ? "" : `?taskType=${filter}`}`,
          cache: "no-cache",
        }),
      }),
    };
  },
});

export const { useGetQuicksTaskQuery } = taskApi;
