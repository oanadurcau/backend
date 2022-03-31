import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Admin } from './entity/admin.entity';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import { ChildModule } from './child/child.module';
import { ParentModule } from './parent/parent.module';
import { PrivateLessonModule } from './private-lesson/private-lesson.module';
import { SubjectModule } from './subject/subject.module';
import { PrivateLesson } from './entity/privateLesson';
import { Trainer } from './entity/trainer.entity';
import { Child } from './entity/child.entity';
import { Subject } from './entity/subject.entity';
import { Parent } from './entity/parent.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'bway',
      entities: [User, Admin, Trainer, Parent, Child, PrivateLesson, Subject],
      synchronize: true,
    }),
    UserModule,
    AdminModule,
    TrainerModule,
    ParentModule,
    ChildModule,
    PrivateLessonModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
