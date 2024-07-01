import { Button, Layout, RegularCard } from "../../components/mod.ts";

const Province = () => {
  return (
    <Layout>
      <div className="container" style={{ marginTop: "10px" }}>
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
