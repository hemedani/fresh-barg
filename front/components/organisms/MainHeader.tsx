import { AddIcon } from "../mod.ts";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <a className="create-letter-btn">
        ایجاد‌نامه‌جدید
        <AddIcon />
      </a>
    </header>
  );
};
