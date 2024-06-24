import { ComponentChildren, FunctionComponent } from "preact";

type PageItemProps = {
  children: ComponentChildren;
};

export const PageItem: FunctionComponent<PageItemProps> = ({ children }) => {
  return <div className="flex">{children}</div>;
};
