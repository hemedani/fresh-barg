import { ActFn, ensureDir, ObjectId } from "share/deps.ts";
import { coreApp, file } from "../../../../mod.ts";
import { MyContext } from "interfaces/context.ts";
import { throwError } from "utils/throwError.ts";

export const uploadFileFn: ActFn = async (body) => {
	const { user }: MyContext = coreApp.contextFns
		.getContextModel() as MyContext;

	const { formData } = body.details.set;

	const document: File = formData.get("file") as File;

	const insertDocument = async () => {
		const documentName = `${new ObjectId().toString()}${
			document.name.slice(document.name.lastIndexOf("."))
		}`;
		await ensureDir("./uploads/documents");

		await Deno.writeFile(
			`./uploads/documents/${documentName}`,
			document.stream(),
		);

		return await file.insertOne({
			doc: {
				name: documentName,
				type: document.type,
				size: document.size,
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

	if (
		document.type === "file/txt" || document.type === "file/odt" ||
		document.type === "file/pdf"
	) {
		await insertDocument();
	} else {
		throwError("you should send a txt or odt and or pdf file");
	}
};
