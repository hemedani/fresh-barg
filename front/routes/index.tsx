import { SignIn, SignUp } from "../components/mod.ts";

export default function LoginPage() {
  const isOk = true;
  return (
    <div className="login-page">
      <div className="login">
        <img
          src="/images/Logo.png"
          loading="lazy"
          alt="logo image"
          width="55"
          height="55"
        />
        <h1>ساتک</h1>
        <p>
          سامانه الکترونیک تهیه کالا
        </p>
        {isOk ? <SignUp /> : <SignIn />}
      </div>
      <div className="background">
        <img src="/images/Login.png" alt="background image" loading="lazy" />
      </div>
    </div>
  );
}
