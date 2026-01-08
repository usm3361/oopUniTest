import input from "analiza-sync";
import Flight from "./Flight.js";
import Passenger from "./RegularPassenger.js";
import Ticket from "./RegularTicket.js";
import Student from "./StudentPassenger.js";
import vipTicket from "./VIPTicket.js";

export default class Airport {
  static flights = [];
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  addFlight(
    flightName,
    airline,
    flightNum,
    maxPassengers,
    regTicketPrice,
    vipTicketPrice,
    ticketsList
  ) {
    const flight1 = new Flight(
      flightName,
      airline,
      flightNum,
      maxPassengers,
      regTicketPrice,
      vipTicketPrice,
      (ticketsList = creatTickets(
        maxPassengers,
        regTicketPrice,
        vipTicketPrice
      ))
    );
    Airport.flights.push(flight1);
  }
  creatTickets(maxPassengers, regTicketPrice, vipTicketPrice) {
    let arrTickets = [];
    let count = 1;
    const vipNumTicket = maxPassengers * 0.1;
    const regNumTicket = maxPassengers * 0.9;
    for (let vip; vip < vipNumTicket; vip++) {
      const newTicketVip = new vipTicket(count, vipTicketPrice);
      arrTickets.push(newTicketVip);
    }
    for (let reg; reg < regNumTicket; reg++) {
      const newTicket = new Ticket(count, regTicketPrice);
      arrTickets.push(newTicket);
    }
    return arrTickets;
  }
}
