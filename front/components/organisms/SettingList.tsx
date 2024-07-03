import { ComponentChildren, FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { IslandButton } from "../../islands/IslandButton.tsx";

interface SettingListProp {
  children: ComponentChildren;
  btnText: string;
  toggleModal: Signal<boolean>;
}

export const SettingList: FunctionComponent<SettingListProp> = (
  { children, btnText, toggleModal },
) => {
  return (
    <div className="container setting-list-wrapper">
      <IslandButton
        toggleModal={toggleModal}
        btnText={btnText}
      />
      <div className="data-list">
        {children}
      </div>
    </div>
  );
};
