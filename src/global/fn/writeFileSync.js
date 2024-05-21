import fs from "node:fs";
import path from "node:path";

export const writeFileSync = async (path, data) => {
	try {
		fs.writeFileSync(path, data);
	} catch (err) {
		console.error(err);
	}
};
