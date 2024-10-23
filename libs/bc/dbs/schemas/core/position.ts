import { coreApp } from "../../../../../back/mod.ts";
import {
  array,
  enums,
  objectIdValidation,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../deps.ts";

export const PanelsEnum = enums(["darya", "johar", "nameh", "anbar", "bita"]);
export const FeaturesEnum = enums([
  "create unit",
  "create chart",
  "read letters",
  "create letters",
  "reffer letters",
  "add staff",
  "add position",
  "add position to user",
  "read positions",
  "edit org",
  "edit unit",
]);
export const LevelsEnum = enums([
  "Ghost",
  "Orghead",
  "Unithead",
  "Staff",
]);

export const positionPure = {
  _id: optional(objectIdValidation),
  name: string(),
  panel: PanelsEnum,
  features: array(FeaturesEnum),
  level: LevelsEnum,
};

const positionRelations = {
  org: {
    schemaName: "org",
    type: "single" as RelationDataType,
    optional: true,
    relatedRelations: {
      positions: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  unit: {
    schemaName: "unit",
    type: "single" as RelationDataType,
    optional: true,
    relatedRelations: {
      positions: {
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

// const positionOutRel: Record<string, OutRelation> = {};

export const positions = () =>
  coreApp.odm.newModel("position", positionPure, positionRelations);
