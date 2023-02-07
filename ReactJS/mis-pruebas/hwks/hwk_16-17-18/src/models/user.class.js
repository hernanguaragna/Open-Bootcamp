import { ROLES } from "./roles.enum";

export class User {
	Username = "";
	email = "";
	password = "";
	role = ROLES.USER;

	constructor(username, email, password, role) {
		this.Username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}
    
}