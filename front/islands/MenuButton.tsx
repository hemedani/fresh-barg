import { FunctionComponent } from "preact";
import { MenuIcon, TimesIcon } from "../components/mod.ts";
import { Signal } from "@preact/signals";

interface MenuButtonProps {
  toggleMenu: Signal<boolean>;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = (
  { toggleMenu },
) => {
  return (
    <button
      className="menu-btn"
      onClick={() => toggleMenu.value = !toggleMenu.value}
    >
      {toggleMenu.value ? <TimesIcon /> : <MenuIcon />}
    </button>
  );
};
