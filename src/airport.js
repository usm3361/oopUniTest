import Flight from "./Flight.js";
import Ticket from "./RegularTicket.js";
import vipTicket from "./VIPTicket.js";

export default class Airport {
    constructor(name, city) {
    this.name = name;
      this.city = city;
      this.flights = []
  }
  addFlight(flight) {
    this.flights.push(flight);
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
