import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Data, mongodoc } from 'src/Schema/Schema';
import { ClassesService } from 'src/classes/classes.service';
import { ControllercrudController } from 'src/controllercrud/controllercrud.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Data.name, schema: mongodoc }]),
    MulterModule.register({
      storage: diskStorage({
        destination: 'picture',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  ],
  providers: [ClassesService],
  controllers: [ControllercrudController],
})
export class MymoduleModule {}
