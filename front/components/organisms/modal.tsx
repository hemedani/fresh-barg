import { FunctionComponent } from "preact";
import { InputField, ProvinceIcon } from "../mod.ts";
import { Card } from "./Card.tsx";
import { Signal } from "@preact/signals";

interface ModalProps {
  cardTitle?: string;
  isOpen: Signal<boolean>;
}

export const Modal: FunctionComponent<ModalProps> = ({ isOpen }) => {
  return (
    <div
      className="modal"
      style={{ display: isOpen.value ? "flex" : "none" }}
      onClick={(event) => {
        /*
         * 	@LOG @DEBUG @INFO
         * 	This log written by ::==> {{ `` }}
         *
         * 	Please remove your log after debugging
         */
        console.log(" ============= ");
        console.group("event ------ ");
        console.log();
        console.info({ event }, " ------ ");
        console.log();
        console.groupEnd();
        console.log(" ============= ");
        isOpen.value = false;
      }}
    >
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
