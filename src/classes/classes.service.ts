/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as fs from 'fs';
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
  async create(postbook: any, file: Express.Multer.File): Promise<Data> {
    const intodb = new this.DataModel({
      name: postbook.name,
      lastname: postbook.lastname,
      age: postbook.age,
      file: file.originalname,
    });

    return intodb.save();
  }

  async updaye(id: string, update: Data): Promise<Data> {
    const updaye = await this.DataModel.findByIdAndUpdate(id, update);
    return updaye;
  }

  async deleteById(id: any): Promise<Data> {
    const deletebyid = await this.DataModel.findOneAndDelete({ _id: id });
    if (deletebyid?.file) {
      await fs.unlink('picture/' + deletebyid.file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('work');
        }
      });
    }
    console.log(deletebyid.file);
    return;
  }

  async findbyid(id: any): Promise<Data> {
    const findid = await this.DataModel.findOne(id).exec();
    return findid;
  }

  async saveFileToDatabase(file) {
    console.log(file.originalname);
    // const savepic = await this.DataModel.create(file);
    return;
  }
}
