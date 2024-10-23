import { coreApp } from "../../../../../back/mod.ts";
import {
  RelationDataType,
  RelationSortOrderType,
  string,
  TRelation,
} from "../../deps.ts";

export const priorityPure = {
  name: string(),
};

const priorityRelations: Record<string, TRelation> = {
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      priorities: {
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

// const priorityOutRel = {};

export const priorities = () =>
  coreApp.odm.newModel("priority", priorityPure, priorityRelations);
