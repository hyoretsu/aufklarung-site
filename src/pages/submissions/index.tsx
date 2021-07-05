import Link from '@link';
import { NextSeo } from 'next-seo';
import { FaCheck } from 'react-icons/fa';

import LocationInfo from '@components/LocationInfo';

import { Styling, Conditions, Guidelines, SubList, Section } from '@styles/submissions';

const description = 'Diretrizes para submissão de papéis para a revista.';
const title = 'Submissões';

const Submission: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
   <Styling>
    <div>
     <p>
      <Link href="https://periodicos.ufpb.br/ojs2/index.php/arf/submission/wizard">Fazer nova submissão</Link>
      {' ou '}
      <Link href="https://periodicos.ufpb.br/ojs2/index.php/arf/submissions">ver suas submissões pendentes</Link>.
     </p>
    </div>
    <Conditions>
     <h3>Condições para submissão</h3>
     <p>
      Como parte do processo de submissão, os autores são obrigados a verificar a conformidade da submissão em relação a
      todos os itens listados a seguir. As submissões que não estiverem de acordo com as normas serão devolvidas aos
      autores.
     </p>
     <ol>
      <li>
       <FaCheck />
       <span>
        A contribuição é: <strong>original e inédita</strong> e{' '}
        <strong>não está sendo simultaneamente submetida para avaliação e publicação a outra revista</strong>. Caso
        esteja, deve-se justificar em "Comentários ao editor" a atual situação da submissão.
       </span>
      </li>
      <li>
       <FaCheck />
       <span>O arquivo da submissão está em formato Microsoft Word, LibreOffice ou RTF.</span>
      </li>
      <li>
       <FaCheck />
       <span>URLs para as referências foram informadas quando possível.</span>
      </li>
      <li>
       <FaCheck />
       <span>O arquivo de texto:</span>
       <ul>
        <li>
         <span>tem espaço de 1,5 e fonte de tamanho 12</span>
        </li>
        <li>
         <span>
          emprega <i>itálico</i> ao invés de <u>sublinhado</u> (exceto em endereços URL)
         </span>
        </li>
        <li>
         <span>
          emprega <i>itálico</i> ao invés de <b>negrito</b> em todas as partes do texto, incluindo as referências
         </span>
        </li>
        <li>
         <span>tem suas figuras e tabelas inseridas no próprio texto, quando for o caso</span>
        </li>
        <li>
         <span>todos os títulos e subtítulos estão em fonte normal (não estão em caixa alta/letra maiúscula)</span>
        </li>
       </ul>
      </li>
      <li>
       <FaCheck />
       <span>
        O texto segue os padrões de estilo e requisitos bibliográficos descritos em{' '}
        <Link href="#diretrizes">Diretrizes para Autores</Link>.
       </span>
      </li>
      <li>
       <FaCheck />
       <span>
        Em caso de submissão a uma seção com avaliação pelos pares, (ex.: Seção <i>Artigos</i>) as instruções
        disponíveis em <Link href="/submissions/blind_review">Assegurando a Avaliação pelos Pares Cega</Link> foram
        seguidas.
       </span>
      </li>
      <li>
       <FaCheck />
       <span>A submissão inclui todos os dados pessoais do Formulário de Cadastro no site da Revista, tais como:</span>
       <ul>
        <li>afiliação institucional;</li>
        <li>titulação;</li>
        <li>endereço;</li>
        <li>e-mail;</li>
        <li>biografia resumida</li>
        <li>dados de coautores, quando for o caso</li>
       </ul>
      </li>
      <li>
       <FaCheck />
       <span>O autor oferece:</span>
       <ul>
        <li>
         um link para a confirmação das informações de CV (<i>Curriculum vitae</i>) na Plataforma de Currículo LATES,
         dispensável para autores estrangeiros sem vínculo institucional ou com pesquisas financiadas no Brasil
        </li>
        <li>um link de registro na Plataforma ORCID.</li>
       </ul>
       <span>O nome de autor usado na submissão deve ser o mesmo usado nos registros públicos dessas plataformas.</span>
      </li>
     </ol>
    </Conditions>
    <Guidelines id="diretrizes">
     <h3>Diretrizes para Autores</h3>
     <ol>
      <li>
       <span>Formatação</span>
       <SubList>
        <li>
         <span>
          O manuscrito deve ter o formato .doc, .rtf ou .odt, nunca .pdf, e conter entre 15 e 25 laudas. O tamanho da
          página deve ser A4. As margens esquerda e superior de 3 cm e direita e inferior de 2 cm. O espaçamento entre
          as linhas deve ser de 1.5 pt. A fonte geral deve ser Times New Roman, de tamanho 12 pt. As notas de rodapé,
          assim como citações, devem ser formatadas automaticamente, com tamanho 10 pt. Títulos e subtítulos devem estar
          em negrito.
         </span>
        </li>
        <li>
         <span>
          O manuscrito deve conter as seguintes partes: título; resumo, acompanhado de 3 a 5 palavras-chave; traduções
          para inglês; corpo do artigo; e referências bibliográficas. Nota: os dados relativos às credenciais do autor
          devem ser enviados em arquivo separado, conforme instruído no item 2 abaixo.
         </span>
        </li>
        <li>
         <span>
          O manuscrito deve ser ser original ou de revisão literária que atualize o estado da arte do tema, tratar de
          temática na área de Filosofia ou possuir vinculação com a área filosófica. Deve cumprir critérios gerais de
          qualidade e formatação, primando pela ética na publicação científica.
         </span>
        </li>
       </SubList>
      </li>
      <li>
       <span>Procedimentos para submissão</span>
       <SubList>
        <li>
         <span>
          Para submeter um artigo, o autor precisa criar uma conta na revista, cujo cadastro é permanente e servirá para
          futuras submissões, bem como acompanhamento de todo o processo de submissão do artigo.
         </span>
        </li>
        <li>
         <span>
          No ato da submissão do artigo, o autor deve enviar uma cópia do artigo sem identificação e um arquivo com suas
          credenciais como documento suplementar.
         </span>
        </li>
        <li>
         <span>
          Ao concluir o processo de submissão, o autor receberá automaticamente um e-mail de confirmação. Este email
          será o documento comprovatório de submissão, e servirá para os protocolos oficiais de comprovação para
          currículo.
         </span>
        </li>
       </SubList>
      </li>
      <li>
       <span>Processo de avaliação e parecer</span>
       <p>
        Os manuscritos serão avaliados pelo processo de{' '}
        <Link href="/submissions/blind_review">avaliação cega dupla pelos pares</Link> (double blind peer review). Os
        avaliadores podem ser membros do Conselho da Revista ou membros “ad hoc” escolhidos na Plataforma Lattes/CNPq
        pelo critério de titulação acadêmica igual ou superior à do autor avaliado, preferencialmente ligado a programa
        de pós-graduação com pesquisa na área. Revisões sugeridas de forma ou conteúdo devem ser providenciadas pelos
        autores no prazo estabelecido pela revista. O prazo desejado para avaliação dos textos é de até 30 dias. Textos
        reprovados não podem ser submetidos novamente para avaliação.
       </p>
      </li>
      <li>
       <span>Modelos para elaboração de referências</span>
       <SubList>
        <li>
         <span>As referências devem constar em ordem alfabética pelo sobrenome do primeiro autor.</span>
        </li>
        <li>
         <span>Os títulos de periódicos deverão ser escritos por extenso, e nunca devem ser abreviados.</span>
        </li>
        <li>
         <span>Exemplos:</span>
         <ul>
          <li>
           <i>
            <strong>Livro com 1~3 autores</strong>
           </i>
           <p>
            SOBRENOME, Nome. <i>Título da obra</i>. Edição. Local: Editora, data. Volume ou total de páginas. (Série ou
            Coleção)
           </p>
           <p>
            <strong>Obs: </strong>Em documentos com até 3 autores, indicar os três separados por “;” (ponto e vírgula).
            Nunca utilizar "e", "and" ou "&";
           </p>
          </li>
          <li>
           <i>
            <strong>Livro com mais de 3 autores</strong>
           </i>
           <p>
            SOBRENOME1, Nome1 et al. <i>Título da obra</i>. Edição. Local: Editora, data. Volume ou total de páginas.
            (Série ou Coleção)
           </p>
          </li>
          <li>
           <i>
            <strong>Capítulo de livro</strong>
           </i>
           <p>
            SOBRENOME, Nome. Título do capítulo: subtítulo. In: SOBRENOME, Nome. <i>Título da obra</i>. Local: Editora,
            data. Páginas inicial-final do capítulo.
           </p>
          </li>
          <li>
           <i>
            <strong>Dissertações e Teses</strong>
           </i>
           <p>
            SOBRENOME, Nome. Título da tese ou dissertação: subtítulo. Data de defesa. Total de páginas ou folhas.
            Dissertação ou Tese (Mestrado ou Doutorado em área de concentração) - Departamento ou Centro, Instituição,
            Local, ano de defesa.
           </p>
          </li>
          <li>
           <i>
            <strong>Trabalho apresentado em congressos, simpósios e similares</strong>
           </i>
           <p>
            SOBRENOME, Nome. Título do trabalho. In: <i>Título do evento</i>, nº, data, local de realização. Canais...
            ou Resumos... ou Proceedings... Local de publicação: Editora, data. Páginas inicial-final do trabalho.
           </p>
           <p>
            <strong>Obs: </strong>Em documentos com até 3 autores, indicar os três separados por “;” (ponto e vírgula).
            Nunca utilizar "e", "and" ou "&";
           </p>
          </li>
          <li>
           <i>
            <strong>Trabalhos acadêmicos e apostilas</strong>
           </i>
           <p>
            SOBRENOME, Nome. <i>Título</i>: subtítulo. Local: Departamento, data. Número de páginas.
           </p>
           <p>
            <strong>Obs:</strong> Trabalho de Conclusão de Curso ou Trabalho de Graduação ou Relatório de Estágio ou
            Apostila.
           </p>
          </li>
          <li>
           <i>
            <strong>Publicações periódicas (revistas científicas em geral, jornais)</strong>
           </i>
           <p>
            SOBRENOME, Nome. Título do artigo. <i>Título do periódico</i>, Local, volume, número, páginas inicial-final
            do artigo, data.
           </p>
          </li>
          <li>
           <i>
            <strong>Sites da Internet</strong>
           </i>
           <p>
            SOBRENOME, Nome ou AUTORIA INSTITUCIONAL. <i>Título</i>. Disponível em: endereço eletrônico. Acesso em:
            data.
           </p>
          </li>
         </ul>
        </li>
       </SubList>
      </li>
      <li>
       <span>Notas E Citações</span>
       <p>
        Devem seguir a NBR 10520/2002 - ABNT, cujo guia para padronização de citações está disponível{' '}
        <Link href="https://www.bco.ufscar.br/arquivos/manual-bco-nbr-10520-2002.pdf">neste link</Link>.
       </p>
      </li>
      <li>
       <span>Prevenção contra plágio e outros</span>
       <p>
        Todos os originais apresentados são previamente submetidos a motores de verificação de plágio. Em casos de
        percentagem superior a 40% os autores são convidados a se manifestarem sobre. A veracidade de fontes, conceitos
        e opiniões emitidos nos artigos são de responsabilidade dos autores.
       </p>
      </li>
     </ol>
    </Guidelines>
    <Section>
     <h3>Seções aplicáveis para submissões</h3>
     <ul>
      <li>
       <h3>Editorial</h3>
       <p>Seção administrada exclusivamente pelo editor principal e/ou editores especiais.</p>
      </li>
      <li>
       <h3>Artigos</h3>
       <p>
        Os artigos submetidos para esta seção devem ser inéditos e, preferencialmente, resultado de pesquisas ou
        revisões acadêmicas relacionadas aos projetos de pesquisa dos autores. Devem estar relacionados com a área de
        abrangência da revista (Filosofia) ou áreas interdisciplinares, ou ainda versarem sobre uma livre revisão do
        estado da arte de temas considerados relevantes a partir das áreas de pesquisa dos autores, em particular. Todas
        as submissões devem seguir o padrão descrito nas <Link href="#diretrizes">diretrizes para autores</Link>.
       </p>
      </li>
      <li>
       <h3>Entrevistas</h3>
       <p>
        Seção destinada à publicação de entrevistas com pesquisadores de destaque na área acadêmica da revista, sobre
        temas de interesse para a comunidade filosófica que versem sobre questões da atualidade ou de pertinência
        histórica, ou considerados relevantes para a pesquisa filosófica em geral. Ela visa dar espaço a um debate
        profícuo e atualizado que, por vezes, são difíceis de serem sistematizados em forma de artigo ou ensaio.
       </p>
       <p>
        Apresentação: As entrevistas devem conter um resumo em português e inglês, palavras-chave e keywords, além de
        uma apresentação do auto/tema da entrevista. O texto deverá conter a mesma formatação para artigos, descrita nas{' '}
        <Link href="#diretrizes">diretrizes para autores</Link>.
       </p>
      </li>
      <li>
       <h3>Traduções</h3>
       <p>
        Seção destinada à tradução de textos inéditos na área acadêmica da revista, ou considerados relevantes para a
        pesquisa filosófica em geral. Ela visa dar um suporte à ausência de traduções sistemáticas de textos de uso
        corrente em outras línguas que, por motivos diversos, tardam em aparecer traduzidos para a língua portuguesa. As
        traduções devem estar sempre acompanhadas de: suas publicações originais; e uma autorização expressa, em PDF, do
        autor/editora detentor dos direitos autorais, quando for o caso. Deve conter, no máximo, 30 páginas, mas casos
        extras podem ser analisados. O texto será apreciado por um revisor do conselho editorial conhecedor da língua
        traduzida.
       </p>
       <p>
        Apresentação: É necessário um resumo/comentário breve (de até 100 palavras e 3 palavras-chaves) e suas traduções
        para o inglês. Deve seguir também a mesma formatação para artigos, descritos nas{' '}
        <Link href="#diretrizes">diretrizes para autores</Link>.
       </p>
      </li>
      <li>
       <h3>Resenhas</h3>
       <p>
        Esta seção tem por objetivo a apresentação crítica de obras relevantes na área de filosofia. A obra resenhada
        deve ter sido publicada há, no máximo, 5 anos, preferivelmente. Exceções serão consideradas e podem ser
        justificadas pela relevância da obra. Deve apresentar, além de uma descrição regular da obra, mas não
        necessariamente, uma intenção crítica com as posições defendidas pelo autor da obra resenhada.
       </p>
       <p>
        Forma de apresentação: O texto deve ter um título, um resumo/comentário breve (de até 100 palavras e de 3 a 5
        palavras-chaves) e suas traduções para o inglês (título, resumo e palavras-chave).
       </p>
      </li>
      <li>
       <h3>Notícias acadêmicas</h3>
       <p />
      </li>
      <li>
       <h3>Ensaios</h3>
       <p />
      </li>
     </ul>
    </Section>
    <Section>
     <h3>Declaração de Direito Autoral</h3>
     <strong>Política de Direito Autoral para os itens publicados pela Revista:</strong>
     <ol>
      <li>
       <span>
        Esta revista é regida por uma licença da Creative Commons aplicada a revistas eletrônicas. Esta licença pode ser
        lida no link a seguir:{' '}
        <Link href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</Link>{' '}
        (CC BY 4.0).
       </span>
      </li>
      <li>
       <span>
        Consonante a essa politica, a revista declara que os autores são os detentores do copyright de seus artigos sem
        restrição, e podem depositar o pós-print de seus artigos em qualquer repositório ou site.
       </span>
      </li>
     </ol>
     <strong>Política de Direito de Uso dos Metadados para informações contidas nos itens do repositório:</strong>
     <ol>
      <li>
       <span>
        Qualquer pessoa e/ou empresa pode acessar os metadados dos itens publicados gratuitamente e a qualquer tempo.
       </span>
      </li>
      <li>
       <span>
        Os metadados podem ser usados sem licença prévia em qualquer meio, mesmo comercialmente, desde que seja
        oferecido um link para o <strong>OAI Identifier</strong> ou para o artigo que ele descreve, sob os termos da
        licença CC BY aplicada à revista.
       </span>
      </li>
     </ol>
     <p>
      Os autores que têm seus trabalhos publicados concordam que com todas as declarações e normas da Revista e assumem
      inteira responsabilidade pelas informações prestadas e ideias veiculadas em seus artigos, em conformidade com a
      Política de Boas Práticas da Revista.
     </p>
    </Section>
    <Section>
     <h3>Política de Privacidade</h3>
     <p>
      Todos os dados, além de nomes e endereços informados nesta revista serão usados exclusivamente para os serviços
      por ela prestados, ficando indisponíveis para qualquer fim por terceiros.
     </p>
    </Section>
   </Styling>
  </>
 );
};

export default Submission;
