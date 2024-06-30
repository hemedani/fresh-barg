import { SearchBox } from "../../islands/SearchBox.tsx";
import { AddIcon } from "../mod.ts";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a className="create-letter-btn">
          ایجاد‌نامه‌جدید
          <AddIcon />
        </a>
        <SearchBox />
      </div>
    </header>
  );
};
