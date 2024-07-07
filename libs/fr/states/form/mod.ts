import { signal } from '@preact/signals';
import { DeepPartial, formSchema } from "../../../../back/declarations/selectInp.ts";
import { AddFormSet, AddFromGet, addForm } from "./addForm.ts";
import { GetFormSet, GetFormGet, getForm } from "./getForm.ts";
import { GetFormsGet, GetFormsSet } from "./getForms.ts";
import { getForms } from "./getForms.ts";
import { UpdateFormGet, UpdateFormSet, updateForm } from "./updateForm.ts";


export type Form = DeepPartial<formSchema>;
export const form = signal<Form>({});
export const forms = signal<Form[]>([]);


export const createFormState = () => {
  return {
    form,
    forms,
    addForm: async (set: AddFormSet, get: AddFromGet) => await addForm(forms, set, get),
    getForm: async (set: GetFormSet, get: GetFormGet) => await getForm(forms, set, get),
    getForms: async (set: GetFormsSet, get: GetFormsGet) => await getForms(forms, set, get),
    updateForm: async (set: UpdateFormSet, get: UpdateFormGet) => await updateForm(forms, set, get)
  }
}


