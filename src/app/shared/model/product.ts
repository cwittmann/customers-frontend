export class Product {
    id: number;  
    name: string;
    manufacturer: string;
    price: string;
    timestamp: Date;    
  
    constructor(id, name, manufacturer, price, timestamp) {
      this.id = id;
      this.name = name;
      this.manufacturer = manufacturer;
      this.price = price;
      this.timestamp = timestamp;
    }
    }