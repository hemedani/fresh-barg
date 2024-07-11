import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { province } from "./mod.ts";

export type GetProvinceSet = ReqType["main"]["province"]["getProvince"]["set"];
export type GetProvinceGet = DeepPartial<ReqType["main"]["province"]["getProvince"]["get"]>;

export const getProvince = async (
  signalInp: typeof province,
  set: GetProvinceSet,
  get: GetProvinceGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "province",
    act: "getProvince",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: getData.body,
    };
  } else {
    signalInp.value = {
      ...signalInp.value,
      err: getData.body,
      loader: false,
    };
  }
  return getData;
};
