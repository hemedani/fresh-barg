import { ActFn } from "deps";
import { form } from "../../../../mod.ts";
export const updateFormFn: ActFn = async (body) => {

  const {
    set: {
      _id,
      title,
      isActive
    },
    get,
  } = body.details;
  console.log('============= isActive ============ : ', isActive);
  return await form.updateById({
    _id,
    update: {
      $set: {
        title,
        isActive
      },
    },
    get,
  });
};
