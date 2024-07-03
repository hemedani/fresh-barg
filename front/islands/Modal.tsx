import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Card, InputField, ProvinceIcon } from "../components/mod.ts";

interface ModalProps {
  cardTitle?: string;
  toggleModal: Signal<boolean>;
  err: null | string;
}

export const Modal: FunctionComponent<ModalProps> = ({ toggleModal, err }) => {
  return (
    <div
      className="modal"
      style={{ display: toggleModal.value ? "flex" : "none" }}
      onClick={(event) => {
        event.stopPropagation();
        toggleModal.value = false;
      }}
    >
      <Card
        cardIcon={<ProvinceIcon />}
        cardTitle="افزودن استان جدید "
      >
        <form className="add-province-form" method="post">
          <InputField title="نام استان" htmlFor="province-name" name="name" />
          <InputField
            title="نام استان به انگلیسی"
            htmlFor="province-name-en"
            name="enName"
          />
          <InputField
            title="مخفف نام استان"
            htmlFor="province-name-abb"
            name="abb"
          />
          <button className="forms-btn" type="submit">ایجاد استان</button>
        </form>
        {err && <span>{err}</span>}
      </Card>
    </div>
  );
};
