import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { cities } from "./mod.ts";

export type RemoveCitySet = ReqType["main"]["city"]["removeCity"]["set"];
export type RemoveCityGet = DeepPartial<
  ReqType["main"]["city"]["removeCity"]["get"]
>;

export const removeCity = async (
  signalInp: typeof cities,
  set: RemoveCitySet,
  get: RemoveCityGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "city",
    act: "removeCity",
    details: {
      set,
      get,
    },
  }, { token });

  if (getData.success) {
    signalInp.value = {
      loader: false,
      err: null,
      data: signalInp.value.data.filter((city) =>
        city?._id !== getData.body._id
      ),
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
