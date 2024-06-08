import { ActFn, ObjectId } from "deps";
import { priority } from "../../../../mod.ts";

export const addPriorityFn: ActFn = async (body) => {
  const {
    set: {
      name,
      orgId,
    },
    get,
  } = body.details;

  return await priority.insertOne({
    doc: {
      name,
    },
    relations: {
      org: {
        _ids: new ObjectId(orgId),
        relatedRelations: {
          priorities: true,
        },
      },
    },
    projection: get,
  });
};
