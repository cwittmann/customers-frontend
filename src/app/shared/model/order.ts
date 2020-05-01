export class Order {
  id: number;
  customerid: number;
  productid: number;
  date: Date;
  status: number;
  amount: number;
  timestamp: Date;

  name: string;
  manufacturer: string;
  price: string;
  totalPrice: number;

  customerName: string;

  constructor(id, customerid, productid, date, status, amount, timestamp) {
    this.id = id;
    this.customerid = customerid;
    this.productid = productid;
    this.date = date;
    this.status = status;
    this.amount = amount;
    this.timestamp = timestamp;
  }
}
