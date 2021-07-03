import Link from '@link';
import { NextSeo } from 'next-seo';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

import Issue from '@components/Issue';
import Section from '@components/News';

import { Styling, HomepageNews } from '@styles/index';

import appPackageJson from '../../package.json';
import { siteName as title } from './_document';

const Homepage: React.FC = () => {
 const { description } = appPackageJson;

 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} />
   <Styling>
    <HomepageNews>
     <Section>
      <h3>
       <Link href="/welcome">Bem-vindo!</Link>
      </h3>
      <div>
       <FaCalendarAlt />
       <span>2019-10-28</span>
      </div>
      <p>
       A <i>Revista Aufklärung</i> adota o processo de revisão cega pelos pares (double blind peer review) e tem como
       base revisores especializados a partir da base de Currículos da Plataforma Lattes, preferencialmente membros
       ligados à pós-graduação na área.
      </p>
      <Link href="/info">
       <span>Saiba mais</span>
       <FaChevronRight />
      </Link>
     </Section>
     <Section>
      <h3>
       <Link href="/news/24">Journal Aufklärung is now supported by CAPES/CNPq</Link>
      </h3>
      <div>
       <FaCalendarAlt />
       <span>2018-11-05</span>
      </div>
      <p>
       Journal Aufklärung got APPROVAL in the Public Edict "Chamada CNPq/CAPES No 26/2017 – Programa Editorial"
       [441153/2017-8].
      </p>
      <Link href="/news/24">
       <span>Saiba mais</span>
       <FaChevronRight />
      </Link>
     </Section>
    </HomepageNews>
    <h3>Edição Atual</h3>
    <Issue />
   </Styling>
  </>
 );
};

export default Homepage;
