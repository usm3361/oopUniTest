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
  createTickets(maxPassengers, regTicketPrice, vipTicketPrice) {
    let arrTickets = [];
    let count = 1;
    const vipNumTicket = maxPassengers * 0.1;
    const regNumTicket = maxPassengers * 0.9;
    for (let vip = 0; vip < vipNumTicket; vip++) {
      const newTicketVip = new vipTicket(count, vipTicketPrice);
      arrTickets.push(newTicketVip);
      count++;
    }
    for (let reg = 0; reg < regNumTicket; reg++) {
      const newTicket = new Ticket(count, regTicketPrice);
      arrTickets.push(newTicket);
      count++;
    }
    return arrTickets;
  }
  buyTicket(passenger, ticket) {
    if (passenger instanceof Student) {
      if (ticket instanceof Ticket) {
        if (ticket.ownerName !== null)
          throw new Error("The ticket has already been purchased");
        passenger.amountOfMoney -= ticket.price * 0.9;
        ticket.ownerName = passenger.name;
      }
    } else if (passenger instanceof Passenger) {
      if (passenger.knowsEmployee) {
        if (ticket instanceof Ticket) {
          if (ticket.ownerName !== null)
            throw new Error("The ticket has already been purchased");
          if (passenger.isThereEnoughMoney(ticket.price)) {
            passenger.amountOfMoney -= ticket.price * 0.8;
            ticket.ownerName = passenger.name;
          } else {
            throw new Error(
              "There is not enough money to purchase the ticket"
            );
          }
        } else if (ticket instanceof vipTicket) {
          if (ticket.ownerName !== null)
            throw new Error("The ticket has already been purchased");
          passenger.amountOfMoney -= ticket.price * 0.85;
          ticket.ownerName = passenger.name;
        }
      }
    } else {
      if (ticket.ownerName !== null)
        throw new Error("The ticket has already been purchased. ");
      passenger.amountOfMoney -= ticket.ticketPrice;
      ticket.ownerName = passenger.name;
    }
  }
}
// isAvailable(indexTickets) {
//     for()
// }
// }
