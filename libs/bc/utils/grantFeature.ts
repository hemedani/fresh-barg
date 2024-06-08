import { coreApp } from "../../../back/mod.ts";
import { Infer } from "share/deps.ts";
import { LevelsEnum } from "../dbs/schemas/mod.ts";
import { MyContext } from "../interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const grantFeature = (level: Infer<typeof LevelsEnum>[]) => {
  const { user }: MyContext = coreApp.contextFns
    .getContextModel() as MyContext;

  const checkGhost = () => {
    const includesLevel = user.position.some((
      { level },
    ) => (level === "Ghost"));
    !includesLevel && throwError("user is not GHOST");
    return;
  };

  const checkOrghead = () => {
    const includesLevel = user.position.some((
      { level },
    ) => (level === "Orghead"));
    !includesLevel && throwError("user is not GHOST");
    return;
  };

  const checkUnithead = () => {
    const includesLevel = user.position.some((
      { level },
    ) => (level === "Unithead"));
    !includesLevel && throwError("user is not GHOST");
    return;
  };

  const checkStaff = () => {
    const includesLevel = user.position.some((
      { level },
    ) => (level === "Staff"));
    !includesLevel && throwError("user is not GHOST");
    return;
  };

  return level.includes("Orghead")
    ? checkOrghead
    : level.includes("Unithead")
    ? checkUnithead
    : level.includes("Staff")
    ? checkStaff
    : checkGhost;
};
