export default class Passenger {
  constructor(name, idNumber, amountOfMoney, workplace, knowsEmployee) {
    this.name = name;
    this.idNumber = idNumber;
    this.amountOfMoney = amountOfMoney;
    this.workplace = workplace;
    this.knowsEmployee = knowsEmployee;
  }
  isThereEnoughMoney(ticketPrice) {
    if (this.amountOfMoney < ticketPrice) {
      return false;
    } else {
      return true;
    }
  }
}
