import type { Context, Config } from '@netlify/functions';

export default (req: Request, context: Context) => {
  // const token = Netlify.env.get('token');

  const auth = context.cookies.get('auth');

  console.log(auth);

  // return new Response('hello world');
};

export const config: Config = {
  path: '/*',
  excludedPath: '/login',
};
