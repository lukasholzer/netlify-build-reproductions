import { NetlifyAPI } from 'netlify';

/** @type {import('@netlify/build').OnPreBuild} */
export const onPreBuild = async ({
  constants: { NETLIFY_API_TOKEN, SITE_ID },
}) => {
  const api = new NetlifyAPI(NETLIFY_API_TOKEN);

  // Fetch sites
  // const sites = await api.updateSiteDeploy(SITE_ID);

  console.log(`onPreBuild`, SITE_ID, process.env);
};
