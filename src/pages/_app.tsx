/* eslint-disable camelcase */
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

import { Content, Body } from '@styles/_app';

import appPackageJson from '../../package.json';
import { siteName as site_name } from './_document';
import '@public/global.css';
import '@public/fonts.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
 const { homepage: url } = appPackageJson;
 const { pathname } = useRouter();

 return (
  <>
   <DefaultSeo
    additionalMetaTags={[{ property: 'og:locale:alternate', content: 'pt_BR' }]}
    defaultTitle={site_name}
    facebook={{ appId: String(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID) }}
    languageAlternates={[{ hrefLang: 'pt-BR', href: `${url}/pt` }]}
    openGraph={{
     images: [
      {
       url: `${url}/images/opengraph.png`,
       width: 1200,
       height: 627,
       alt: site_name,
      },
     ],
     // locale: 'en_US',
     site_name,
     type: 'website',
     url: url + pathname,
    }}
    titleTemplate="%s | Aufklärung"
    twitter={{
     cardType: 'summary_large_image',
     handle: `${process.env.NEXT_PUBLIC_SITE_CONTENT_CREATOR}` || '@hyoretsu',
     site: `${process.env.NEXT_PUBLIC_SITE_OWNER}` || '@hyoretsu',
    }}
   />
   <Header />
   <Content>
    <Body>
     <Component {...pageProps} />
    </Body>
    <Sidebar />
   </Content>
   <Footer />
  </>
 );
};

export default MyApp;
