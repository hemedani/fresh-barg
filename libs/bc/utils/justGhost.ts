import { coreApp } from "../../../back/mod.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const justGhost = () => {
  const { user }: MyContext = coreApp.contextFns
    .getContextModel() as MyContext;

  const includesGhost = user.position?.some((
    { level },
  ) => (level === "Ghost"));

  !includesGhost && throwError("user is not GHOST");
  return;
};
