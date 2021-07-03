import Link from '@link';
import { NextSeo } from 'next-seo';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

import LocationInfo from '@components/LocationInfo';
import Section from '@components/News';

const description = 'Notícias sobre a Revista Aufklärung.';
const title = 'Notícias';

export const NewsArchive: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
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
   <Section>
    <h3>
     <Link href="/news/23">New edition published!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2018-09-30</span>
    </div>
    <p>v. 5, n. 2 just published on Sep 30!</p>
    <Link href="/news/23">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/22">v. 4, n. 2 publicado</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2017-08-03</span>
    </div>
    <p>v. 4, n. 2 acaba de ser publicado.</p>
    <Link href="/news/22">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/21">Novo QUALIS da Revista Aufklärung!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2017-06-10</span>
    </div>
    <p>Nova classificação da Revista Aufklärung para o ano de 2016!</p>
    <Link href="/news/21">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/20">v. 4, edição especial publicada</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2017-05-07</span>
    </div>
    <p>Uma edição especial com o tema Teoria Crítica, Política e Direito foi publicada.</p>
    <Link href="/news/20">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/19">v. 4, n. 1 publicado</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2017-04-29</span>
    </div>
    <p>v. 4, n. 1 acaba de ser publicado.</p>
    <Link href="/news/19">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/18">Edição de Abril está a caminho</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2017-04-08</span>
    </div>
    <p>Edição de Abril está a caminho. Aguardem em breve!</p>
    <Link href="/news/18">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/17">Nova edição publicada!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2016-10-07</span>
    </div>
    <p>v. 3 n. 2 acaba de ser publicado.</p>
    <Link href="/news/17">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/16">Aufklärung se prepara para mais uma edição!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2016-10-06</span>
    </div>
    <p>Aufklärung se prepara para mais uma edição, e completa um ciclo de três anos ininterruptos de publicação!</p>
    <Link href="/news/16">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/15">Nova edição publicada!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2016-04-20</span>
    </div>
    <p>Temos o prazer de anunciar a publicação de mais uma edição da Revista Aufklärung. Confira detalhes!</p>
    <Link href="/news/15">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/14">Aufklärung is now powered by iThenticate: inovando sempre!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2016-04-12</span>
    </div>
    <p>Aufklärung garante originalidade dos seus artigos publicados com o uso do sistema antiplágio iThenticate.</p>
    <Link href="/news/14">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/13">Aufklärung é indexada no Web of Science™ Thomson Reuters!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-12-29</span>
    </div>
    <p>Aufklärung foi indexada no Web of Science, Thomson Reuters Master Journal List. Confira detalhes abaixo.</p>
    <Link href="/news/13">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/12">Nova edição publicada!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-10-02</span>
    </div>
    <p>v. 2, n. 2 publicado na data de 2 de Outubro de 2015!</p>
    <Link href="/news/12">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/11">Contagem regressiva!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-09-08</span>
    </div>
    <p>Já estamos em contagem regressiva para o lançamento da próxima edição!</p>
    <Link href="/news/11">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/10">Aufklärung é indexada em CLASE!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-08-10</span>
    </div>
    <p>Aufklärung é indexada em CLASE: Citas Latinoamericanas en Ciencias Sociales y Humanidades - UNAM</p>
    <Link href="/news/10">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/9">Aufklärung é indexada em ERIH PLUS</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-06-24</span>
    </div>
    <p>Aufklärung conseguiu aprovação e foi indexada pela ERIH PLUS em 24 de Junho de 2015.</p>
    <Link href="/news/9">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/8">Revista Pensando publica mais uma edição</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-04-01</span>
    </div>
    <p>A Revista Pensando, da Seção Permutas Eletrônicas de Revistas, publica mais uma edição. Confira a seguir.</p>
    <Link href="/news/8">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/7">Estatísticas parciais de acessos à revista</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-01-09</span>
    </div>
    <p>Relatório parcial de acessos gerado pelo Google Analytics.</p>
    <Link href="/news/7">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/6">Aufklärung: 1 ano de vida e nas redes sociais</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2015-01-09</span>
    </div>
    <p>Aufklärung completa 1 ano e comemora nas redes sociais!</p>
    <Link href="/news/6">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/5">Nova edição publicada!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2014-10-05</span>
    </div>
    <p>
     Às 11:11:11 do dia 0 de Outubro de 2014, temos o prazer de anunciar a publicação de mais uma edição da Revista
     Aufklärung. Confira detalhes!
    </p>
    <Link href="/news/5">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/4">Estatísticas de acessos</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2014-09-05</span>
    </div>
    <p>Mostramos, em forma de gráfico, um relatório parcial de acessos ao site da revista.</p>
    <Link href="/news/4">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/3">Aufklärung está indexada pela EBSCO!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2014-06-26</span>
    </div>
    <p>Aufklärung está orgulhosa de se tornar parte da família de produtos acadêmicos EBSCO!</p>
    <Link href="/news/3">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/2">Aufklärung registra seu próprio DOI</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2014-06-26</span>
    </div>
    <p>Aufklärung registra seu próprio DOI e se filia ao CrossRef.</p>
    <Link href="/news/2">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
   <Section>
    <h3>
     <Link href="/news/1">Confirmado! Aufklärung terá sua versão em papel!</Link>
    </h3>
    <div>
     <FaCalendarAlt />
     <span>2014-06-26</span>
    </div>
    <p>Aufklärung terá sua versão em papel e isto se estenderá à edição que já foi publicada!</p>
    <Link href="/news/1">
     <span>Saiba mais</span>
     <FaChevronRight />
    </Link>
   </Section>
  </>
 );
};

export default NewsArchive;
