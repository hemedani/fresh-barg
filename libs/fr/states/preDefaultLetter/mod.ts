
import { signal } from '@preact/signals';
import { DeepPartial, preDefLetterSchema } from "../../../../back/declarations/selectInp.ts";
import { AddPreDefLetterGet, AddPreDefLetterSet, addPreDefLetter } from "./addPreLetter.ts";
import { UpdatePreDefLetterGet, UpdatePreDefLetterSet, updatePreDefLetter } from "./updatePreDefLetter.ts";
import { GetPreDefLetterGet, GetPreDefLetterSet, getPreDefLetter } from "./getPreDefLetter.ts";
import { RemovePreDefLetterGet, RemovePreDefLetterSet, removePreDefLetter } from "./removePreDefLetter.ts";
import { GetPreDefLettersGet, GetPreDefLettersSet, getPreDefLetters } from "./getPreDefLetters.ts";





export type PreDefaultLetter = DeepPartial<preDefLetterSchema>;
export const preDefLetter = signal<PreDefaultLetter>({});
export const preDefLetters = signal<PreDefaultLetter[]>([]);

export const createPreDefLetterState = () => {
  return {
    preDefLetter,
    preDefLetters,
    addPreDefLetter: async (set: AddPreDefLetterSet, get: AddPreDefLetterGet) => await addPreDefLetter(preDefLetters, set, get),
    updatePreDefLetter: async (set: UpdatePreDefLetterSet, get: UpdatePreDefLetterGet) => await updatePreDefLetter(preDefLetters, set, get),
    getPreDefLetter: async (set: GetPreDefLetterSet, get: GetPreDefLetterGet) => await getPreDefLetter(preDefLetters, set, get),
    removePreDefLetter: async (set: RemovePreDefLetterSet, get: RemovePreDefLetterGet) => await removePreDefLetter(preDefLetters, set, get),
    getPreDefLetters: async (set: GetPreDefLettersSet, get: GetPreDefLettersGet) => await getPreDefLetters(preDefLetters, set, get)
  }
}