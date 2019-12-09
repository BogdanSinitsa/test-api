import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PageView, pageViewCollectionName } from './page-view.schema';
import { GroupByCountryDto } from './dtos';

@Injectable()
export class PageViewService {

  constructor(@InjectModel(pageViewCollectionName) private readonly pageViewModel: Model<PageView>) {}

  async create(data: Partial<PageView>) {
    const item = new this.pageViewModel(data);
    item.set(data);
    await item.save();
  }

  async list(conditions = {}): Promise<Array<Partial<PageView>>> {
    return this.pageViewModel.find(conditions, {
      pageId: 1,
      userId: 1,
      timestamp: 1,
    });
  }

  async groupByCountry(): Promise<GroupByCountryDto[]> {
    return this.pageViewModel.aggregate([
      {
        $group: {
          _id: '$country',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          country: '$_id',
          count: 1,
          _id: 0,
        },
      },
    ]);
  }

  async getRate(): Promise<number> {
    const [ activeUsers ] = await this.pageViewModel.aggregate([
      {
        $group: {
          _id: '$userId',
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          count: { $gt: 1 },
        },
      },

      {
        $group: {
          _id: 'null',
          count: { $sum: 1 },
        },
      },
    ]);

    const [ allUsers ] = await this.pageViewModel.aggregate([
      {
        $group: {
          _id: '$userId',
        },
      },
      {
        $group: {
          _id: 1,
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    return activeUsers.count / allUsers.count;
  }
}
