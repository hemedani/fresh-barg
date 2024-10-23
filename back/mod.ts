import { lesan, MongoClient, Redis } from "share/deps.ts";
import {
	cities,
	files,
	forms,
	letters,
	orgs,
	positions,
	preDefLetters,
	priorities,
	provinces,
	// formTags,
	questions,
	reffers,
	units,
	users,
} from "share/schemas/mod.ts";
import * as modTs from "./src/dynamics/mod.ts";

export const myRedis = await Redis.connect({
	hostname: "127.0.0.1",
	port: 6379,
});

export const coreApp = lesan();
const client = await new MongoClient("mongodb://127.0.0.1:27017/").connect();
const db = client.db("fresh-barg");
coreApp.odm.setDb(db);

export const province = provinces();
export const city = cities();
export const org = orgs();
export const unit = units();

export const position = positions();
export const user = users();
export const file = files();
export const letter = letters();
export const preDefLetter = preDefLetters();
export const reffer = reffers();
export const priority = priorities();
export const form = forms();
// export const formTag = formTags()
export const question = questions();

export const { setAct, setService, getAtcsWithServices } = coreApp.acts;

export const { selectStruct, getSchemas } = coreApp.schemas;

modTs.dynamicSetup();

coreApp.runServer({
	port: 1377,
	typeGeneration: true,
	playground: true,
	staticPath: ["/uploads"],
	cors: [
		"http://localhost:4200",
		"http://localhost:4201",
		"http://localhost:4202",
	],
});
