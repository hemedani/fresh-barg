import {
  Layout,
  Modal,
  RegularCard,
  SettingList,
} from "../../components/mod.ts";

const Province = () => {
  return (
    <Layout>
      <Modal />
      <SettingList btnText="افزودن استان جدید">
        {[{}, {}, {}, {}].map((province, index) => (
          <RegularCard key={index + 1} data={province} />
        ))}
      </SettingList>
    </Layout>
  );
};

export default Province;
