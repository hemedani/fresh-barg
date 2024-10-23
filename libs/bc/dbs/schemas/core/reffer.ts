import {
  array,
  boolean,
  date,
  enums,
  number,
  object,
  optional,
  RelationDataType,
  RelationSortOrderType,
  string,
} from "../../deps.ts";
import { coreApp } from "../../../../../back/mod.ts";

const refferTypes = enums(["inUnit", "inOrg", "outOrg"]);

const refferPure = {
  // maybe we want to keep embedded version of postion pure not relational based of it
  // refferer: object(positionPure),
  // reffered: object(positionPure),
  number: number(),
  delivered: boolean(),
  type: refferTypes,
  created_at: optional(date()),
  updated_at: optional(date()),
  deadline: optional(date()),
  isMoving: boolean(),
  description: optional(object({ text: string(), viewed: boolean() })),
  reply: optional(
    array(object({
      _id: string(),
      text: string(),
      viewed: boolean(),
      /* attach: [file] */
    })),
  ),
  // attachment : [file],
  // priority :
};

const refferRelations = {
  letter: {
    schemaName: "letter",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      reffers: {
        type: "multiple" as RelationDataType,
        limit: null,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  refferer: {
    schemaName: "position",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      sendReffer: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  reffered: {
    schemaName: "position",
    type: "single" as RelationDataType,
    optional: false,
    relatedRelations: {
      recievedReffer: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  readByUsers: {
    schemaName: "user",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelations: {
      readedReffers: {
        type: "multiple" as RelationDataType,
        limit: 50,
        sort: {
          field: "_id",
          order: "desc" as RelationSortOrderType,
        },
      },
    },
  },
  readByPositions: {
    schemaName: "position",
    type: "multiple" as RelationDataType,
    optional: true,
    relatedRelations: {
      readedReffers: {
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

// const refferOutRel = {};

export const reffers = () =>
  coreApp.odm.newModel("reffer", refferPure, refferRelations);
