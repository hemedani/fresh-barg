import { ActFn, ensureDir, ObjectId } from "deps";
import { coreApp, file } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const uploadImageFn: ActFn = async (body) => {
	const { user }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { formData } = body.details.set;

	const image: File = formData.get("image") as File;

	if (image.type !== "image/jpeg") {
		throwError("you should send a JPEG image");
	}

	const imageName = new ObjectId();
	await ensureDir("./uploads/images");
	await Deno.writeFile(
		`./uploads/images/${imageName}.jpeg`,
		image.stream(),
	);

	return await file.insertOne({
		doc: {
			name: `${imageName.toString()}.jpeg`,
			type: image.type,
			size: image.size,
		},
		relations: {
			uploader: {
				_ids: new ObjectId(user._id),
				relatedRelations: {
					uploadedAssets: true,
				},
			},
		},
		projection: body.details.get,
	});
};
