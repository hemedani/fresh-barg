import { useSignal } from "@preact/signals";
import { Layout, RegularCard, SettingList } from "../../components/mod.ts";
import { Modal } from "../../islands/Modal.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { createAppState } from "@libs";
import { getCookies } from "$std/http/cookie.ts";
import {
  DeepPartial,
  provinceSchema,
} from "../../../back/declarations/selectInp.ts";

interface IProvincesPage {
  provinces: DeepPartial<provinceSchema[]>;
  modal: boolean;
  err: string | null;
}

export const handler: Handlers<IProvincesPage> = {
  async GET(req, ctx) {
    const states = createAppState();

    const token = getCookies(req.headers).token;

    const provinces = await states.province.getProvinces(
      { page: 1, limit: 20 },
      { _id: 1, enName: 1, name: 1, abb: 1 },
      token,
    );

    return await ctx.render({ provinces, err: null, modal: false });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const enName = form.get("enName")?.toString();
    const abb = form.get("abb")?.toString();

    const states = createAppState();

    const token = getCookies(req.headers).token;

    const addedProvince = await states.province.addProvince(
      { name, enName, abb },
      { _id: 1, enName: 1, name: 1, abb: 1 },
      token,
    );

    if (addedProvince.success) {
      const headers = new Headers();
      headers.set("location", "/setting/province");
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    } else {
      const states = createAppState();

      const token = getCookies(req.headers).token;

      const provinces = await states.province.getProvinces(
        { page: 1, limit: 20 },
        { _id: 1, enName: 1, name: 1, abb: 1 },
        token,
      );

      return ctx.render({
        provinces,
        err: addedProvince.body.message,
        modal: true,
      });
    }
  },
};

const Province = ({ data }: PageProps<IProvincesPage>) => {
  const toggleModal = useSignal<boolean>(data.modal);

  return (
    <Layout>
      <Modal toggleModal={toggleModal} err={data.err} />
      <SettingList btnText="افزودن استان" toggleModal={toggleModal}>
        {data.provinces.map((province) => (
          <RegularCard key={province?._id} data={province} />
        ))}
      </SettingList>
    </Layout>
  );
};

export default Province;
