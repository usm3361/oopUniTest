import Airport from "./src/classes/airport.js";
import Flight from "./src/classes/Flight.js";
import RegularPassenger from "./src/classes/passengers/RegularPassenger.js";
import Passenger from "./src/classes/passengers/RegularPassenger.js";
import StudentPassenger from "./src/classes/passengers/StudentPassenger.js";
import Student from "./src/classes/passengers/StudentPassenger.js";

const airport = new Airport("Ben Gurion", "TLV");

const flight1 = new Flight("USAtoBudapest", "AirForce", "54g24U", 60, 100, 300);
airport.addFlight(flight1);
flight1.ticketsList = airport.createTickets(flight1.maxPassengers, flight1.regTicketPrice, flight1.vipTicketPrice);
console.log(flight1.ticketsList)
// const flight2 = new Flight("TLVtoCanada", "israir", "54g24IL", 20, 320, 700);
// airport.addFlight(flight2);
// flight2.ticketsList = airport.createTickets(flight2.maxPassengers, flight2.regTicketPrice, flight2.vipTicketPrice);

// const flight3 = new Flight("TlvToCanda", "israir", "54g24IL", 30, 270, 420);
// airport.addFlight(flight3);
// flight3.ticketsList = airport.createTickets(flight3.maxPassengers, flight3.regTicketPrice, flight3.vipTicketPrice);

const studentPassenger = new StudentPassenger("Uri", 5244232, 1800, "kodcode");
const regularWorkerPassenger = new RegularPassenger("Hanan", 5144522, 1200, "analiza", true);
const regularSimplePassenger = new RegularPassenger("Yossi", 455427, 800, "Microsoft", false);


// do {
//   ticket1 = flight1.ticketsList[r1];
//   ticket2 = flight1.ticketsList[r2];
// } while (r1 === r2);

// airport.buyTicket(studentPassenger, ticket1);
// airport.buyTicket(regularPassenger, ticket2);

// const ticket2 = flight1.ticketsList[Math.floor(Math.random() * 10)];

// console.log(flight1.ticketsList);
// console.log(ticket2);
