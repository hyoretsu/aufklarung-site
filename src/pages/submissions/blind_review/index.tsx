import { NextSeo } from 'next-seo';

import { Styling } from '@styles/submissions/blind_review';

const description =
 'Instruções sobre como adequar seu artigo ao modelo de avaliação por pares cega, adotada pela revista.';
const title = 'Avaliação por Pares Cega';

const BlindReview: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <Styling>
    <h2>Assegurando a Avaliação por Pares Cega</h2>
    <p>
     Para assegurar a integridade da avaliação por pares cega, para submissões à revista, deve-se tomar todos os
     cuidados possíveis para não revelar a identidade de autores e avaliadores entre os mesmos durante o processo. Isto
     exige que autores, editores e avaliadores (passíveis de enviar documentos para o sistema, como parte do processo de
     avaliação) tomem algumas precauções com o texto e as propriedades do documento:
    </p>
    <ol>
     <li>
      <p>
       Os autores do documento excluíram do texto nomes, substituindo com "Autor" e o ano em referências e notas de
       rodapé, em vez de nomes de autores, título do artigo, etc.
      </p>
     </li>
     <li>
      <p>
       Em documentos do Microsoft Office, a identificação do autor deve ser removida das propriedades do documento (no
       menu Arquivo {'>'} Propriedades), iniciando em Arquivo, no menu principal, e clicando na sequência: Arquivo {'>'}{' '}
       Salvar como... {'>'} Ferramentas (ou Opções no Mac) {'>'} Opções de segurança... {'>'} Remover informações
       pessoais do arquivo ao salvar {'>'} OK {'>'} Salvar.
      </p>
     </li>
    </ol>
   </Styling>
  </>
 );
};

export default BlindReview;
