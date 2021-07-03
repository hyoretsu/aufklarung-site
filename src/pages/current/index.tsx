import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Issue: React.FC = () => {
 const { replace } = useRouter();

 useEffect(() => {
  replace('/issues/19');
 }, [replace]);

 return <NextSeo noindex nofollow />;
};

export default Issue;
