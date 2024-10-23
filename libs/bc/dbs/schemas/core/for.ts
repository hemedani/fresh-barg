import { coreApp } from "../../../../../back/mod.ts";
import { RelationDataType, RelationSortOrderType, string } from "../../deps.ts";

export const forPure = {
  name: string(),
};

const forRelations = {
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      fors: {
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

// const forOutRel = {};

export const fors = () => coreApp.odm.newModel("for", forPure, forRelations);
