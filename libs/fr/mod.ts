import { DeepPartial, lesanApi } from "../../back/declarations/selectInp.ts";

export const bargApi = lesanApi({ URL: "http://localhost:1377/lesan" });

export type BargStates<T> = {
  data: DeepPartial<T>;
  loader: boolean;
  err: string | null;
};

export * from "./states/mod.ts";
