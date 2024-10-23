import {
  array,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";

export const unitPure = {
  name: string(),
  // children :
  // manager :
  // staffs :
  categories: optional(array(string())),
};

const unitRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      units: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  city: {
    schemaName: "city",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      units: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      units: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
};

// const unitOutRel: Record<string, OutRelation> = {
//   positions: {
//     schemaName: "position",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
// };

export const units = () =>
  coreApp.odm.newModel("unit", unitPure, unitRelations);
