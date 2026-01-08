export default class Flight {
    constructor(flightName, airline, flightNum, maxPassengers, regTicketPrice, vipTicketPrice) {
        this.flightName = flightName;
        this.airline = airline;
        this.flightNum = flightNum;
        this.maxPassengers = maxPassengers;
        this.regTicketPrice = regTicketPrice;
        this.vipTicketPrice = vipTicketPrice;
        this.ticketsList = [];
    }
}