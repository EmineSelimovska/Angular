class Wallet {
    balance = 0;
    name = '';
   constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
    }
  }
  
  class Car {
    model = '';
    constructor(model:string){
      this.model = model;
      
    }
  }
  // WORSE!
  class Person {
    wallet: Wallet;
    car: Car; 
  
    constructor(name: string, balance: number, carModel:string){
      this.car = new Car(carModel)
      this.wallet = new Wallet(name, balance)
  
    }
  }
  const personIvan = new Person('Ivan', 4000, 'VW');
  personIvan.wallet.balance // 4000
  const personMaria = new Person('Maria',5000, 'Mercedes');
  personMaria.wallet.balance // 5000
  
  // BETTER!
  class PersonBetter {
    wallet: Wallet;
    car: Car; 
  
    constructor(car: Car, wallet: Wallet ){
      this.car = car;
      this.wallet = wallet;
  
    }
  }
  
  const ivansCar = new Car('Pejo');
  const ivansWallet = new Wallet('Ivan', 500);
  
  const personIvanBetter = new PersonBetter(ivansCar,ivansWallet)