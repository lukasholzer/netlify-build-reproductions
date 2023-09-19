import type { Context, Config } from '@netlify/functions';

export default (req: Request, context: Context) => {
  Netlify.env.set('HELLO', '🌎');
  return new Response(
    `
    <h1>home</h1>
    <pre>${JSON.stringify(
      {
        context,
        env: Netlify.env.toObject(),
      },
      null,
      2
    )}</pre>
  `,
    {
      headers: {
        'content-type': 'text/html',
      },
    }
  );
};

export const config: Config = {
  path: '/',
};
