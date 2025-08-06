import type { GetStaticProps } from 'next';
import NotFound from '@/components/404/404';

export default function NotFoundPage() {
  return <NotFound />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
