import { FunctionComponent } from "preact";

interface PageInfoProps {
  title: string;
  info: string | number;
}

export const PageInfo: FunctionComponent<PageInfoProps> = ({ title, info }) => {
  return (
    <div className="page-info">
      <span className="page-header-title">{title}</span>
      <span className="page-header-info">{info}</span>
    </div>
  );
};
