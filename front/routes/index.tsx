import { Handlers, PageProps } from "$fresh/server.ts";
import { Button, ReverseCounter } from "../components/mod.ts";
import { createAppState } from "@libs";
import { Cookie, getCookies, setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookieHeader = getCookies(req.headers);

    /*
     * 	@LOG @DEBUG @INFO
     * 	This log written by ::==> {{ `` }}
     *
     * 	Please remove your log after debugging
     */
    console.log(" ============= ");
    console.group("cookieHeader ------ ");
    console.log();
    console.info({ cookieHeader }, " ------ ");
    console.log();
    console.groupEnd();
    console.log(" ============= ");

    return await ctx.render({ phone: null });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const phone = form.get("phone")?.toString();
    const code = form.get("code")?.toString();

    const states = createAppState();

    if (code) {
      const login = await states.user.login(phone!, Number(code));
      if (login.success) {
        const headers = new Headers();
        const cookie: Cookie = { name: "token", value: login.body.token };
        setCookie(headers, cookie);
        return await ctx.render({ phone }, { headers });
      } else {
        return await ctx.render({ phone: null });
      }
    } else {
      const loginReq = await states.user.loginRequest(phone!);

      if (loginReq.success) {
        return await ctx.render({ phone, errMsg: null });
      } else {
        return await ctx.render({ phone: null, errMsg: loginReq.body.message });
      }
    }
  },
};

interface User {
  phone?: string;
  errMsg?: string;
}

export default function LoginPage(props: PageProps<User>) {
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
        {props.data.errMsg && <p>{props.data.errMsg}</p>}
        <p>
          سامانه الکترونیک تهیه کالا
        </p>

        <div className="login-form-wrapper">
          <h2>{props.data.phone ? "ورود" : "کد‌ورود"}</h2>
          {props.data.phone
            ? (
              <p>
                کد ورود به شماره <span>{props.data.phone}</span> ارسال شده است.
              </p>
            )
            : <p>برای ورود شماره تماس خود را وارد کنید.</p>}
          <form className="login-form" method="post">
            {props.data.phone
              ? (
                <>
                  <input
                    type="hidden"
                    name="phone"
                    value={props.data.phone}
                    placeholder="شماره همراه"
                  />
                  <input
                    type="number"
                    name="code"
                    value=""
                    placeholder="۱۲۳۴۵"
                  />
                </>
              )
              : (
                <input
                  type="number"
                  name="phone"
                  value=""
                  placeholder="شماره همراه"
                />
              )}
            <Button type="submit">
              {props.data.phone ? "ورود" : "دریافت کد"}
            </Button>
          </form>
          {props.data.phone && <ReverseCounter initialValue={50} />}
        </div>
      </div>
      <div className="background">
        <img src="/images/Login.png" alt="background image" loading="lazy" />
      </div>
    </div>
  );
}
