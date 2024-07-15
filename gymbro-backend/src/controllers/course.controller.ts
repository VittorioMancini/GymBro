import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCourseDTO } from "src/dto/create-course.dto";
import { UpdateCourseDTO } from "src/dto/update-course.dto";
import { CourseModel } from "src/models/course.model";

@Controller('courses')
export class CourseController
{
    @Get()
    getAllCourses() : CourseModel[]
    {

    }

    @Get('/:id')
    getCourseById(@Param('id') courseId : string) : CourseModel
    {

    }

    @Post()
    createCourse(@Body() request : CreateCourseDTO) : CourseModel
    {

    }

    @Patch()
    updateCourse(@Body() request : UpdateCourseDTO) : CourseModel
    {
        
    }
}