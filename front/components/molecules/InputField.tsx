import { FunctionComponent } from "preact";

interface InputFieldProps {
  title?: string;
  htmlFor?: string;
  placeholder?: string;
  type?: string;
}

export const InputField: FunctionComponent<InputFieldProps> = (
  { title, htmlFor, placeholder, type },
) => {
  return (
    <div className="group-inputs">
      {htmlFor && <label htmlFor={htmlFor}>{title}</label>}
      <input id={htmlFor} placeholder={placeholder} type={type} min={0} />
    </div>
  );
};
