export class User {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  username: string;
  email: string;

  constructor(id, firstname, lastname, password, username, email) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.username = username;
    this.email = email;
  }
}
