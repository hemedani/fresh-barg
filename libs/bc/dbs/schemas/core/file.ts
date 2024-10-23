import {
  number,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";

export const pureFile = {
  name: string(),
  type: string(),
  size: number(),
};

export const fileRelations = {
  uploader: {
    schemaName: "user",
    optional: false,
    type: "single" as RelationDataType,
    relatedRelations: {
      uploadedAssets: {
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

export const files = () =>
  coreApp.odm.newModel("file", pureFile, fileRelations);
