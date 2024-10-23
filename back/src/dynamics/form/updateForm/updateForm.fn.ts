import { ActFn } from "share/deps.ts";
import { form } from "../../../../mod.ts";
export const updateFormFn: ActFn = async (body) => {
	const {
		set: {
			_id,
			title,
			isActive,
		},
		get,
	} = body.details;

	return await form.updateById({
		_id,
		update: {
			$set: {
				title,
				isActive,
			},
		},
		get,
	});
};
