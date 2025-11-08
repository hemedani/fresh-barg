// components/atoms/Button.tsx
export function Button({
  children,
  onClick,
  type = "button",
  className
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className: string
}) {

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
