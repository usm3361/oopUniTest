import Airport from "./src/airport";
import Passenger from "./src/RegularPassenger";
import Student from "./src/StudentPassenger";

const airport = new Airport("benGurion", "TLV");

const studentPassenger = new Student("Uri", 206207821, 500, "kodcode");
const regularPassenger = new Passenger("hanan", 354625142, 1200, "analiza", false);
