import { LetterItem } from "../mod.ts";

interface LettersProps {
  flex?: number;
}

export const Letters = ({ flex }: LettersProps) => {
  return (
    <div className="letters-wrapper" style={{ flex: flex }}>
      <LetterItem />
    </div>
  );
};
