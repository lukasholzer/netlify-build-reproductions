import { Config, Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
  const { city, country } = context.params;

  return new Response(`You're visiting ${city} in ${country}!`);
};

export const config: Config = {
  path: '/travel-guide/:city/:country',
};
