import {
  number,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
import { coreApp } from "../../../../../../back/mod.ts";

const preDefLetterPure = {
  // id ?
  title: string(),
  description: string(),
  number: number(),
};
const preDefLetterRelations = {
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      preDefLetters: {
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

// const preDefLetterOutRel = {};

export const preDefLetters = () =>
  coreApp.odm.newModel("preDefLetter", preDefLetterPure, preDefLetterRelations);
