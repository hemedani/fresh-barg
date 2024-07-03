import { FunctionComponent } from "preact";

interface InputFieldProps {
  title?: string;
  htmlFor?: string;
  placeholder?: string;
  type?: string;
  name: string;
}

export const InputField: FunctionComponent<InputFieldProps> = (
  { title, htmlFor, placeholder, type, name },
) => {
  return (
    <div className="group-inputs">
      {htmlFor && <label htmlFor={htmlFor}>{title}</label>}
      <input
        id={htmlFor}
        placeholder={placeholder}
        type={type}
        min={0}
        name={name}
      />
    </div>
  );
};
