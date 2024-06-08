import { ObjectId } from "deps";
import { throwError } from "utils/throwError.ts";

const doesInstanceExist = async (
	model: any,
	modelName: string,
	id: ObjectId | string,
) => {
	const foundedInstance = await model.findOne(
		{ filters: { _id: new ObjectId(id) }, projection: { _ids: 1 } },
	);
	!foundedInstance && throwError(`the ${modelName} does not exist`);
	return foundedInstance;
};

export default doesInstanceExist;
