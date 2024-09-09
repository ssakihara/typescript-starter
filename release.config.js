/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'release: ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
