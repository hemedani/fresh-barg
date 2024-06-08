import { coreApp } from "../../../back/mod.ts";
import { key } from "../../../back/src/dynamics/user/login/loginUser.fn.ts";
import { jwt } from "share/deps.ts";
import { throwError } from "utils/throwError.ts";

export const setTokens = async () => {
  const { Headers } = coreApp.contextFns.getContextModel();
  const token = Headers.get("token");

  const verifingToken = async () => {
    const verifyToke = await jwt.verify(token as string, key);
    coreApp.contextFns.setContext({ user: verifyToke });
  };

  token ? await verifingToken() : throwError(
    "you should send your id with token key in req header",
  );
};
