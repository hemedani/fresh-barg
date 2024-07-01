import { InputField } from "../mod.ts";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="add-province-wrapper">
        <h2>ایجاد استان جدید</h2>
        <form className="add-province-form">
          <InputField title="نام استان" htmlFor="province-name" />
          <InputField title="نام استان به انگلیسی" htmlFor="province-name-en" />
          <InputField title="مخفف نام استان" htmlFor="province-name-abb" />
          <button className="forms-btn">ایجاد استان</button>
        </form>
      </div>
    </div>
  );
};
