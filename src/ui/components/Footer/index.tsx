import Link from '@link';

import Icons from './FooterIcons';
import { Container } from './styles';

const Footer: React.FC = () => {
 return (
  <Container>
   <strong>Registros e Indexações desta Revista:</strong>
   <div>
    {Icons.map(site => (
     <Link key={site.id} href={site.url} title={site.title}>
      <img src={site.img} alt={site.name} />
     </Link>
    ))}
   </div>
   <p>
    ©2014 Aufklärung<sup>®</sup>, doi:10.18012/ARF, e-ISSN 2318-9428, p-ISSN 2358-8470 |{' '}
    <Link href="mailto:revistaaufklarung@hotmail.com">revistaaufklarung@hotmail.com</Link> | João Pessoa - PB, Brasil |{' '}
    <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY Attribution 4.0 International</Link>
   </p>
  </Container>
 );
};

export default Footer;
