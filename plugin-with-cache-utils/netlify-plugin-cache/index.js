const dotPath = 'cache';

module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log(`Restore cache`);
    await utils.cache.restore('cache');
  },
  onPostBuild: async ({ utils }) => {
    console.log(`Save cache`);
    await utils.cache.save('cache');
  },
};
