import { Handlers, PageProps } from "$fresh/server.ts";
import { Button, ReverseCounter } from "../components/mod.ts";
import { createAppState } from "@libs";
import { Cookie, setCookie } from "$std/http/cookie.ts";
import { MyContextStates } from "./_middleware.ts";

interface User {
  phone?: string | null;
  errMsg?: string | null;
}

export const handler: Handlers<User, MyContextStates> = {
  async GET(req, ctx) {
    if (ctx.state.user) {
      const headers = new Headers();
      headers.set("location", "/setting/province");
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    }

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
        const tokeCookie: Cookie = { name: "token", value: login.body.token };
        const positionCookie: Cookie = {
          name: "activePosition",
          value: login.body.user.position[0]._id,
        };
        setCookie(headers, tokeCookie);
        setCookie(headers, positionCookie);

        headers.set("location", "/setting/province");
        return new Response(null, {
          status: 303, // See Other
          headers,
        });

        // return await ctx.render({ phone }, { headers });
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
