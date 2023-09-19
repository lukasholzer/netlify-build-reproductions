import type { Context, Config } from '@netlify/functions';
import { createHash } from 'node:crypto';

const get = (req: Request, context: Context) => {
  return new Response(
    `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
<body class="bg-gray-100 flex justify-center items-center h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md w-96">
    <h1 class="text-2xl font-semibold mb-4">Login</h1>
    <form action="${req.url}" method="post" class="space-y-4">
      <div>
        <label for="username" class="block text-gray-600">Username:</label>
        <input id="username" name="username" class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400" type="text" placeholder="Enter your username" required>
      </div>
      <div>
        <label for="password" class="block text-gray-600">Password:</label>
        <input id="password" name="password" class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400" type="password" placeholder="Enter your password" required>
      </div>
      <div>
        <input type="submit" value="Login" class="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 w-full">
      </div>
    </form>
  </div>
</body>
  
  `,
    {
      headers: {
        'content-type': 'text/html',
      },
    }
  );
};

const post = async (req: Request, context: Context) => {
  const url = new URL(req.url);
  console.log(await req.formData());

  const hash = createHash('sha256');
  hash.update(JSON.stringify({ username: 'Lukas' }));

  context.cookies.set({
    name: 'session',
    value: hash.digest('hex'),
  });

  return Response.redirect('/');
};

export default (req: Request, context: Context) => {
  switch (req.method.toUpperCase()) {
    case 'POST':
      return post(req, context);
    case 'GET':
      return get(req, context);
    default:
      return new Response('Not implemented', { status: 500 });
  }
};

export const config: Config = {
  path: '/login',
};
