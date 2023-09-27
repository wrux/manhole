import { sanityAlgolia } from '~/algolia/config';
import type { APIRoute } from 'astro';
import { client } from '~/sanity/client';

export const POST: APIRoute = async ({ request }) => {
  // Tip: Add webhook secrets to verify that the request is coming from Sanity.
  // See more at: https://www.sanity.io/docs/webhooks#bfa1758643b3
  // if (req.headers['content-type'] !== 'application/json') {
  //   res.status(400);
  //   res.json({ message: 'Bad request' });
  //   return;
  // }

  // if (request.headers.get('secret') !== algoliaSecret)
  //   return new Response('Not Authenticated', {
  //     status: 401,
  //   });

  const res = await request.json();
  const ids: {
    created: string[];
    deleted: string[];
    updated: string[];
  } = res.ids;

  // Filter out any empty ids to avoid exceptions in Algolia.
  const sanityIds = {
    created: ids?.created?.filter((id) => !!id) || [],
    updated: ids?.updated?.filter((id) => !!id) || [],
    deleted: ids?.deleted?.filter((id) => !!id) || [],
  };

  return sanityAlgolia
    .webhookSync(client, { ids: sanityIds })
    .then(() => new Response('Success', { status: 200 }))
    .catch(
      (error) =>
        new Response(`Something went wrong: ${error.message}`, {
          status: 500,
        })
    );
};
