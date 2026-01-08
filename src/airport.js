import Passenger from "./RegularPassenger.js";
import Ticket from "./RegularTicket.js";
import Student from "./StudentPassenger.js";
import vipTicket from "./VIPTicket.js";

export default class Airport {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.flights = [];
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
  buyTickets(passenger, ticket) {
    if (passenger instanceof Student) {
      if (ticket instanceof Ticket) {
        passenger.amountOfMoney -= ticket.ticketPrice * 0.9;
        ticket.ownerName = passenger.name;
      }
    } else if (passenger instanceof Passenger) {
      if (passenger.knowsEmployee) {
        if (ticket instanceof Ticket) {
          passenger.amountOfMoney -= ticket.ticketPrice * 0.8;
          ticket.ownerName = passenger.name;
        } else if (ticket instanceof vipTicket) {
          passenger.amountOfMoney -= ticket.ticketPrice * 0.85;
          ticket.ownerName = passenger.name;
        } else {
          passenger.amountOfMoney -= ticket.ticketPrice;
          ticket.ownerName = passenger.name;
        }
      }
    }
  }
}

//       const newPrice = ticketPrice * 0.8;
//       this.amountOfMoney -= newPrice;
//     } else {
//       this.amountOfMoney -= ticketPrice;
//     }

// }
