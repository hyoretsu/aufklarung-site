import { NextSeo } from 'next-seo';

import Details from '@components/Issue';
import LocationInfo from '@components/LocationInfo';

const description = `Volume 7 da Revista Aufklärung, número ${'especial' || '2, Maio~Agosto'}.`;
const title = 'Dossiê Sartre' || 'Vol. 7 nº esp.';

const Issue: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo>v. 7 n. Especial (2020): Dossiê Sartre</LocationInfo>
   <Details />
  </>
 );
};

export default Issue;
