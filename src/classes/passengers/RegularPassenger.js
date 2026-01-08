import Passenger from "./passenger.js";

export default class RegularPassenger extends Passenger {
  constructor(name, idNumber, amountOfMoney, workplace, knowsEmployee) {
    super(name, idNumber, amountOfMoney);
    this.workplace = workplace;
    this.knowsEmployee = knowsEmployee;
  }
}
