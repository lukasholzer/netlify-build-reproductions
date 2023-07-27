import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  console.log(JSON.stringify({ event, context }, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }, null, 2),
  };
};
