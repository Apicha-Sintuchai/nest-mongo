import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, mongodoc } from 'src/Schema/Schema';
import { ClassesService } from 'src/classes/classes.service';
import { ControllercrudController } from 'src/controllercrud/controllercrud.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Data.name, schema: mongodoc }])],
  providers: [ClassesService],
  controllers: [ControllercrudController],
})
export class MymoduleModule {}
