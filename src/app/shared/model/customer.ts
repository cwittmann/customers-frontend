import { Order } from './order';

export class Customer {
  id: number;  
  firstName: string;
  lastName: string;
  title: string;
  gender: string;
  job: string;
  birthDate: Date;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  currency: string;
  phone: string;
  eMail: string;

  orders: Order[];
  numberOfOrders: number;

  constructor(id, firstName, lastName, title, gender, job, birthDate, streetAddress, postalCode, city, country, currency, phone, eMail) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.gender = gender;
    this.job = job;
    this.birthDate = birthDate;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    this.currency = currency;    
    this.phone = phone;
    this.eMail = eMail;
  }
  }