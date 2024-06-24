import { AsteriskIcon } from "../mod.ts";

// import { FormErrorMessage } from "../../atoms/error-message/FormErrorMessage";

interface IInputFieldProps {
  onChange?: () => void;
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  labelText?: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  // registerName: keyof TFieldValues;
  // errors?: Partial<DeepMap<TFieldValues, FieldError>>;
  // rules?: RegisterOptions;
}

export const InputField = ({
  onChange,
  type,
  value,
  name,
  placeholder,
  labelText,
  required,
  htmlFor,
  className,
  // registerName,
  // errors,
  // rules,
}: IInputFieldProps) => {
  // const { register } = useForm();
  return (
    <>
      {labelText && (
        <div>
          <label htmlFor={htmlFor}>{labelText}</label>
          {required ? <AsteriskIcon /> : null}
        </div>
      )}

      <input
        // {...register(registerName as string)}
        onChange={onChange}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`input-style ${className ? className : ""}`}
      />
      {
        /* <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <FormErrorMessage text={message} />}
      /> */
      }
    </>
  );
};
