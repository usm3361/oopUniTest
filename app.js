import Airport from "./src/airport.js";
import Flight from "./src/Flight.js";
import Passenger from "./src/RegularPassenger.js";
import Student from "./src/StudentPassenger.js";
import input from "analiza-sync"

const airport = new Airport("benGurion", "TLV");

const flight1 = new Flight("USAtoBudapest", "AirForce", "54g24U", 10, 110, 245);
airport.addFlight(flight1);
flight1.ticketsList = airport.createTickets(10, 110, 245);

const flight2 = new Flight("TLVtoCanada", "israir", "54g24IL", 20, 320, 700);
airport.addFlight(flight2);
flight2.ticketsList = airport.createTickets(20, 320, 700);

const flight3 = new Flight("TlvToCanda", "israir", "54g24IL", 30, 270, 420);
airport.addFlight(flight3);
flight3.ticketsList = airport.createTickets(30, 270, 420);

const studentPassenger = new Student("Uri", 206207821, 500, "kodcode");
const regularPassenger = new Passenger("hanan", 5142, 1200, "analiza", true);

    
const choice = input("Please select which ticket you would like to purchase")
    console.log("if")
     
    do{
        ticket1 = flight1.ticketsList[r1];
        ticket2 = flight1.ticketsList[r2];
    }
    while (r1 === r2)
        
        airport.buyTicket(studentPassenger, ticket1);
        airport.buyTicket(regularPassenger, ticket2);
    
// const ticket2 = flight1.ticketsList[Math.floor(Math.random() * 10)];

console.log(flight1.ticketsList);
// console.log(ticket2);
