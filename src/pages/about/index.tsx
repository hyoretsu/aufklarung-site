import Link from '@link';
import { NextSeo } from 'next-seo';

import LocationInfo from '@components/LocationInfo';

import { Styling } from '@styles/about';

const description = 'Informações sobre a Revista Aufklärung.';
const title = 'Sobre a revista';

const About: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
   <Styling>
    <section>
     <h4>Foco e Escopo</h4>
     <p>
      <strong>Aufklärung, revista de filosofia</strong> (Qualis B1, DOI 10.18012/ARF), tem foco na publicação de artigos
      na área de filosofia, ou que sejam relevantes para a pesquisa na mesma. Tem como objetivos: contribuir para a
      formação acadêmica de profissionais de filosofia e áreas afins; contribuir para a efetivação de políticas na área
      de filosofia, ao propiciar a divulgação de resultados originados a partir de pesquisas filosóficas voltadas para a
      pós-graduação com base em princípios éticos transparentes; e constituir-se como um espaço público para o debate
      entre pesquisadores do Brasil e do exterior.
     </p>
     <p>
      A Revista Aufklärung adota o processo de revisão cega pelos pares (double blind peer review) e tem como base
      revisores especializados a partir da base de Currículos da Plataforma Lattes, preferencialmente membros ligados à
      pós-graduação na área. Ela é editada pelo Grupo de Pesquisa Teoria Crítica e Hermenêutica (GPTeCH/CNPq/UFPB).
     </p>
     <p>Área da Revista: Filosofia [70100004 CAPES/CNPq]</p>
    </section>
    <section>
     <h4>Processo de Avaliação pelos Pares</h4>
     <p>
      Essa revista é "peer reviewed", e segue o processo de avaliação cega (double blind review) por pares. Nesse
      processo, o artigo é avaliado por dois avaliadores, tendo em vista o cumprimento das políticas editoriais da
      revista, em geral, e das políticas de sessões, em particular. O artigo enviado ao avaliador é tornado cego,
      impossibilitando qualquer identificação por meio eletrônico, e submetido pelo sistema interno ou por email para 2
      avaliadores especialistas na área temática do artigo. O resultado pode ser "aprovado", "reprovado" e "aprovado com
      modificações obrigatórias/sugeridas". Em caso de empate no resultado, o artigo é submetido a um terceiro avaliador
      para dirimir a dúvida. Com base no resultado da avaliação cega, a revista decide pela publicação ou não do artigo,
      considerando os itens de de originalidade, relevância e mérito científico especificamente dentro da área de
      atuação da revista, podendo sugerir agendamentos, em caso de aprovação, para edições futuras. Artigos de autores
      convidados não são avaliados pelo sistema de avaliação cega. Submissões reprovadas não poderão ser submetidas uma
      segunda vez à revista.
     </p>
    </section>
    <section>
     <h4>Periodicidade</h4>
     <p>Periodicidade: Quadrimestral (2017)</p>
     <p>Data das edições: Abril, Agosto e Dezembro</p>
     <p>Fluxo de submissão de artigos: contínuo</p>
     <p>
      *Adicionalmente, a qualquer tempo poderão ser lançados números temáticos, a critério da revista, e/ou a cargo de
      editores especiais, oriundos de eventos de expressão acadêmica que justifiquem a edição.
     </p>
    </section>
    <section>
     <h4>Política de Acesso Livre</h4>
     <p>
      Esta revista oferece acesso livre imediato ao seu conteúdo, seguindo o princípio de que disponibilizar
      gratuitamente o conhecimento científico ao público proporciona maior democratização mundial do conhecimento. A
      Aufklärung oferece acesso livre e irrestrito aos usuários, não necessitando de cadastro prévio para leituras dos
      conteúdos publicados. Ela é regida por uma licença{' '}
      <Link href="https://creativecommons.org/licenses/by/4.0/">
       Creative Commons Attribution 4.0 International (CC BY 4.0)
      </Link>
     </p>
    </section>
    <section>
     <h4>Exchanges</h4>
     <ul>
      <li>
       <Link href="http://www.ojs.ufpi.br/index.php/pensando/issue/current/showToc">
        PENSANDO: Revista de Filosofia
       </Link>
       <p>Mestrado em Ética e Epistemologia da UFPI</p>
       <p>ISSN 2178-843X</p>
      </li>
      <li>
       <Link href="http://www.revistaclareira.com.br/index.php/clareira/index">
        CLAREIRA: Revista de Filosofia da Região Amazônica
       </Link>
       <p>Departamento de Filosofia da Universidade Federal de Rondônia</p>
       <p>ISSN 2359-1951</p>
      </li>
     </ul>
    </section>
    <section>
     <h4>Taxas de publicação (APCs)</h4>
     <p>
      Esta revista declara open-access aos seus conteúdos imediatamente para uso do público em geral. Open access não
      significa "produção livre de custos". Então, tenha em mente que alguns trabalham para que o conteúdo seja
      disponibilizado gratuitamente para a comunidade em geral.
     </p>
     <p>
      Não obstante os custos envolvidos no processo de produção geral da revista, declaramos que todo o processo de
      submissão ocorre de forma gratuita para os autores e nenhuma taxa é cobrada em qualquer parte do processo de
      publicação dentro de seus prazos normais de avaliação.
     </p>
     <p>
      <strong>Nota</strong>: Os prazos para avaliação de artigos submetidos duram, em média, 6 semanas, dado que
      trabalhamos com inteira mão de obra especializada de forma gratuita e de boa vontade dos contribuidores. Se
      autores ou instituições, entretanto, desejam prazos menores para avaliação de artigos, taxas podem ser cobradas
      com o único e exclusivo fim de tornar o processo avaliativo menor. Contate o editor para cotação.
     </p>
    </section>
    <section>
     <h4>Política contra plágio</h4>
     <p>
      Esta revista adere ao sistema <Link href="http://www.ithenticate.com/">iThenticate</Link> para verificar a
      autenticidade dos manuscritos a ela submetidos.
     </p>
    </section>
    <section>
     <h4>Ética na Publicação e Boas Práticas</h4>
     <p>
      A qualidade dos artigos depende diretamente do emprego de padrões éticos e boas práticas para a publicação
      acadêmica. A Revista Aufklärung está comprometida com o uso de padrões internacionais em todas as etapas do
      processo de publicação. Autores, Editores, Avaliadores, Editoras são obrigados a seguir as Boas Práticas na
      Publicação, evitando práticas de plágio, autoplágio, publicações fantasmas, difamação e violação de direitos
      autorais, em quaisquer níveis ou quantidades, detectados em qualquer etapa do processo de publicação.
     </p>
     <p>
      Com o objetivo de resguardar os direitos de avaliadores, autores e instituições envolvidas no processo de
      publicação, a avaliação dos manuscritos submetidos é regida pelos seguintes princípios: impessoalidade,
      imparcialidade, transparência e confidencialidade.
     </p>
     <p>
      Por estar indexada no DOAJ, declaramos que a Revista Aufklärung segue, de forma ampla e irrestrita, todos os{' '}
      <Link href="https://doaj.org/bestpractice">princípios e boas práticas estabelecidos pelo DOAJ</Link>.
     </p>
     <p>
      Declaramos, publicamente, que somos membros do Sistema CrossRef, e aderimos ao uso da máquina antiplágio
      iThenticate.
     </p>
    </section>
    <section>
     <h4>Conflito de Interesses</h4>
     <p>
      A Revista Aufklärung, no cumprimento das Boas Práticas na Publicação, solicita aos Consultores que, ao receber um
      manuscrito para avaliação, verifiquem se ocorre qualquer uma das situações abaixo que definem um conflito de
      interesse. Caso ocorra, solicitamos que nos seja comunicado sobre a impossibilidade de emitir o parecer
      solicitado. Situações que caracterizam um conflito de interesse:
     </p>
     <ol>
      <li>
       <span>
        houve colaboração com o autor na elaboração do trabalho submetido, ou em atividades de pesquisa (Ex.: Participam
        do mesmo Grupo) que resultaram na elaboração do manuscrito;
       </span>
      </li>
      <li>
       <span>trata-se de relação de afinidade do tipo orientador/orientado(a);</span>
      </li>
      <li>
       <span>existe algum interesse na publicação para fins de promoção pessoal, institucional ou comercial;</span>
      </li>
      <li>
       <span>existe alguma relação familiar ou afetiva com o autor/es do trabalho;</span>
      </li>
      <li>
       <span>
        qualquer outra situação que possa caracterizar impedimento para a emissão de um parecer neutro para o
        manuscrito.
       </span>
      </li>
     </ol>
    </section>
    <section>
     <h4>Classificação Qualis Capes / Brasil</h4>
     <strong>CLASSIFICAÇÃO CAPES/BRASIL</strong>
     <p>
      Área de classificação da Revista (Principal): <strong>Filosofia [70100004 CAPES/CNPq]</strong>
     </p>
     <p>
      Classificação 2013-2016: <strong>B1</strong>
     </p>
     <p>
      Outras áreas: Favor consultar a Plataforma Sucupira, seção{' '}
      <Link href="https://sucupira.capes.gov.br/sucupira/public/consultas/coleta/veiculoPublicacaoQualis/listaConsultaGeralPeriodicos.jsf">
       Qualis
      </Link>
      .
     </p>
    </section>
    <section>
     <h4>Sponsors</h4>
     <p>
      Esta Revista foi editada inteiramente com recursos próprios até a data de [Junho de 2017], com hospedagem
      disponibilizada pelo Servidor Central da UFPB.
     </p>
     <p>
      EM 2017/18 recebe apoio financeiro de número [441153/2017-8], pela Chamada CNPq/CAPES No 26/2017 – Programa
      Editorial":
     </p>
     <ol>
      <li>
       <strong>Conselho Nacional de Desenvolvimento Científico e Tecnológico - CNPq (2017/18)</strong>
       <p>
        Visit at: <Link href="http://www.cnpq.br/">cnpq.br</Link>
       </p>
       <p>Nota: Em Julho/2019 o Recurso ainda não foi empenhado</p>
      </li>
      <li>
       <strong>Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - CAPES</strong>
       <p>
        Visit at: <Link href="http://www.capes.gov.br/">capes.gov.br</Link>
       </p>
      </li>
     </ol>
    </section>
   </Styling>
  </>
 );
};

export default About;
