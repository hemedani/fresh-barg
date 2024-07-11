import { useSignal } from "@preact/signals";
import { Layout, RegularCard, SettingList } from "../../components/mod.ts";
import { Modal } from "../../islands/Modal.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { createAppState } from "@libs";
import { getCookies } from "$std/http/cookie.ts";
import { BargContext, createdBargAppStates } from "../_app.tsx";
import { useContext } from "preact/hooks";
import { MyContextStates } from "../_middleware.ts";

interface IProvincesPage {
  initBargContext?: typeof createdBargAppStates;
  modal: boolean;
}

export const handler: Handlers<IProvincesPage, MyContextStates> = {
  async GET(_req, ctx) {
    const states = createAppState();

    const token = ctx.state.token;
    const position = ctx.state.activePosition;

    await states.city.getCities(
      { page: 1, limit: 20, positionId: position?._id },
      { _id: 1, enName: 1, name: 1, abb: 1 },
      token!,
      false,
    );

    return await ctx.render({
      initBargContext: states,
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
      modal: addedProvince.success ? false : true,
    });
  },
};

const Cities = ({ data }: PageProps<IProvincesPage>) => {
  const toggleModal = useSignal<boolean>(data.modal);
  const { city: { cities } } = useContext(BargContext);

  return (
    <Layout>
      <Modal toggleModal={toggleModal} err={null} />
      {cities.value.err && <div>{cities.value.err}</div>}
      <SettingList btnText="افزودن شهر" toggleModal={toggleModal}>
        {cities.value.data.map((city) => (
          <RegularCard key={city?._id} data={city} />
        ))}
      </SettingList>
    </Layout>
  );
};

export default Cities;
