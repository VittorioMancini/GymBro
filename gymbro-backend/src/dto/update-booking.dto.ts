import { Status } from "src/enums/status.enum";

export class UpdateBookingDTO
{
    bookingId : string;
    status : Status;
}