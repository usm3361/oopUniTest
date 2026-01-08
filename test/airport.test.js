import { describe, test } from "node:test";
import assert from "node:assert";
import Airport from "../src/classes/airport.js";
import RegularPassenger from "../src/classes/passengers/RegularPassenger.js";
import StudentPassenger from "../src/classes/passengers/StudentPassenger.js";

const airport = new Airport("Ben Gurion", "TLV");
airport.initFlights();

const flightNYC = airport.flights[0];

describe("airport System Unit Tests", () => {
    
    test("return FALSE when passenger does not have enough money", () => {
        const poorPassenger = new RegularPassenger(
            "Poor Guy",
            111,
            10,
            "None",
            false
        );
        
        const ticket = flightNYC.ticketsList[flightNYC.ticketsList.length - 1];
        const initialOwner = ticket.ownerName;
        const initialMoney = poorPassenger.amountOfMoney;
        
        const success = airport.buyTicket(poorPassenger, ticket);
        
        assert.strictEqual(success, false, "Expected buyTicket to return false")
        
        assert.strictEqual(
            poorPassenger.amountOfMoney,
            initialMoney,
            "Passenger money should not change"
        );
    });
})


test(" return TRUE and check if update data when passenger has enough money", () => {
    const passenger = new RegularPassenger(
      "Rich Guy",
      222,
      5000,
      "Google",
      false
    );
    const ticket = flightNYC.ticketsList[flightNYC.ticketsList.length - 2];
    const ticketPrice = ticket.price;

    const success = airport.buyTicket(passenger, ticket);

    assert.strictEqual(success, true, "Expected buyTicket to return true");
    assert.strictEqual(
      ticket.ownerName,
      "Rich Guy",
      "Ticket owner should be updated to passenger name"
    );
    assert.strictEqual(
      passenger.amountOfMoney,
      5000 - ticketPrice,
      "Money should be reduced exactly by ticket price"
    );
  });

