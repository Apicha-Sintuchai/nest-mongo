import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Data } from 'src/Schema/Schema';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Data.name) private DataModel: mongoose.Model<Data>,
  ) {}

  async findAll(): Promise<Data[]> {
    const findAlll = await this.DataModel.find();
    return findAlll;
  }

  async create(postbook: Data): Promise<Data> {
    const res = await this.DataModel.create(postbook);
    return res;
  }

  async updaye(id: string, update: Data): Promise<Data> {
    const updaye = await this.DataModel.findByIdAndUpdate(id, update);
    return updaye;
  }

  async deleteById(id: any): Promise<Data> {
    const deletebyid = await this.DataModel.findOneAndDelete(id);
    return deletebyid;
  }

  async findbyid(id: any): Promise<Data> {
    const findid = await this.DataModel.findOne(id);
    return findid;
  }
}
