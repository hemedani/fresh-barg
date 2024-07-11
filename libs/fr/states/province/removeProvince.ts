import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { provinces } from "./mod.ts";

export type RemoveProvinceSet = ReqType["main"]["province"]["removeProvince"]["set"];
export type RemoveProvinceGet = DeepPartial<
  ReqType["main"]["province"]["removeProvince"]["get"]
>;

export const removeProvince = async (
  signalInp: typeof provinces,
  set: RemoveProvinceSet,
  get: RemoveProvinceGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "province",
    act: "removeProvince",
    details: {
      set,
      get,
    },
  }, { token });

  if (getData.success) {
    signalInp.value = {
      loader: false,
      err: null,
      data: signalInp.value.data.filter((province) =>
        province?._id !== getData.body._id
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
