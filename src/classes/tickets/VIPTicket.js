import Ticket from "./ticket.js";

export default class vipTicket extends Ticket {
  constructor(ticketsNum, price) {
    super(ticketsNum, price);
    this.benefits = ["Free alcohol", "Free food", "Hot towels"];
  }
}
