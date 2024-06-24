import { FunctionComponent } from "preact";
import { SearchBox } from "../../mod.ts";

type HeaderSearchBoxProps = {
  flex?: number;
};

export const HeaderSearchBox: FunctionComponent<HeaderSearchBoxProps> = (
  { flex },
) => {
  return (
    <div className="header-search-box" style={{ flex: flex }}>
      <SearchBox />
      <div className="number-letter">
        <span>تعداد :</span>
        <span>8</span>
      </div>
      <div className="pagination">
        <span>صفحات</span>
        <span>1/1</span>
      </div>
      <div className="date">
        {/* <ExampleDatePicker /> */}
      </div>
    </div>
  );
};
