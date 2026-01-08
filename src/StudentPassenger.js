export default class Student {
  constructor(name, idNumber, amountOfMoney, schoolName) {
    this.name = name;
    this.idNumber = idNumber;
    this.amountOfMoney = amountOfMoney;
    this.schoolName = schoolName;
  }
  isThereEnoughMoney(ticketPrice) {
    if (this.amountOfMoney < ticketPrice) {
      return false;
    } else {
      return true;
    }
  }
  buyTickets(ticketPrice) {
    this.amountOfMoney -= ticketPrice;
  }
}
