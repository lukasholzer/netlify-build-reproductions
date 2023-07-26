import type { Context } from 'https://edge.netlify.com';

export default async (request: Request, context: Context) => {
  console.log(`${new Date().getTime()} – ${context.geo.city}`);
  return Response.json({ hello: 'world', location: context.geo.city });
};
