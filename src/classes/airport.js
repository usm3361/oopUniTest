import RegularTicket from "./tickets/RegularTicket.js";
import vipTicket from "./tickets/VIPTicket.js";
import StudentPassenger from "./passengers/StudentPassenger.js";
import RegularPassenger from "./passengers/RegularPassenger.js";

export default class Airport {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.flights = [];
  }
  addFlight(flight) {
    this.flights.push(flight);
  }
  createTickets(maxPassengers, regTicketPrice, vipTicketPrice) {
    let arrTickets = [];
    const vipCount = Math.floor(maxPassengers * 0.1);
    const regCount = maxPassengers - vipCount;
    for (let vip = 1; vip <= vipCount; vip++) {
      arrTickets.push(new vipTicket(vip, vipTicketPrice));
    }
    for (let reg = 0; reg < regCount; reg++) {
      arrTickets.push(new RegularTicket(regTicketPrice));
    }
    return arrTickets;
  }
  buyTicket(passenger, ticket) {
    if (ticket.ownerName) {
      console.log("ticket is already taken");
      return false;
    }
    let finalPrice = ticket.price;
    if (passenger instanceof StudentPassenger) {
      if (ticket instanceof RegularTicket) {
        finalPrice = ticket.price * 0.9;
      }
    } else if (passenger instanceof RegularPassenger) {
      if (passenger.knowsEmployee) {
        if (ticket instanceof RegularTicket) {
          finalPrice = ticket.price * 0.8;
        } else if (ticket instanceof vipTicket) {
          finalPrice = ticket.price * 0.85;
        }
      }
    }
    if (passenger.pay(finalPrice)) {
      ticket.ownerName = passenger.name;
      console.log("ticket purchase was successful");
      return true;
    } else {
      console.log("ticket purchase failed, not enough money");
      return false;
    }
  }
}
