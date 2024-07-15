import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateBookingDTO } from "src/dto/create-booking.dto";
import { UpdateBookingDTO } from "src/dto/update-booking.dto";
import { BookingModel } from "src/models/booking.model";

@Controller('bookings')
export class BookingController
{
    @Get('/:userId')
    async getBookingsByUser(@Param('userId') userId : string) : Promise<BookingModel[]>
    {

    }

    @Post()
    async createBooking(@Body() request : CreateBookingDTO) : Promise<BookingModel>
    {

    }

    @Patch()
    async updateBooking(@Body() request : UpdateBookingDTO) : Promise<BookingModel>
    {

    }
}