import { ComponentChildren, FunctionComponent } from "preact";
import { Button } from "../mod.ts";

interface SettingListProp {
  children: ComponentChildren;
  btnText: string;
}

export const SettingList: FunctionComponent<SettingListProp> = (
  { children, btnText },
) => {
  return (
    <div className="container setting-list-wrapper">
      <Button className="default-btn">
        {btnText}
      </Button>
      <div className="data-list">
        {children}
      </div>
    </div>
  );
};
