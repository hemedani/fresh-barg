import { useSignal } from "@preact/signals";
import { Layout, RegularCard, SettingList } from "../../components/mod.ts";
import { Modal } from "../../islands/Modal.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { createAppState } from "@libs";
import { getCookies } from "$std/http/cookie.ts";
import { BargContext, createdBargAppStates } from "../_app.tsx";
import { useContext } from "preact/hooks";

interface IProvincesPage {
  initBargContext?: typeof createdBargAppStates;
  modal: boolean;
  err: string | null;
}

export const handler: Handlers<IProvincesPage> = {
  async GET(req, ctx) {
    const states = createAppState();

    const token = getCookies(req.headers).token;

    await states.province.getProvinces(
      { page: 1, limit: 20 },
      { _id: 1, enName: 1, name: 1, abb: 1 },
      token,
      false,
    );

    return await ctx.render({
      initBargContext: states,
      err: null,
      modal: false,
    });
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

    return ctx.render({
      err: addedProvince.body.message,
      modal: addedProvince.success ? false : true,
    });
  },
};

const Province = ({ data }: PageProps<IProvincesPage>) => {
  const toggleModal = useSignal<boolean>(data.modal);
  const { province: { provinces } } = useContext(BargContext);

  return (
    <Layout>
      <Modal toggleModal={toggleModal} err={data.err} />
      <SettingList btnText="افزودن استان" toggleModal={toggleModal}>
        {provinces.value.data.map((province) => (
          <RegularCard key={province?._id} data={province} />
        ))}
      </SettingList>
    </Layout>
  );
};

export default Province;
