import type { GetServerSideProps } from 'next';

import { addApolloState, initializeApollo } from './client';
import { GroupsDocument } from './gql/groups.graphql';
import { SettingsDocument } from './gql/settings.graphql';

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: SettingsDocument,
    variables: {
      language: locale,
    },
  });
  await apolloClient.query({
    query: GroupsDocument,
    variables: {
      language: locale,
    },
  });
  return addApolloState(apolloClient, {
    props: {
      },
  });
};
