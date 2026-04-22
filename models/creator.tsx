import Ticket from "./ticket";

export default class Creator {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;
    createdAt!: Date;
    creatorId!: number;
    tickets!: Ticket[];
}