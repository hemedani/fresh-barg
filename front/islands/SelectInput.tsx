import { FunctionComponent } from "preact";
import { ChevronDownIcon } from "../components/mod.ts";
import { useSignal } from "@preact/signals";

interface SelectInputProps {
  title: string;
  htmlFor: string;
  placeholder?: string;
  type?: string;
}

export const SelectInput: FunctionComponent<SelectInputProps> = (
  { title, htmlFor, placeholder, type },
) => {
  const selectActive = useSignal(false);
  return (
    <div className="select-inputs">
      <label htmlFor={htmlFor}>{title}</label>
      <div
        className="select-wrapper"
        onClick={() => selectActive.value = !selectActive.value}
      >
        <input id={htmlFor} placeholder={placeholder} type={type} />
        <ChevronDownIcon />
        <div
          className={`inputs-options ${
            selectActive.value ? "select-active" : ""
          }`}
        >
          no selected yet.
        </div>
      </div>
    </div>
  );
};
