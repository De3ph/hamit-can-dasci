import { createApi } from "@reduxjs/toolkit/query/react";
import { sanityBaseQuery } from "./postQueryFn";
import { getAllPostQuery } from "querys";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: sanityBaseQuery({ baseQuery: getAllPostQuery }),
});
