import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import {
  DeleteLetter,
  ReceiveLetter,
  SatekIcon,
  SendLetter,
  SidebarItem,
} from "../components/mod.ts";
interface SidebarProps {
  toggleMenu: Signal<boolean>;
}

const itemSidebar = [
  {
    id: 0,
    title: "دریافتی",
    type: "reciver",
    icon: <ReceiveLetter />,
    href: "/",
  },
  {
    id: 1,
    title: "ارسالی",
    type: "sender",
    icon: <SendLetter />,
    href: "/",
  },
  {
    id: 2,
    title: "حذف شده",
    icon: <DeleteLetter />,
    href: "/",
  },
];

export const Sidebar: FunctionComponent<SidebarProps> = ({ toggleMenu }) => {
  return (
    <aside className={`sidebar ${toggleMenu.value ? "active" : ""}`}>
      <div className="container">
        <ul className="sidebar-item">
          <li>
            <a href="/">
              <SatekIcon />
            </a>
          </li>
          {itemSidebar && itemSidebar.map((item) => <SidebarItem {...item} />)}
        </ul>
      </div>
    </aside>
  );
};
