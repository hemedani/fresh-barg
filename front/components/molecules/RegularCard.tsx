import { FunctionComponent } from "preact";

interface RegularCardProps {
  data: any;
}

export const RegularCard: FunctionComponent<RegularCardProps> = (
  { data },
) => {
  return (
    <div className="regular-card-wrapper">
      <div className="regular-card-info">
        <p className="en-data-value">{data.enName}</p>
        <span className="pe-data-value">{data.name}</span>
      </div>
      <div className="regular-card-btn">
        <button>حذف</button>
        <button>ویرایش</button>
      </div>
    </div>
  );
};
