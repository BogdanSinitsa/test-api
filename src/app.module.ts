import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PageViewModule } from './page-view/page-view.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/nest'), // ToDo: move to config
    PageViewModule,
  ],
})
export class AppModule {}
