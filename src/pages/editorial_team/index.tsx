import Link from '@link';
import { NextSeo } from 'next-seo';

import LocationInfo from '@components/LocationInfo';

import { Styling } from '@styles/editorial_team';

const description = 'Pessoas que fazem parte da equipe da Revista Aufklärung.';
const title = 'Equipe Editorial';

const EditorialTeam: React.FC = () => {
 return (
  <>
   <NextSeo description={description} openGraph={{ description, title }} title={title} />
   <LocationInfo />
   <Styling>
    <section>
     <h4>Editor</h4>
     <div>
      <Link href="mailto:blsic@hotmail.com">Prof. Dr. Betto Leite da Silva</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
    </section>
    <section>
     <h4>Editores Associados</h4>
     <div>
      <Link href="mailto:andersondarc@uai.com.br">Prof. Dr. Anderson D'Arc Ferreira</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:robsonccordeiro@bol.com.br">Prof. Dr. Robson Costa Cordeiro</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
    </section>
    <section>
     <h4>Editor de Design Gráfico e Editoração Eletrônica</h4>
     <div>
      <Link href="mailto:hyoretsu@gmail.com">Aran Leite de Gusmão</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
    </section>
    <section>
     <h4>Conselho Editorial</h4>
     <div>
      <Link href="mailto:andersondarc@uai.com.br">Prof. Dr. Anderson D'Arc Ferreira</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:angmich@tin.it">Profa. Dra. Angela Michelis</Link>
      <p>, University of Turin, UNITO, Italy</p>
     </div>
     <div>
      <Link href="mailto:iulianapostu76@gmail.com">Prof. Dr. Apostu Iulian</Link>
      <p>, University of Bucharest, UniBuc, Romania</p>
     </div>
     <div>
      <Link href="mailto:campillo@um.es">Prof. Dr. Antonio Campillo Meseguer</Link>
      <p>, Universidad de Murcia, Spain</p>
     </div>
     <div>
      <Link href="mailto:blsic@hotmail.com">Prof. Dr. Betto Leite da Silva</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:candida.jaci@gmail.com">Profa. Dra. Candida Jaci de Sousa Melo</Link>
      <p>, Université du Quebec à Montréal/UFPB, Canada</p>
     </div>
     <p>Prof. Dr. Carlos Emilio Garcia Duque, Universidad de Caldas, Colombia</p>
     <div>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:djvdutra@yahoo.com.br">Prof. Dr. Delamar José Volpato Dutra</Link>
      <p>, Universidade Federal de Santa Catarina, UFSC, Brazil</p>
     </div>
     <p>Prof. Dr. Ernildo J. Stein, Pontifícia Universidade Católica do Rio Grande do Sul, PUCRS, Brazil</p>
     <div>
      <Link href="mailto:mariusesi@yahoo.com">Prof. Dr. Esi Marius Costel</Link>
      <p>, Stefan cel Mare University of Suceava, USV, Romania</p>
     </div>
     <div>
      <Link href="mailto:gianluca.garelli@unifi.it">Prof. Dr. Gianluca Garelli</Link>
      <p>, Università degli Studi di Firenze, UniFI, Italy</p>
     </div>
     <p>Prof. Dr. Giovanni da Silva Queiroz, Universidade Federal da Paraíba, UFPB, Brazil</p>
     <div>
      <Link href="mailto:brunkhorst@uni-flensburg.de">Prof. Dr. Hauke Brunkhorst</Link>
      <p>, Europa-Universität Flensburg, EUF, Germany</p>
     </div>
     <div>
      <Link href="mailto:signus@ufpi.edu.br">Prof. Dr. Helder Buenos Aires de Carvalho</Link>
      <p>, Universidade Federal do Piauí, UFPI, Brazil</p>
     </div>
     <div>
      <Link href="mailto:jelson.oliveira@pucpr.br">Prof. Dr. Jelson Roberto de Oliveira</Link>
      <p>, Pontifícia Universidade Católica do Paraná, PUCPR, Brazil</p>
     </div>
     <div>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:jtrin41@gmail.com">Prof. Dr. José G. Trindade Santos</Link>
      <p>, Universidade Federal da Paraíba, UFPB, Brazil</p>
     </div>
     <div>
      <Link href="mailto:jper@ufrgs.br">Prof. Dr. José Pinheiro Pertille</Link>
      <p>, Universidade Federal do Rio Grande do Sul, UFRGS, Brazil</p>
     </div>
     <div>
      <Link href="mailto:lblaraujo@gmail.com">Prof. Dr. Luis Bernardo Leite Araújo</Link>
      <p>, Universidade Estadual do Rio de Janeiro, UERJ, Brazil</p>
     </div>
     <p>Prof. Dr. Luiz Felipe N. A. S. Sahd, Universidade Federal do Ceará, UFC, Brazil</p>
     <div>
      <Link href="mailto:luizrouanet@terra.com.br">Prof. Dr. Luiz Paulo Rouanet</Link>
      <p>, Universidade Federal de São João del-Rei, UFSJ, Brazil</p>
     </div>
     <div>
      <Link href="mailto:carvalho.marcelo@uol.com.br">Prof. Dr. Marcelo Silva Carvalho</Link>
      <p>, Universidade Federal de São Paulo, Unifesp, Brazil</p>
     </div>
     <div>
      <Link href="mailto:massimo.mori@unito.it">Prof. Dr. Massimo Mori</Link>
      <p>, Università di Torino, UNITO, Italy</p>
     </div>
     <div>
      <Link href="mailto:gonzalezvalerio@gmail.com">Profa. Dra. María Antonia González Valerio</Link>
      <p>, Universidad Nacional Autónoma de México, UNAM, Mexico</p>
     </div>
     <p>Profa. Dra. Maria das Graças de Souza, Universidade de São Paulo, USP, Brazil</p>
     <div>
      <Link href="mailto:nythamar.oliveira@pucrs.br">Prof. Dr. Nythamar F. de Oliveira</Link>
      <p>, Pontifícia Universidade Católica do Rio Grande do Sul, PUCRS, Brazil</p>
     </div>
     <div>
      <Link href="mailto:wellistony_carvalho@hotmail.com">Prof. Dr. Wellistony Carvalho Viana</Link>
      <p>, Universidade Federal do Piauí, UFPI, Brazil</p>
     </div>
     <div>
      <Link href="mailto:wmaar@ufscar.br">Prof. Dr. Wolfgang Leo Maar</Link>
      <p>, Universidade Federal de São Carlos, UFSCar, Brazil</p>
     </div>
    </section>
   </Styling>
  </>
 );
};

export default EditorialTeam;
