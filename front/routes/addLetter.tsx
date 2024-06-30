import { IconCity, InputField, Layout } from "../components/mod.ts";
import { SelectInput } from "../islands/mod.ts";

const AddLetter = () => {
  return (
    <Layout>
      <div className="new-letter-page">
        <div className="add-letter-content">
          <div className="letter-icon">
            <IconCity />
          </div>
          <h3>ایجاد نامه جدید</h3>
          <form className="add-letter-form">
            <>
              <InputField
                htmlFor="letter-number"
                title="شماره نامه"
                type="number"
              />
              <InputField htmlFor="letter-title" title="عنوان نامه" />
            </>
            <>
              <SelectInput title="سازمان" htmlFor="organism" />
              <SelectInput title="واحد" htmlFor="unit" />
              <SelectInput title="نقش" htmlFor="role" />
            </>
            <div className=" textarea-wrapper">
              <label htmlFor="summary-letter">خلاصه نامه</label>
              <textarea id="summary-letter" placeholder="خلاصه نامه">
              </textarea>
            </div>
            <div className="form-action-btn">
              <button>ایجاد نامه</button>
              <button>بازگشت</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AddLetter;
