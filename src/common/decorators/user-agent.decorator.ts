import { createParamDecorator } from '@nestjs/common';
import * as useragent from 'useragent';

export interface UserAgentData {
  os: string;
  browser: string;
}

export const UserAgent = createParamDecorator((data, req) => {
  const agent = useragent.parse(req.get('User-Agent'));
  return {
    os: agent.os.family,
    browser: agent.family,
  } as UserAgentData;
});
