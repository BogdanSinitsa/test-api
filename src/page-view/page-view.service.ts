import { Injectable } from '@nestjs/common';
import { CreatePageViewDto } from './create-page-view.dto';
import { ModelType } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { PageViewModel } from './page-view.model';

@Injectable()
export class PageViewService {

  constructor(@InjectModel(PageViewModel) private readonly pageViewModel: ModelType<PageViewModel>) {}

  async create(data: CreatePageViewDto) {
    const item = new this.pageViewModel();
    // item.
  }
}
