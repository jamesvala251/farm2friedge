import type { NotifyLogsQueryOptions, SettingsQueryOptions } from '@/types';
import type { GetStaticProps } from 'next';

import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS, { language: locale }],
    ({ queryKey }) => client.settings.all(queryKey[1] as SettingsQueryOptions),
  );
  await queryClient.prefetchQuery(
    [API_ENDPOINTS.NOTIFY_LOGS, { limit: 20, language: locale }],
    ({ queryKey }) =>
      client.notifyLogs.all(queryKey[1] as NotifyLogsQueryOptions),
  );
  try {
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
