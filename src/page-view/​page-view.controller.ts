import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { CreatePageViewDto } from './create-page-view.dto';

@Controller('page-views')
@UsePipes(ValidationPipe)
export class PageViewController {

  constructor(private pageViewService: PageViewService) {}

  @Post()
  async create(@Body() data: CreatePageViewDto): Promise<void> {
    await this.pageViewService.create(data);
  }
}
