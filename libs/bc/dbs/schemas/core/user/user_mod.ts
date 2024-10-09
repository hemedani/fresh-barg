import { coreApp } from "../../../../../../back/mod.ts";
import {
  boolean,
  coerce,
  date,
  enums,
  number,
  optional,
  pattern,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../../deps.ts";
export const userGender = enums(["Male", "Female"]);

export const mobilePattern = coerce(
  number(),
  string(),
  (value) => parseMobilePhone(value),
);

export const parseMobilePhone = (phone: string) => {
  const mobileRegex = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;
  if (mobileRegex.test(phone)) {
    const parsedPhone = parseFloat(phone).toString();
    if (parsedPhone.startsWith("98")) {
      return parseFloat(parsedPhone);
    } else {
      return parseFloat(`98${parsedPhone}`);
    }
  }
  throw new Error("you should send true iranian phone number");
};

export const userPure = {
  first_name: string(),
  last_name: string(),
  phone: mobilePattern,
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
