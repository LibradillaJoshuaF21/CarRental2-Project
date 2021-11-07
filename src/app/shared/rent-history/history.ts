export interface RentHistory {
    rentID: string;
    userID: string;
    firstName: string;
    lastName: string;
    address: string
    email: string;
    contactNumber: number;
    carID: string;
    carModel: string;
    rentStartDate: Date;
    rentEndDate: Date;
    rentStatus: boolean;
}