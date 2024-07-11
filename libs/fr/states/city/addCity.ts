import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { cities } from "./mod.ts";

export type AddCitySet = ReqType["main"]["city"]["addCity"]["set"];
export type AddCityGet = DeepPartial<ReqType["main"]["city"]["addCity"]["get"]>;

export const addCity = async (
  signalInp: typeof cities,
  set: AddCitySet,
  get: AddCityGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "city",
    act: "addCity",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    signalInp.value = {
      err: null,
      loader: false,
      data: [getData.body, ...signalInp.value.data],
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
