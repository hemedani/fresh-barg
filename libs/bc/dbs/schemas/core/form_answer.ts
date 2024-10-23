import {
  boolean,
  date,
  number,
  optional,
  RelationDataType,
  string,
} from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";
import { RelationSortOrderType } from "../../deps.ts";

export const formAnswerPure = {
  order: number(),
  title: string(),
  is_approved: optional(boolean()),

  created_at: optional(date()),
  updated_at: optional(date()),
};

const formAnswerRelations = {
  questionAnswers: {
    schemaName: "questionAnswer",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelation: {
      formAnswer: {
        type: "single" as RelationDataType,
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
    optional: false,
  },

  unit: {
    schemaName: "unit",
    type: "single" as RelationDataType,
    optional: false,
  },
};

export const formAnswers = () =>
  coreApp.odm.newModel("formAnswer", formAnswerPure, formAnswerRelations);
