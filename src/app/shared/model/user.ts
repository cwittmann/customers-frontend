export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;

  constructor(id, firstName, lastName, userName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
  }
}
