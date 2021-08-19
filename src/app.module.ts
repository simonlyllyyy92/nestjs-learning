import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User,Report], // put entities here 
    /**
     * //Is only for use in dev env , 
     * this will ask typeOrm to look all your different entities 
     * and then automatically update the structure of your database 
     * it will create and remove tables, it will add and remove columns and 
     * it will change the type of data stored in these columns as well 
     * WITHOUT RUNNING MIGRATION with those of entities and decorator's
     */
    synchronize:true 
  }), UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
