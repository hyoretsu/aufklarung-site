import { forwardRef } from 'react';

import Link from '../../../../node_modules/next/link';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
 href: string;
}

const customLink = forwardRef(({ href, children, ...props }: IProps, ref: any) => {
 if (href.includes('http') || href.includes('png')) {
  return (
   <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
   </a>
  );
 }
 if (href.includes('mailto:')) {
  return <a href={href}>{children}</a>;
 }

 return (
  <Link href={href} scroll={false}>
   <a {...props} ref={ref}>
    {children}
   </a>
  </Link>
 );
});
customLink.displayName = 'customLink';

export default customLink;
