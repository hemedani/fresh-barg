import { Button } from "../../mod.ts";

export const SignIn = () => {
  return (
    <div className="login-form-wrapper">
      <h2>ورود</h2>
      <p>برای ورود شماره تماس خود را وارد کنید.</p>
      <form className="login-form">
        <input placeholder="شماره همراه" />
        <Button>
          دریافت‌کد‌ورود
        </Button>
      </form>
    </div>
  );
};
