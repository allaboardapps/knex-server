module.exports = {
  source: './src',
  destination: './docs',
  plugin: [
    {
      name: 'esdoc-typescript-plugin',
      option: {
        enable: true,
      },
    },
  ],
}
