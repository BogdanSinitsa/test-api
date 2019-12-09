import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PageViewService } from './page-view.service';
import { PageViewController } from './​page-view.controller';
import { PageViewSchema, pageViewCollectionName } from './page-view.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: pageViewCollectionName, schema: PageViewSchema }]),
  ],
  controllers: [PageViewController],
  providers: [PageViewService],
})
export class PageViewModule {}
