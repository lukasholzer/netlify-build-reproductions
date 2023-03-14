import { NetlifyAPI } from 'netlify';

/** @type {import('@netlify/build').Om} */
export const onPreDev = async ({ netlifyConfig }) => {
  const headers = netlifyConfig.headers;
  // console.log(headers);
  // headers.push({
  //   for: '/*',
  //   values: {
  //     'x-test': 'value2',
  //   },
  // });

  headers[0].values['x-test'] += ' modified from plugin';

  netlifyConfig.headers = headers;
};
