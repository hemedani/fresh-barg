import { ComponentChildren, FunctionComponent } from "preact";

interface ButtonProps {
  children: ComponentChildren;
  className?: string;
  type?: string;
  disabled?: true;
  onClick?: () => any;
}

export const Button: FunctionComponent<ButtonProps> = (
  { children, className, type, disabled, onClick },
) => {
  return (
    <button
      disabled={true && disabled}
      type={type}
      className={`default-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
