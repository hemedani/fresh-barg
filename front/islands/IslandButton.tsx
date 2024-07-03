import { FunctionComponent } from "preact";
import { Button } from "../components/mod.ts";
import { Signal } from "@preact/signals";

interface MenuButtonProps {
  toggleModal: Signal<boolean>;
  btnText: string;
}

export const IslandButton: FunctionComponent<MenuButtonProps> = (
  { toggleModal, btnText },
) => {
  return (
    <Button
      className="default-btn"
      onClick={() => toggleModal.value = true}
    >
      {btnText}
    </Button>
  );
};
