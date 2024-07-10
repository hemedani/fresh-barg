import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { provinces } from "./mod.ts";

export type AddProvinceSet = ReqType["main"]["province"]["addProvince"]["set"];
export type AddProvinceGet = DeepPartial<
  ReqType["main"]["province"]["addProvince"]["get"]
>;

export const addProvince = async (
  prs: typeof provinces,
  set: AddProvinceSet,
  get: AddProvinceGet,
  token: string,
) => {
  const addProv = await bargApi.send({
    model: "province",
    act: "addProvince",
    details: {
      set,
      get,
    },
  }, { token });

  if (addProv.success) {
    prs.value = {
      err: null,
      loader: false,
      data: [addProv.body, ...prs.value.data],
    };
  } else {
    prs.value = {
      ...prs.value,
      err: addProv.body,
      loader: false,
    };
  }

  return addProv;
};
