import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: any;
}

export const SidebarItem: FunctionComponent<SidebarItemProps> = (
  { href, title, icon },
) => {
  return (
    <li>
      <a href={href}>
        <span>{icon}</span>
        <span>{title}</span>
      </a>
    </li>
  );
};
