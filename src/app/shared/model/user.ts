export class User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  eMail: string;

  constructor(id, firstName, lastName, password, userName, eMail) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.userName = userName;
    this.eMail = eMail;
  }
}
