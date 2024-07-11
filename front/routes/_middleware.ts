import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { createAppState } from "@libs";
import {
  DeepPartial,
  positionSchema,
  userSchema,
} from "../../back/declarations/selectInp.ts";

export interface MyContextStates {
  user?: DeepPartial<userSchema>;
  activePosition?: DeepPartial<positionSchema>;
  token?: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<MyContextStates>,
) {
  const cookieHeader = getCookies(req.headers);

  if (cookieHeader.token) {
    const states = createAppState();

    const getMe = await states.user.getMe({}, {
      _id: 1,
      email: 1,
      position: {
        _id: 1,
        features: 1,
        level: 1,
      },
    }, cookieHeader.token);

    if (getMe.success) {
      ctx.state.user = getMe.body;
      ctx.state.token = cookieHeader.token;
      const foundedPosition = getMe.body.position.find((p) =>
        p._id === cookieHeader.activePosition
      );
      ctx.state.activePosition = foundedPosition;
    }
  }

  const resp = await ctx.next();
  return resp;
}
