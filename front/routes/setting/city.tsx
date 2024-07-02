import {
  Layout,
  Modal,
  RegularCard,
  SettingList,
} from "../../components/mod.ts";

const city = () => {
  return (
    <Layout>
      <Modal />
      <SettingList btnText="افزودن شهر جدید">
        {[{}, {}, {}, {}].map((province, index) => (
          <RegularCard key={index + 1} data={province} />
        ))}
      </SettingList>
    </Layout>
  );
};
export default city;
