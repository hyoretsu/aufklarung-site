import Link from '@link';
import { memo } from 'react';

import Button from '../Button';
import { Container } from './styles';

const Sidebar: React.FC = () => {
 return (
  <Container>
   <strong>Navegar</strong>
   <Link href="/submissions">
    <Button>Enviar Submissão</Button>
   </Link>
  </Container>
 );
};

export default memo(Sidebar);
