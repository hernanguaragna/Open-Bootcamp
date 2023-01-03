import { LEVELS } from "./levels.enum";

export class Task {
	name = "";
	description = "";
	complete = false;
	lavel = LEVELS.NORMAL;

    constructor(name, description, complete, lavel) {
        this.name = name;
        this.description = description;
        this.complete = complete;
        this.lavel = lavel;
    }
}
