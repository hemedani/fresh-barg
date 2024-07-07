import { signal } from '@preact/signals';
import { DeepPartial, letterSchema } from "../../../../back/declarations/selectInp.ts";
import { AddLetterGet, AddLetterSet, addLetter } from "./addLetter.ts";
import { UpdateLetterGet, UpdateLetterSet, updateLetter } from "./updateLetter.ts";
import { GetLetterGet, GetLetterSet, getLetter } from "./getLetter.ts";
import { GetLettersGet, GetLettersSet, getLetters } from "./getLetters.ts";


export type Letter = DeepPartial<letterSchema>;
export const letter = signal<Letter>({});
export const letters = signal<Letter[]>([]);

export const createLetterState = () => {
  return {
    letter, letters,
    addLetter: async (set: AddLetterSet, get: AddLetterGet) => {
      await addLetter(letters, set, get)
    },
    updateLetter: async (set: UpdateLetterSet, get: UpdateLetterGet) => {
      await updateLetter(letters, set, get)
    },
    getLetter: async (set: GetLetterSet, get: GetLetterGet) => {
      await getLetter(letters, set, get)
    },
    getLetters: async (set: GetLettersSet, get: GetLettersGet) => {
      await getLetters(letters, set, get)
    }
  }
}





