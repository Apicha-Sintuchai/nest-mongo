import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Data } from 'src/Schema/Schema';
import { ClassesService } from 'src/classes/classes.service';
@Controller('controllercrud')
export class ControllercrudController {
  constructor(private Crudservice: ClassesService) {}

  @Get()
  asyncfindAll(): Promise<Data[]> {
    return this.Crudservice.findAll();
  }

  @Post()
  async createData(@Body() infor): Promise<Data> {
    console.log(infor);
    return this.Crudservice.create(infor);
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
}
