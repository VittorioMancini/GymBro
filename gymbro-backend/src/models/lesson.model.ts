import { CourseModel } from "./course.model";

export class LessonModel
{
    id : string;
    date : Date;
    course : CourseModel;
}