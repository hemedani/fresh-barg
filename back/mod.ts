import { lesan, MongoClient, Redis } from "deps";
//"https://deno.land/x/lesan@v0.1.3/mod.ts";
import {
	cities,
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
} from "share/schemas/core/mod.ts";
import { dynamicSetup } from "./src/dynamics/mod.ts";

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
export const letter = letters();
export const preDefLetter = preDefLetters();
export const reffer = reffers();
export const priority = priorities();
export const form = forms();
// export const formTag = formTags()
export const question = questions();

export const { setAct, setService, getAtcsWithServices } = coreApp.acts;

export const { selectStruct, getSchemas } = coreApp.schemas;

dynamicSetup();

coreApp.runServer({
	port: 1377,
	typeGeneration: true,
	playground: true,
	staticPath: ["/upload"],
	cors: [
		"http://localhost:4200",
		"http://localhost:4201",
		"http://localhost:4202",
	],
});
