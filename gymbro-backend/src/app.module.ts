import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/orm.config';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { CourseController } from './controllers/course.controller';
import { BookingController } from './controllers/booking.controller';
import { Booking } from './entities/booking.entity';
import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory : ormConfig
    }),
    TypeOrmModule.forFeature([User, Booking, Course, Lesson])],
  controllers: [AppController, UserController, CourseController, BookingController],
  providers: [AppService],
})
export class AppModule {}
