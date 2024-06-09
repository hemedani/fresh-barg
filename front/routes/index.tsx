import { Handlers, PageProps } from "$fresh/server.ts";
import { createAppState } from "../states/mod.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    return await ctx.render({ phone: null });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const phone = form.get("phone")?.toString();
    const code = form.get("code")?.toString();

    const states = createAppState();

    if (code) {
      const login = await states.login(phone!, Number(code));
      if (login.success) {
        return await ctx.render({ phone });
      } else {
        return await ctx.render({ phone: null });
      }
    } else {
      const loginReq = await states.loginRequest(phone!);
      if (loginReq.success) {
        return await ctx.render({ phone });
      } else {
        return await ctx.render({ phone: null });
      }
    }
  },
};

interface User {
  phone?: string;
}

export default function Login(props: PageProps<User>) {
  return (
    <>
      <form method="post">
        <input type="number" name="phone" value="" />
        {props.data.phone && <input type="number" name="code" value="" />}
        <button type="submit">login</button>
      </form>
    </>
  );
}
