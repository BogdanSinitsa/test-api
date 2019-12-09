import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PageViewService } from './page-view.service';
import { PageViewController } from './​page-view.controller';
import { PageViewModel } from './page-view.model';

@Module({
  imports: [TypegooseModule.forFeature([PageViewModel])],
  controllers: [PageViewController],
  providers: [PageViewService],
})
export class PageViewModule {}
