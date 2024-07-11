import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { provinces } from "./mod.ts";

export type GetProvincesSet = DeepPartial<
  ReqType["main"]["province"]["getProvinces"]["set"]
>;
export type GetProvincesGet = DeepPartial<
  ReqType["main"]["province"]["getProvinces"]["get"]
>;

export const getProvinces = async (
  signalInp: typeof provinces,
  set: GetProvincesSet,
  get: GetProvincesGet,
  token: string,
  added?: boolean,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "province",
    act: "getProvinces",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: added ? [...signalInp.value.data, ...getData.body] : getData.body,
    };
  } else {
    signalInp.value = {
      ...signalInp.value,
      err: getData.body.message,
      loader: false,
    };
  }
  return getData;
};
