import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { MymoduleModule } from './mymodule/mymodule.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mongo'),
    MymoduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
