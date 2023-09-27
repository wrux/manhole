import { sanityAlgolia } from '~/algolia/config';
import { client } from '~/sanity/client';

const types = ['post', 'location'];
const query = `* [_type in $types && !(_id in path("drafts.**"))][]._id`;

export const GET = async () => {
  client.fetch(query, { types }).then((ids) =>
    sanityAlgolia.webhookSync(client, {
      ids: { created: ids, updated: [], deleted: [] },
    })
  );

  return new Response('OK');
};
