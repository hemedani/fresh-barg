import { signal } from '@preact/signals';
import { DeepPartial, orgSchema, } from "../../../../back/declarations/selectInp.ts";
import { GetOrgGet, GetOrgSet, getOrg } from "./getOrg.ts";
import { AddOrgGet, addOrgSet, addOrg } from "./addOrg.ts";
import { UpdateOrgGet, UpdateOrgSet, updateOrg } from "./updateOrg.ts";
import { RemoveOrgGet, RemoveOrgSet, removeOrg } from "./removeOrg.ts";
import { BargStates } from "../../mod.ts";
import { GetOrgsGet, GetOrgsSet, getOrgs } from "./getOrgs.ts";


export type Org = DeepPartial<orgSchema>;
export const org = signal<BargStates<Org>>({
  data: {},
  loader: false,
  err: null,
});

export const orgs = signal<BargStates<Org[]>>({
  data: [],
  loader: false,
  err: null,
});

export const createOrgsState = () => {
  return {
    org, orgs,
    getOrgs: async (set: GetOrgsSet, get: GetOrgsGet, token: string, added?: boolean) => await getOrgs(orgs, set, get, token, added),
    getOrg: async (set: GetOrgSet, get: GetOrgGet, token: string) => await getOrg(orgs, set, get, token),
    addOrg: async (set: addOrgSet, get: AddOrgGet, token: string) => await addOrg(orgs, set, get, token),
    updateOrg: async (set: UpdateOrgSet, get: UpdateOrgGet, token: string) => await updateOrg(orgs, set, get, token),
    remove: async (set: RemoveOrgSet, get: RemoveOrgGet, token: string) => await removeOrg(orgs, set, get, token)

  }
}