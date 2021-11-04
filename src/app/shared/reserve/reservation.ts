export interface Reservation {
    reserveID: string;
    firstName: string;
    lastName: string;
    address: string
    email: string;
    contactNumber: number;
    carID: string;
    carType: string;
    rentStartDate: Date;
    rentEndDate: Date
}