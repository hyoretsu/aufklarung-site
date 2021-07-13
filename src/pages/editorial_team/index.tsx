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
     <p>
      <Link href="mailto:blsic@hotmail.com">Prof. Dr. Betto Leite da Silva</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
    </section>
    <section>
     <h4>Editores Associados</h4>
     <p>
      <Link href="mailto:andersondarc@uai.com.br">Prof. Dr. Anderson D'Arc Ferreira</Link>, Universidade Federal da
      Paraíba, UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:robsonccordeiro@bol.com.br">Prof. Dr. Robson Costa Cordeiro</Link>, Universidade Federal da
      Paraíba, UFPB, Brazil
     </p>
    </section>
    <section>
     <h4>Editor de Design Gráfico e Editoração Eletrônica</h4>
     <p>
      <Link href="mailto:hyoretsu@gmail.com">Aran Leite de Gusmão</Link>, Universidade Federal da Paraíba, UFPB, Brazil
     </p>
    </section>
    <section>
     <h4>Conselho Editorial</h4>
     <p>
      <Link href="mailto:andersondarc@uai.com.br">Prof. Dr. Anderson D'Arc Ferreira</Link>, Universidade Federal da
      Paraíba, UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:angmich@tin.it">Profa. Dra. Angela Michelis</Link>, University of Turin, UNITO, Italy
     </p>
     <p>
      <Link href="mailto:iulianapostu76@gmail.com">Prof. Dr. Apostu Iulian</Link>, University of Bucharest, UniBuc,
      Romania
     </p>
     <p>
      <Link href="mailto:campillo@um.es">Prof. Dr. Antonio Campillo Meseguer</Link>, Universidad de Murcia, Spain
     </p>
     <p>
      <Link href="mailto:blsic@hotmail.com">Prof. Dr. Betto Leite da Silva</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:candida.jaci@gmail.com">Profa. Dra. Candida Jaci de Sousa Melo</Link>, Université du Quebec à
      Montréal/UFPB, Canada
     </p>
     <p>Prof. Dr. Carlos Emilio Garcia Duque, Universidad de Caldas, Colombia</p>
     <p>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:djvdutra@yahoo.com.br">Prof. Dr. Delamar José Volpato Dutra</Link>, Universidade Federal de
      Santa Catarina, UFSC, Brazil
     </p>
     <p>Prof. Dr. Ernildo J. Stein, Pontifícia Universidade Católica do Rio Grande do Sul, PUCRS, Brazil</p>
     <p>
      <Link href="mailto:mariusesi@yahoo.com">Prof. Dr. Esi Marius Costel</Link>, Stefan cel Mare University of Suceava,
      USV, Romania
     </p>
     <p>
      <Link href="mailto:gianluca.garelli@unifi.it">Prof. Dr. Gianluca Garelli</Link>, Università degli Studi di
      Firenze, UniFI, Italy
     </p>
     <p>Prof. Dr. Giovanni da Silva Queiroz, Universidade Federal da Paraíba, UFPB, Brazil</p>
     <p>
      <Link href="mailto:brunkhorst@uni-flensburg.de">Prof. Dr. Hauke Brunkhorst</Link>, Europa-Universität Flensburg,
      EUF, Germany
     </p>
     <p>
      <Link href="mailto:signus@ufpi.edu.br">Prof. Dr. Helder Buenos Aires de Carvalho</Link>, Universidade Federal do
      Piauí, UFPI, Brazil
     </p>
     <p>
      <Link href="mailto:jelson.oliveira@pucpr.br">Prof. Dr. Jelson Roberto de Oliveira</Link>, Pontifícia Universidade
      Católica do Paraná, PUCPR, Brazil
     </p>
     <p>
      <Link href="mailto:jlubenow@hotmail.com">Prof. Dr. Jorge Adriano Lubenow</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:jtrin41@gmail.com">Prof. Dr. José G. Trindade Santos</Link>, Universidade Federal da Paraíba,
      UFPB, Brazil
     </p>
     <p>
      <Link href="mailto:jper@ufrgs.br">Prof. Dr. José Pinheiro Pertille</Link>, Universidade Federal do Rio Grande do
      Sul, UFRGS, Brazil
     </p>
     <p>
      <Link href="mailto:lblaraujo@gmail.com">Prof. Dr. Luis Bernardo Leite Araújo</Link>, Universidade Estadual do Rio
      de Janeiro, UERJ, Brazil
     </p>
     <p>Prof. Dr. Luiz Felipe N. A. S. Sahd, Universidade Federal do Ceará, UFC, Brazil</p>
     <p>
      <Link href="mailto:luizrouanet@terra.com.br">Prof. Dr. Luiz Paulo Rouanet</Link>, Universidade Federal de São João
      del-Rei, UFSJ, Brazil
     </p>
     <p>
      <Link href="mailto:carvalho.marcelo@uol.com.br">Prof. Dr. Marcelo Silva Carvalho</Link>, Universidade Federal de
      São Paulo, Unifesp, Brazil
     </p>
     <p>
      <Link href="mailto:massimo.mori@unito.it">Prof. Dr. Massimo Mori</Link>, Università di Torino, UNITO, Italy
     </p>
     <p>
      <Link href="mailto:gonzalezvalerio@gmail.com">Profa. Dra. María Antonia González Valerio</Link>, Universidad
      Nacional Autónoma de México, UNAM, Mexico
     </p>
     <p>Profa. Dra. Maria das Graças de Souza, Universidade de São Paulo, USP, Brazil</p>
     <p>
      <Link href="mailto:nythamar.oliveira@pucrs.br">Prof. Dr. Nythamar F. de Oliveira</Link>, Pontifícia Universidade
      Católica do Rio Grande do Sul, PUCRS, Brazil
     </p>
     <p>
      <Link href="mailto:wellistony_carvalho@hotmail.com">Prof. Dr. Wellistony Carvalho Viana</Link>, Universidade
      Federal do Piauí, UFPI, Brazil
     </p>
     <p>
      <Link href="mailto:wmaar@ufscar.br">Prof. Dr. Wolfgang Leo Maar</Link>, Universidade Federal de São Carlos,
      UFSCar, Brazil
     </p>
    </section>
   </Styling>
  </>
 );
};

export default EditorialTeam;
