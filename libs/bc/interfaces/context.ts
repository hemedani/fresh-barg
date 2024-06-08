import { Infer, LesanContenxt, ObjectId } from "../dbs/deps.ts";
import {
	FeaturesEnum,
	LevelsEnum,
	PanelsEnum,
} from "share/schemas/core/mod.ts";

export interface MyContext extends LesanContenxt {
	user: {
		_id: ObjectId;
		phone: string;
		first_name: string;
		last_name: string;
		email: string;
		is_active: boolean;
		position?: {
			_id: ObjectId;
			name: string;
			panel: Infer<typeof PanelsEnum>;
			features: Infer<typeof FeaturesEnum>[];
			level: Infer<typeof LevelsEnum>;
		}[];
		org?: {
			_id: ObjectId;
			name: string;
		};
		unit?: {
			_id: ObjectId;
			name: string;
		};
		city?: {
			_id: ObjectId;
			name: string;
		};
		province?: {
			_id: ObjectId;
			name: string;
		};
	};
	position?: {
		_id: ObjectId;
		name: string;
		panel: Infer<typeof PanelsEnum>;
		features: Infer<typeof FeaturesEnum>[];
		level: Infer<typeof LevelsEnum>;
		org?: {
			_id: ObjectId;
			name: string;
		};
		unit?: {
			_id: ObjectId;
			name: string;
		};
	};
}
