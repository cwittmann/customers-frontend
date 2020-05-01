import { Order } from './order';

export class Customer {
  id: number;
  firstname: string;
  lastname: string;
  title: string;
  gender: string;
  job: string;
  birthdate: Date;
  streetaddress: string;
  postalcode: string;
  city: string;
  country: string;
  currency: string;
  phone: string;
  email: string;

  birthdateString: string;
  orders: Order[];
  numberOfOrders: number;

  constructor(
    id,
    firstname,
    lastname,
    title,
    gender,
    job,
    birthdate,
    streetaddress,
    postalcode,
    city,
    country,
    currency,
    phone,
    email
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.title = title;
    this.gender = gender;
    this.job = job;
    this.birthdate = birthdate;
    this.streetaddress = streetaddress;
    this.postalcode = postalcode;
    this.city = city;
    this.country = country;
    this.currency = currency;
    this.phone = phone;
    this.email = email;
  }
}
