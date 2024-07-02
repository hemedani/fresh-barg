import { FunctionComponent } from "preact";
import { InputField, ProvinceIcon } from "../mod.ts";
import { Card } from "./Card.tsx";

interface ModalProps {
  cardTitle?: string;
}

export const Modal: FunctionComponent<ModalProps> = () => {
  return (
    <div className="modal">
      <Card cardIcon={<ProvinceIcon />} cardTitle="افزودن استان جدید ">
        <form className="add-province-form">
          <InputField title="نام استان" htmlFor="province-name" />
          <InputField title="نام استان به انگلیسی" htmlFor="province-name-en" />
          <InputField title="مخفف نام استان" htmlFor="province-name-abb" />
          <button className="forms-btn">ایجاد استان</button>
        </form>
      </Card>
    </div>
  );
};
