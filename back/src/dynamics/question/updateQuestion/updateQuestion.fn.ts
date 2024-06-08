import { ActFn } from "deps";
import { question } from "../../../../mod.ts";
export const updateQuestionFn: ActFn = async (body) => {

  const {
    set: {
      _id,
      title,
      isActive
    },
    get,
  } = body.details;
  console.log('============= isActive ============ : ', isActive);//TODO
  return await question.updateById({
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
