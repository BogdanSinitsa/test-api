import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { IpAddress, UserAgent, UserAgentData, IpAddressData } from '../common/decorators';
import { CreatePageViewDto, GroupByCountryDto } from './dtos';
import { PageView } from './page-view.schema';

@Controller('page-views')
export class PageViewController {

  constructor(private pageViewService: PageViewService) {}

  @Post()
  async create(@Body() body: CreatePageViewDto,
               @IpAddress() ipAddress: IpAddressData,
               @UserAgent() userAgent: UserAgentData): Promise<void> {
    await this.pageViewService.create({
      pageId: body.pageId,
      userId: body.userId,
      timestamp: body.timestamp,
      ip: ipAddress.id,
      country: ipAddress.country,
      browser: userAgent.browser,
    });
  }

  @Get('page/:pageId')
  async listByPage(@Param('pageId') pageId: string): Promise<Array<Partial<PageView>>> {
    return this.pageViewService.list({
      pageId,
    });
  }

  @Get('browser/:browser')
  async listByBrowser(@Param('browser') browser: string): Promise<Array<Partial<PageView>>>  {
    return this.pageViewService.list({
      browser,
    });
  }

  @Get('country/:country')
  async listByCountry(@Param('country') country: string): Promise<Array<Partial<PageView>>>  {
    return this.pageViewService.list({
      country,
    });
  }

  @Get('countries/count')
  async groupByCountry(@Param('country') country: string): Promise<GroupByCountryDto[]>  {
    return this.pageViewService.groupByCountry();
  }

  @Get('rate')
  async getRate(): Promise<{rate: number}>  {
    return { rate: await this.pageViewService.getRate() };
  }
}
