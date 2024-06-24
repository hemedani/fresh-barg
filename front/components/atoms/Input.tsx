interface IInputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: () => void;
}
export const Input = (
  { className, placeholder, type, value, onChange }: IInputProps,
) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onInput={onChange}
    />
  );
};
