import { coreApp } from "../../../back/mod.ts";
import { TLesanBody } from "share/deps.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const checkOrgId = () => {
  const { user, body }: MyContext = coreApp.contextFns
    .getContextModel() as MyContext;

  const findPosition = () => {
    const positionId = body?.details.set.positionId;
    if (!positionId) {
      throwError("can not find position in body.details.set.position");
    }

    const foundedPosition = user.position?.find(({ _id }) =>
      _id.equals(positionId)
    );

    if (!foundedPosition) throwError("you dont have this position");
    return foundedPosition;
  };

  const checkAccess = () => {
    const position = findPosition();
    if (position && position.level === "Ghost") {
      if (body?.details.set.orgId) {
        return;
      }
    }

    const userOrgId = user.org?._id;

    if (userOrgId) {
      coreApp.contextFns.addBodyToContext(
        {
          ...body,
          details: {
            ...body?.details,
            set: { ...body?.details.set, orgId: userOrgId },
          },
        } as TLesanBody,
      );
      return;
    }

    throwError("You cant do this");
  };

  return checkAccess();
};
