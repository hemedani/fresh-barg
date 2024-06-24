import { FunctionComponent } from "preact";
import { MenuButton } from "../../islands/mod.ts";
import { UserProfile } from "../../islands/UserProfile.tsx";
import { Signal } from "@preact/signals";

interface HeaderProps {
  toggleMenu: Signal<boolean>;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <header>
      <div className="container">
        <MenuButton {...props} />
        <UserProfile />
      </div>
    </header>
  );
};
