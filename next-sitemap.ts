/* eslint-disable import/no-extraneous-dependencies */
import { IConfig } from 'next-sitemap';

import { homepage as siteUrl } from './package.json';

const config: IConfig = {
 alternateRefs: [
  {
   href: `${siteUrl}/pt`,
   hreflang: 'pt',
  },
 ],
 changefreq: 'monthly',
 generateRobotsTxt: true,
 priority: 1,
 siteUrl,
};

export default config;
