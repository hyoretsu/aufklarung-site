import Link from '@link';

import { Container, SubmissionButton } from './styles';

const Sidebar: React.FC = () => {
 return (
  <Container>
   <strong>Navegar</strong>
   <Link href="/submissions">
    <SubmissionButton>Enviar Submissão</SubmissionButton>
   </Link>
  </Container>
 );
};

export default Sidebar;
