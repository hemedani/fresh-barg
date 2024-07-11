import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { city } from "./mod.ts";

export type GetCitySet = ReqType["main"]["city"]["getCity"]["set"];
export type GetCityGet = DeepPartial<ReqType["main"]["city"]["getCity"]["get"]>;

export const getCity = async (
  signalInp: typeof city,
  set: GetCitySet,
  get: GetCityGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "city",
    act: "getCity",
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
