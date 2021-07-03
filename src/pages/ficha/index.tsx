import Link from '@link';
import { NextSeo } from 'next-seo';

import LocationInfo from '@components/LocationInfo';

import FichaCatalografica from '@assets/ficha.svg';

import { Styling } from '@styles/ficha';

const description = 'Ficha contendo os dados bibliográficos da Revista Aufklärung.';
const title = 'Ficha Catalográfica';

const Ficha: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
   <Styling>
    <FichaCatalografica />
    <Link href="/images/ficha.png">Deseja baixar uma cópia?</Link>
   </Styling>
  </>
 );
};

export default Ficha;
