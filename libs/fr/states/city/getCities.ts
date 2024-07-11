import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { cities } from "./mod.ts";

export type GetCitiesSet = DeepPartial<
  ReqType["main"]["city"]["getCities"]["set"]
>;
export type GetCitiesGet = DeepPartial<
  ReqType["main"]["city"]["getCities"]["get"]
>;

export const getCities = async (
  signalInp: typeof cities,
  set: GetCitiesSet,
  get: GetCitiesGet,
  token: string,
  added?: boolean,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "city",
    act: "getCities",
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
