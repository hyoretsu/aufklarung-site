import Link from '@link';
import { useRouter } from 'next/router';

import { Container } from './styles';

const LocationInfo: React.FC = ({ children }) => {
 const { pathname } = useRouter();

 return (
  <Container>
   <Link href="/">Início</Link>
   {' / '}
   {pathname.includes('issues') && (
    <span>
     <Link href="/issues">Arquivos</Link>
    </span>
   )}
   {pathname.includes('news') && (
    <span>
     <Link href="/news">Notícias</Link>
    </span>
   )}
   {pathname.includes('about') && (
    <span>
     <Link href="/about">Sobre a Revista</Link>
    </span>
   )}
   {pathname.includes('editorial_team') && (
    <span>
     <Link href="/editorial_team">Equipe Editorial</Link>
    </span>
   )}
   {pathname.includes('ficha') && (
    <span>
     <Link href="/ficha">Ficha Catalográfica</Link>
    </span>
   )}
   {pathname.includes('contact') && (
    <span>
     <Link href="/contact">Contato</Link>
    </span>
   )}
   {pathname.includes('submissions') && (
    <span>
     <Link href="/submissions">Submissões</Link>
    </span>
   )}
   {pathname.includes('privacy') && (
    <span>
     <Link href="/privacy">Declaração de Privacidade</Link>
    </span>
   )}
   {pathname.includes('login') && (
    <span>
     <Link href="/login">Acesso</Link>
    </span>
   )}
   {children && <span> / {children}</span>}
  </Container>
 );
};

export default LocationInfo;
