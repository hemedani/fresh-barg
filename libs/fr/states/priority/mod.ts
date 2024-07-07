import { signal } from '@preact/signals';
import { DeepPartial, prioritySchema } from "../../../../back/declarations/selectInp.ts";
import { AddPriorityGet, AddPrioritySet, addPriority } from './addPriority.ts';
import { UpdatePriorityGet, UpdatePrioritySet, updatePriority } from "./updatePriority.ts";
import { GetPriorityGet, GetPrioritySet, getPriority } from "./getPriority.ts";



export type Priority = DeepPartial<prioritySchema>;
export const priority = signal<Priority>({});
export const priorities = signal<Priority[]>([]);



export const createPriorityState = () => {
  return {
    priority,
    priorities,
    addPriority: async (set: AddPrioritySet, get: AddPriorityGet) => await addPriority(priorities, set, get),
    updatePriority: async (set: UpdatePrioritySet, get: UpdatePriorityGet) => await updatePriority(priorities, set, get),
    getPriority: async (set: GetPrioritySet, get: GetPriorityGet) => await getPriority(priorities, set, get)
  }

}