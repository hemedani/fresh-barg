import { lesanApi } from "../../back/declarations/selectInp.ts";

export const bargApi = lesanApi({ URL: "http://localhost:1377/lesan" });

export * from "./states/mod.ts";
