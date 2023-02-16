import { NetlifyAPI } from 'netlify';

/** @type {import('@netlify/build').OnPreBuild} */
export const onPreBuild = async ({
  constants: { NETLIFY_API_TOKEN, SITE_ID },
}) => {
  if (!process.env.INCOMING_HOOK_BODY) {
    return;
  }

  const api = new NetlifyAPI(NETLIFY_API_TOKEN);
  const response = await api.updateSiteDeploy({
    site_id: SITE_ID,
    deploy_id: DEPLOY_ID,
    body: {
      draft: true,
    },
  });

  console.log(response);
  // const data = await new Response(decodeURI('%7Bpreview:true%7D')).();
  // console.log(data);
  // console.log(eval(decodeURI('%7Bpreview:true%7D')));
  // Fetch sites

  // console.log(`onPreBuild`, SITE_ID, process.env);
  // console.log('body:', process.env.INCOMING_HOOK_BODY);
};
