import { createParamDecorator } from '@nestjs/common';
import * as geoip from 'geoip-lite';

export interface IpAddressData {
  id: string;
  country: string;
}

export const IpAddress = createParamDecorator((data, req) => {
  if (req.clientIp) {
    const geo = geoip.lookup(req.clientIp);
    return {
      id: req.clientIp,
      country: geo ? geo.country : '',
    } as IpAddressData;
  }
});
