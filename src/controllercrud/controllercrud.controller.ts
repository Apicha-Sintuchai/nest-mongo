/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Data } from 'src/Schema/Schema';
import { ClassesService } from 'src/classes/classes.service';
import { RoleGuard } from 'src/role/role.guard';
@Controller('controllercrud')
export class ControllercrudController {
  constructor(private Crudservice: ClassesService) {}

  @Get()
  @UseGuards(RoleGuard)
  asyncfindAll(): Promise<Data[]> {
    return this.Crudservice.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createData(@Body() infor, @UploadedFile() file): Promise<Data> {
    const sendtooop = {
      name: infor.name,
      lastname: infor.lastname,
      age: infor.age,
    };
    return this.Crudservice.create(sendtooop, file);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Dataupdate): Promise<Data> {
    const updateData = this.Crudservice.updaye(id, Dataupdate);
    return updateData;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Data> {
    return this.Crudservice.deleteById(id);
  }
  @Get('id')
  async findbyid(@Param('id') id: any): Promise<Data> {
    return this.Crudservice.findbyid(id);
  }

  @Post('Picupload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    return await this.Crudservice.saveFileToDatabase(file);
  }
}
