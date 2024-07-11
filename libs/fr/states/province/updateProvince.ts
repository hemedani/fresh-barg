import {
  DeepPartial,
  ReqType,
} from "../../../../back/declarations/selectInp.ts";
import { bargApi } from "../../mod.ts";
import { provinces } from "./mod.ts";

export type UpdateProvinceSet = ReqType["main"]["province"]["updateProvince"]["set"];
export type UpdateProvinceGet = DeepPartial<
  ReqType["main"]["province"]["updateProvince"]["get"]
>;

export const updateProvince = async (
  signalInp: typeof provinces,
  set: UpdateProvinceSet,
  get: UpdateProvinceGet,
  token: string,
) => {
  signalInp.value = {
    ...signalInp.value,
    loader: true,
    err: null,
  };
  const getData = await bargApi.send({
    model: "province",
    act: "updateProvince",
    details: {
      set,
      get,
    },
  }, { token });
  if (getData.success) {
    const updateProvinceIdx = signalInp.value.data.findIndex((province) =>
      province?._id === getData.body._id
    );
    signalInp.value = {
      err: null,
      loader: false,
      data: [
        ...signalInp.value.data.splice(0, updateProvinceIdx),
        getData.body,
        ...signalInp.value.data.splice(updateProvinceIdx + 1),
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
