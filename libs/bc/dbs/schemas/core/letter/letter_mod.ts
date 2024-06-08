import {
  array,
  boolean,
  date,
  number,
  object,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";
import { positionPure } from "../position/position_mod.ts";
import { userPure } from "../user/user_mod.ts";

export const letterPure = {
  author: object(userPure),
  sender: object(positionPure),
  recievers: object(positionPure),
  number: number(),
  subject: string(),
  // viewed : array(userAndPosition),
  created_at: optional(date()),
  updated_at: optional(date()),
  delivered: optional(boolean()),
  is_end: optional(
    object({
      text: string(), // text || des ??
      done: boolean(),
    }),
  ),
  // attachment : file,
  tags: array(string()),
  leed: string(),
  content: string(),
  // reffers : array(reffer),
};

const letterRelations = {
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      letters: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  unit: {
    schemaName: "unit",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      letters: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  readByUsers: {
    schemaName: "user",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelations: {
      readedLetter: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  readByPositions: {
    schemaName: "position",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelations: {
      readedLetter: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
};

// const letterOutRel: Record<string, OutRelation> = {
//   // reffers: {
//   //   schemaName: "reffer",
//   //   number: 50,
//   //   sort: { type: "objectId", field: "_id", order: "desc" },
//   // },
// };

export const letters = () =>
  coreApp.odm.newModel("letter", letterPure, letterRelations, {
    createIndex: {
      indexSpec: { subject: "text", leed: "text", content: "text" },
    },
  });
