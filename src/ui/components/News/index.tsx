import { useRouter } from 'next/router';

import { Section } from './styles';

const News: React.FC = ({ children }) => {
 const { pathname } = useRouter();

 return <Section pathname={pathname}>{children}</Section>;
};

export default News;
