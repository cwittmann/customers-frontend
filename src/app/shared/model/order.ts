export class Order {
    id: number;  
    customerId: number;
    productId: number;
    date: Date;
    status: number;
    amount: number;
    timestamp: Date;  
    
    name: string;
    manufacturer: string;
    price: string;
  
    constructor(id, customerId, productId, date, status, amount, timestamp) {
      this.id = id;
      this.customerId = customerId;
      this.productId = productId;
      this.date = date;
      this.status = status;
      this.amount = amount;
      this.timestamp = timestamp;
    }
    }