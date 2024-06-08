import { string } from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";

export const provincePure = {
  name: string(),
  enName: string(),
  abb: string(),
};

const provinceRelations = {};

// export const provinceOutRel: Record<string, OutRelation> = {
//   cities: {
//     schemaName: "city",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   orgs: {
//     schemaName: "org",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
//   units: {
//     schemaName: "unit",
//     number: 50,
//     sort: { type: "objectId", field: "_id", order: "desc" },
//   },
// };

export const provinces = () =>
  coreApp.odm.newModel(
    "province",
    provincePure,
    provinceRelations,
  );
