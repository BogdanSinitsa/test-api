import { IsString, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePageViewDto {
  @IsOptional()
  @IsString()
  readonly userId: string;

  @IsOptional()
  @IsString()
  readonly pageId: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly timestamp: Date;
}
