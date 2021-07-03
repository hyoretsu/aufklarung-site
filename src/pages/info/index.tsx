import Link from '@link';
import { NextSeo } from 'next-seo';

import { Styling, Section } from '@styles/info';

const description = 'Informações-guia para autores, leitores e bibliotecários.';
const title = 'Informações';

const Info: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <Styling>
    <h2>Informação para autores, leitores e bibliotecários</h2>
    <Section>
     <h3>Para Leitores</h3>
     <p>
      Convidamos os leitores a se cadastrarem no serviço de notificação de publicação da revista. Clique em{' '}
      <Link href="/login">Cadastro</Link> no menu superior da página. O cadastro permitirá ao leitor receber o sumário
      via e-mail a cada edição publicada.
     </p>
    </Section>
    <Section>
     <h3>Para Autores</h3>
     <p>
      Deseja enviar contribuições à revista? Convidamos todos a conferirem as informações disponíveis na seção{' '}
      <Link href="/about">Sobre</Link>, bem como as <Link href="/submissions">diretrizes para autores</Link>. É
      necessário que os autores se cadastrem no sistema antes de submeterem um artigo; caso já tenha se cadastrado,
      basta acessar o sistema e iniciar o processo de submissão.
     </p>
    </Section>
    <Section>
     <h3>Para Bibliotecários</h3>
     <p>
      Convidamos as bibliotecas a listar revistas de Acesso Livre em seus catálogos de revistas eletrônicas. Este
      sistema de publicação é desenvolvido também para ser hospedado e operado por bibliotecas, em apoio ao trabalho de
      publicação das revistas do seu corpo acadêmico. (saiba mais acessando a página oficial do{' '}
      <Link href="http://pkp.sfu.ca/ojs">Open Journal Systems</Link>)
     </p>
    </Section>
   </Styling>
  </>
 );
};

export default Info;
