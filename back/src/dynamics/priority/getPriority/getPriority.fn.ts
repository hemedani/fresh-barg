import { ActFn, ObjectId } from "deps";
import { throwError } from "utils/throwError.ts";
import { priority } from "../../../../mod.ts";
export const getPriorityFn: ActFn = async (body) => {
  const {
    set: {
      _id,
    },
    get,
  } = body.details;
  const foundedPriority = await priority.findOne({
    filters: { _id: new ObjectId(_id) },
    projection: get,
  });
  !foundedPriority && throwError("priority not exist");
  return foundedPriority;

  // console.log("foundedPriority on get method", foundedpriority);
};
