import {
  date,
  number,
  object,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";
import { QuestionType } from "../mod.ts";

export const questionAnswerPure = {
  order: number(),
  label: string(),
  questionType: QuestionType,

  answer: object({
    content: string(),
    created_at: date(),
    updated_at: date(),
  }),
  reply: object({
    content: string(),
    created_at: date(),
    updated_at: date(),
  }),

  created_at: optional(date()),
  updated_at: optional(date()),
};

const questionAnswerRelations = {
  filler: {
    schemaName: "user",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelation: {
      positions: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },

  formAnswers: {
    schemaName: "formAnswer",
    type: "multiple" as RelationDataType,
    optional: false,
    limit: null,
    relatedRelation: {
      questionAnswers: {
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

export const questionAnswers = () =>
  coreApp.odm.newModel(
    "questionAnswer",
    questionAnswerPure,
    questionAnswerRelations,
  );
