import {
  boolean,
  date,
  number,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";

export const formPure = {
  order: number(),
  title: string(),
  isActive: boolean(),

  created_at: optional(date()),
  updated_at: optional(date()),
};

const formRelations = {
  questions: {
    schemaName: "question",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelation: {
      forms: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },

  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: true,
    relatedRelation: {
      forms: {
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
    optional: true,
    relatedRelations: {
      forms: {
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

export const forms = () =>
  coreApp.odm.newModel("form", formPure, formRelations);
