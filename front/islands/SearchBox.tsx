import { PageInfo, SearchIcon } from "../components/mod.ts";

export const SearchBox = () => {
  return (
    <div className="search-box-wrapper">
      <form className="search-form" onClick={(event) => event.preventDefault()}>
        <input placeholder="جستجو" />
        <button>
          <SearchIcon />
        </button>
      </form>
      <PageInfo title="تعداد‌:" info="۸" />
      <PageInfo title="صفحات‌:" info="۱/۱" />
      <div>date Picker</div>
    </div>
  );
};
