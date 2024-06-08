import {
  boolean,
  date,
  enums,
  number,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";

export const QuestionType = enums([
  "Text",
  "LongText",
  "Checkbox",
  "MultiSelect",
  "Image",
  "Radio",
]);
export const questionPure = {
  order: number(), //TODO: generate from question.lenght
  label: string(),
  isActive: boolean(),
  questionType: QuestionType,

  created_at: optional(date()),
  updated_at: optional(date()),
};

const questionRelations = {
  //TODO: GET from context
  // author: {
  //   schemaName: 'user',
  //   type: 'single' as RelationDataType,
  //   optional: false,
  // },

  forms: {
    schemaName: "form",
    type: "multiple" as RelationDataType,
    optional: false,
    relatedRelation: {
      questions: {
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
    optional: false,
  },

  unit: {
    schemaName: "unit",
    type: "single" as RelationDataType,
    optional: false,
  },
};

export const questions = () =>
  coreApp.odm.newModel("question", questionPure, questionRelations);
