import { relative } from "$std/path/relative.ts";
import { Button, Layout, Modal, RegularCard } from "../../components/mod.ts";

const Province = () => {
  return (
    <Layout>
      <Modal />
      <div
        className="container"
        style={{ marginTop: "10px", position: "relative" }}
      >
        <Button className="default-btn">
          افزودن استان
        </Button>
        <div className="provinces-list">
          {[{}, {}, {}, {}].map((province, index) => (
            <RegularCard key={index + 1} province={province} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Province;
