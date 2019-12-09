import { prop } from 'typegoose';
import { IsString } from 'class-validator';

export class PageViewModel {
  @IsString()
  @prop({ required: true })
  name: string;
}
