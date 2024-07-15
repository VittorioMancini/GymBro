import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Booking } from "src/entities/booking.entity";
import { BookingModel } from "src/models/booking.model";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class BookingService
{
    private logger : Logger = new Logger(BookingService.name);

    constructor(@InjectRepository(Booking) private readonly bookingRepo : Repository<Booking>)
    {

    }

    private getBaseQuery() : SelectQueryBuilder<Booking>
    {
        return this.bookingRepo.createQueryBuilder('booking');
    }
    
    getBookingById(id : string) : BookingModel
    {
        
    }
}