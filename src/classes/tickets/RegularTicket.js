import Ticket from "./ticket.js";

export default class RegularTicket extends Ticket {
  constructor(price) {
    const randomTicketsNum = Math.floor(Math.random() * 1000);
    super(randomTicketsNum, price);
  }
}
