import { RelationDataType, RelationSortOrderType, string } from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";

export const cityPure = {
  name: string(),
  enName: string(),
  abb: string(),
};

const cityRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      cities: {
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

export const cities = () =>
  coreApp.odm.newModel("city", cityPure, cityRelations);
