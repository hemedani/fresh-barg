import { ComponentChildren, FunctionComponent } from "preact";

interface ButtonProps {
  children: ComponentChildren;
  className?: string;
  type?: string;
  disabled?: true;
}
export const Button: FunctionComponent<ButtonProps> = (
  { children, className, type, disabled },
) => {
  return (
    <button
      disabled={true && disabled}
      type={type}
      className={`default-btn ${className}`}
    >
      {children}
    </button>
  );
};
