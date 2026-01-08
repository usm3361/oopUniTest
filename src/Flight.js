/**
 * הטיסה לא מקבלת מבחוץ את מספר כרטיסי ויאייפי ורגולר אלא זה לפי אחוזים ביחס למקסימום כרטיסים בטיסה
 */

import Tickets from "./RegularTicket.js"

export default class Flight{
    constructor(flightName, airline, flightNum, maxPassengers,regTicketPrice,vipTicketPrice) {
        this.flightName = flightName
        this.airline = airline
        this.flightNum = flightNum
        this.maxPassengers = maxPassengers
        this.regTicketPrice = regTicketPrice
        this.vipTicketPrice = vipTicketPrice
        this.ticketsList = []
    }
}