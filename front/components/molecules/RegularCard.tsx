import { FunctionComponent } from "preact";

interface RegularCardProps {
  province: any;
}

export const RegularCard: FunctionComponent<RegularCardProps> = (
  { province },
) => {
  return (
    <div className="regular-card-wrapper">
      <div className="regular-card-info">
        <p className="en-data-value">hamedan-hmd</p>
        <span className="pe-data-value">همدان</span>
      </div>
      <div className="regular-card-btn">
        <button>حذف</button>
        <button>ویرایش</button>
      </div>
    </div>
  );
};
