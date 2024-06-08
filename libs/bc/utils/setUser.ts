import { coreApp } from "../../../back/mod.ts";
import { ObjectId } from "share/deps.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const setUser = async () => {
  const { user: { _id } }: MyContext = coreApp.contextFns
    .getContextModel() as MyContext;

  const foundedUser = await user.findOne({
    filters: { _id: new ObjectId(_id) },
    projection: {
      phone: 1,
      first_name: 1,
      last_name: 1,
      email: 1,
      is_active: 1,
      position: {
        _id: 1,
        name: 1,
        panel: 1,
        features: 1,
        level: 1,
      },
      org: {
        _id: 1,
        name: 1,
      },
      unit: {
        _id: 1,
        name: 1,
      },
      city: {
        _id: 1,
        name: 1,
      },
      province: {
        _id: 1,
        name: 1,
      },
    },
  });

  !foundedUser && throwError("user not exist");
  // TODO QueryQueue for update for example ware

  coreApp.contextFns.setContext({ user: foundedUser });
};
