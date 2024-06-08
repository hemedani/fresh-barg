import { coreApp } from "../../../../../../back/mod.ts";
import {
  boolean,
  coerce,
  date,
  enums,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
export const userGender = enums(["Male", "Female"]);

export const userPure = {
  first_name: string(),
  last_name: string(),
  phone: string(),
  gender: userGender,
  birth_date: optional(coerce(date(), string(), (value) => new Date(value))),
  personnel_code: string(),
  email: optional(string()),
  is_active: optional(boolean()),
};

const userRelations = {
  province: {
    schemaName: "province",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      users: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  city: {
    schemaName: "city",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      users: {
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
    type: "multiple" as RelationDataType,
    optional: false,
    limit: null,
    relatedRelations: {
      users: {
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
    type: "multiple" as RelationDataType,
    optional: false,
    limit: null,
    relatedRelations: {
      users: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "asc" as RelationSortOrderType,
        },
      },
    },
  },
  position: {
    schemaName: "position",
    type: "multiple" as RelationDataType,
    optional: false,
    relatedRelations: {
      user: {
        type: "single" as RelationDataType,
      },
    },
  },
};

// const userOutRel: Record<string, InRelation> = {};

export const users = () =>
  coreApp.odm.newModel(
    "user",
    userPure,
    userRelations,
    {
      createIndex: {
        indexSpec: { "phone": 1, "personnel_code": 1, "email": 1 },
        options: { unique: true },
      },
    },
  );
