import { coreApp, position } from "../../../back/mod.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";
import { ObjectId } from "share/deps.ts";

export const isPositionInUser = async () => {
  const { user, body }: MyContext = coreApp.contextFns
    .getContextModel() as MyContext;
  const positionId = body?.details.set.positionId;

  if (!positionId) {
    throwError(
      "can not find positionId in body.details.set.positionId",
    );
  }

  const isInsideUser = user.position?.find(
    ({ _id }) => new ObjectId(_id).equals(positionId),
  );

  if (!isInsideUser) throwError("you dont have this position");

  const foundedPosition = await position.findOne({
    filters: { _id: new ObjectId(positionId) },
  });
  if (!foundedPosition) throwError("you dont have this position");

  coreApp.contextFns.setContext({ position: foundedPosition });

  return foundedPosition;
};
