import { ActFn, ObjectId } from "deps";
import { question } from "../../../../mod.ts";
import { doesFormExist } from "../../form/formUtils.ts";

export const addQuestionFn: ActFn = async (body) => {
    // const context: MyContext = coreApp.contextFns
    //  .getContextModel() as MyContext;
	// const authorId = context.user._id
	
	const {
		set: {
			order,
			label,
			isActive,
			questionType,

			formId,
			orgId,
			unitId
		},
		get,
	} = body.details;

	await doesFormExist(formId)

	//TODO: CHECK UNIT 

	return await question.insertOne({
		doc: {
			order,
			label,
			isActive,
			questionType,
		},
		projection: get,
		relations: {
			// author: {
			// 	_ids: new ObjectId(authorId),
			// 	relatedRelations: {
			// 		questions:true
			// 	}
			// },

			forms: {
				_ids: [new ObjectId(formId)],
				relatedRelations: {
					questions: true
				}
			},

			org: {
				_ids: new ObjectId(orgId)
			},

			unit: {
				_ids: new ObjectId(unitId)
			},
		},
	});
};
