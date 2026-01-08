import Airport from "./src/airport.js";
import Flight from "./src/Flight.js";
import Passenger from "./src/RegularPassenger.js";
import Student from "./src/StudentPassenger.js";

const airport = new Airport("benGurion", "TLV"); 

const flight1 = new Flight("UsaToBuda", "AirForst", "54g24U", 10, 110, 245);
flight1.ticketsList = airport.creatTickets(10, 110, 245);

const flight2 = new Flight("TlvToCanda", "israir", "54g24IL", 20, 320, 700);
flight2.ticketsList = airport.creatTickets(20, 320, 700);

const flight3 = new Flight("TlvToCanda", "israir", "54g24IL", 30, 270, 420);
flight3.ticketsList = airport.creatTickets(30, 270, 420);

airport.addFlight(flight1)
airport.addFlight(flight2)
airport.addFlight(flight3)

console.log(airport.flights)
const studentPassenger = new Student("Uri", 206207821, 500, "kodcode");
const regularPassenger = new Passenger("hanan", 354625142, 1200, "analiza", false);

