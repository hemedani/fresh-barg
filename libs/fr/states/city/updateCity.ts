import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { cities } from "./mod.ts";

export type UpdateCitySet = ReqType["main"]["city"]["updateCity"]["set"];
export type UpdateCityGet = DeepPartial<
  ReqType["main"]["city"]["updateCity"]["get"]
>;

export const updateCity = async (
  signalInp: typeof cities,
  set: UpdateCitySet,
  get: UpdateCityGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "city",
    act: "updateCity",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    const updateCityIdx = signalInp.value.data.findIndex((city) =>
      city?._id === getData.body._id
    );
    signalInp.value = {
      err: null,
      loader: false,
      data: [
        ...signalInp.value.data.splice(0, updateCityIdx),
        getData.body,
        ...signalInp.value.data.splice(updateCityIdx + 1),
      ],
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
