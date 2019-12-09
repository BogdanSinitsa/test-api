import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreatePageViewDto {
  @IsOptional()
  @IsString()
  readonly userId: string;
  @IsOptional()
  @IsString()
  readonly pageId: string;
  @IsOptional()
  @IsDateString()
  readonly timestamp: string;
}
