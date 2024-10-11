import { addPosToUserSetup } from "./addPosToUser/mod.ts";
import { addUserSetup } from "./addUser/mod.ts";
import { getMeSetup } from "./getMe/mod.ts";
import { getUserSetup } from "./getUser/mod.ts";
import { getUsersSetup } from "./getUsers/mod.ts";
import { loginUserSetup } from "./login/mode.ts";
import { loginReqUserSetup } from "./loginReq/mode.ts";
import { tempUserSetup } from "./tempUser/mod.ts";
import { updateUserSetup } from "./updateUser/mod.ts";
import { removeUserSetup } from "./removeUser/mod.ts";
import { countUsersSetup } from "./countUsers/mod.ts";
import { addAvatarSetup } from "./addAvatar/mod.ts";

export const userSetup = () => {
	addUserSetup();
	getMeSetup();
	updateUserSetup();
	getUserSetup();
	loginUserSetup();
	loginReqUserSetup();
	tempUserSetup();
	getUsersSetup();
	addPosToUserSetup();
	removeUserSetup();
	countUsersSetup();
	addAvatarSetup();
};
