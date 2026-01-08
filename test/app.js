import Airport from "../src/classes/airport.js";
import RegularPassenger from "../src/classes/passengers/RegularPassenger.js";
import StudentPassenger from "../src/classes/passengers/StudentPassenger.js";

const airport = new Airport("Ben Gurion", "TLV");
airport.initFlights()

const flightNYC = airport.flights[0]; 
const flightLND = airport.flights[1]; 
const flightEilat = airport.flights[2];

const studentPassenger = new StudentPassenger("Uri", 5244232, 6655, "kodcode");
const workerContact = new RegularPassenger("Hanan", 5144522, 1200, "analiza", true);
const poorPassenger = new RegularPassenger("Yossi", 455427, 10, "Home", false);

const regularTicketNYC = flightNYC.ticketsList[flightNYC.ticketsList.length - 1]
airport.buyTicket(studentPassenger, regularTicketNYC)

const vipTicketEilat = flightEilat.ticketsList[0];
airport.buyTicket(workerContact, vipTicketEilat);

airport.buyTicket(studentPassenger, vipTicketEilat);

const anotherTicket = flightNYC.ticketsList[50];
airport.buyTicket(poorPassenger, anotherTicket);
