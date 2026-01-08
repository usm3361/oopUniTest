export default class Passenger {
  constructor(name, idNumber, amountOfMoney) {
    this.name = name;
    this.idNumber = idNumber;
    this.amountOfMoney = amountOfMoney;
  }

  isThereEnoughMoney(ticketPrice) {
    return this.amountOfMoney >= ticketPrice;
  }
  pay(price) {
    if (this.isThereEnoughMoney(price)) {
      this.amountOfMoney -= price;
      return true;
    }
    return false;
  }
}
