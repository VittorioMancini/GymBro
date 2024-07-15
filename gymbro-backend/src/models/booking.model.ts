import { LessonModel } from "./lesson.model";

export class BookingModel
{
    id : string;
    date : Date;
    lesson : LessonModel;
}