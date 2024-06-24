import { Button, ReverseCounter } from "../../mod.ts";

export const SignUp = () => {
  return (
    <div className="login-form-wrapper">
      <h2>کد‌ورود</h2>
      <p>
        کد ورود به شماره
        <span>09189128002</span>
        ارسال شده است.
      </p>
      <form className="login-form">
        <input placeholder="شماره همراه" />
        <Button>
          دریافت‌کد‌ورود
        </Button>
      </form>
      <ReverseCounter initialValue={50} />
    </div>
  );
};
