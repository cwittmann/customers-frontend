export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  eMail: string;

  constructor(id, firstName, lastName, userName, eMail) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.eMail = eMail;
  }
}
