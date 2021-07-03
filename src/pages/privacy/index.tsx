import { NextSeo } from 'next-seo';

import LocationInfo from '@components/LocationInfo';

import { Styling } from '@styles/privacy';

const description =
 'Todos os dados informados nesta revista serão usados exclusivamente para os serviços por ela prestados, ficando indisponíveis para qualquer fim por terceiros.';
const title = 'Declaração de Privacidade';

const Privacy: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
   <Styling>
    <p>{description}</p>
   </Styling>
  </>
 );
};

export default Privacy;
