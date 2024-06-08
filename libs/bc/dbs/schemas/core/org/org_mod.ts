import { coreApp } from "../../../../../../back/mod.ts";
import {
  enums,
  number,
  object,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";

const orgPure = {
  name: string(),
  address: string(),
  ownership: enums(["private", "government", "semi-private"]),
  type: enums([
    "service",
    "industrial",
    "trading",
    "technology",
    "financial",
    "healthcare",
  ]),
  location: optional(
    object({
      longitude: number(),
      latitude: number(),
    }),
  ),
  description: string(),
  // icon : ???
};

const orgRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      orgs: {
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
      orgs: {
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

// export const orgOutRel: Record<string, OutRelation> = {
//   users: {
//     schemaName: "user",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   units: {
//     schemaName: "unit",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   positions: {
//     schemaName: "position",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   priorities: {
//     schemaName: "priority",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   preDefLetters: {
//     schemaName: "preDefLetter",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
// };

export const orgs = () => coreApp.odm.newModel("org", orgPure, orgRelations);
