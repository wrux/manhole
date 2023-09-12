import groq from 'groq';

export const imageFragment = (attr: string, opts?: { as: string }) => groq`
  "${opts?.as ?? attr}": ${attr} {
    ...,
    asset -> {
      ...,
      "alt": altText,
      metadata {
        lqip,
        dimensions
      },
    },
  }
`;
