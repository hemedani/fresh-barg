import { SearchIcon } from "../mod.ts";

export const SearchBox = () => {
  return (
    <div className="wrapper">
      <div className="search-box">
        <input className="input-style" />
      </div>
      <div className="icon-box">
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};
