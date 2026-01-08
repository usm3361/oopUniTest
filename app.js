import Airport from "./src/airport.js";
import Flight from "./src/Flight.js";
import Passenger from "./src/RegularPassenger.js";
import Student from "./src/StudentPassenger.js";

const airport = new Airport("benGurion", "TLV");

const flight1 = new Flight("UsaToBuda", "AirForst", "54g24U", 10, 110, 245);
airport.addFlight(flight1);
flight1.ticketsList = airport.creatTickets(10, 110, 245);

const flight2 = new Flight("TlvToCanda", "israir", "54g24IL", 20, 320, 700);
airport.addFlight(flight2);
flight2.ticketsList = airport.creatTickets(20, 320, 700);

const flight3 = new Flight("TlvToCanda", "israir", "54g24IL", 30, 270, 420);
airport.addFlight(flight3);
flight3.ticketsList = airport.creatTickets(30, 270, 420);

// console.log(flight1.ticketsList)

const studentPassenger = new Student("Uri", 206207821, 500, "kodcode");
const regularPassenger = new Passenger("hanan", 5142, 1200, "analiza", true);
const ticket1 = flight1.ticketsList[Math.floor(Math.random() * 10)];
const ticket2 = flight1.ticketsList[Math.floor(Math.random() * 10)];

airport.buyTickets(studentPassenger,ticket1);
airport.buyTickets(regularPassenger,ticket2);

console.log(ticket1)
console.log(ticket2)