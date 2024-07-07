import { signal } from '@preact/signals';
import { DeepPartial, orgSchema } from "../../../../back/declarations/selectInp.ts";
import { GetOrgsSet, getOrgs, GetOrgsGet } from "./getOrgs.ts";
import { GetOrgGet } from "./getOrg.ts";
import { GetOrgSet } from "./getOrg.ts";
import { getOrg } from "./getOrg.ts";
import { AddOrgGet, AddOrgSet, addOrg } from "./addOrg.ts";
import { UpdateOrgGet, UpdateOrgSet, updateOrg } from "./updateOrg.ts";
import { RemoveOrgsGet, RemoveOrgsSet, removeOrg } from "./removeOrg.ts";


export type Org = DeepPartial<orgSchema>;
export const org = signal({});
export const orgs = signal<Org[]>([])

export const createOrgsState = () => {
  return {
    org, orgs,
    getOrgs: async (set: GetOrgsSet, get: GetOrgsGet) => await getOrgs(orgs, set, get),
    getOrg: async (set: GetOrgSet, get: GetOrgGet) => await getOrg(orgs, set, get),
    addOrg: async (set: AddOrgSet, get: AddOrgGet) => await addOrg(orgs, set, get),
    updateOrg: async (set: UpdateOrgSet, get: UpdateOrgGet) => await updateOrg(orgs, set, get),
    remove: async (set: RemoveOrgsSet, get: RemoveOrgsGet) => await removeOrg(orgs, set, get)

  }
}