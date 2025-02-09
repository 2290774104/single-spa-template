const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const package = require('./package.json');
module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE_URL,
  devServer: {
    port: 8082
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json']
    },
    output: {
      library: package.name,
      libraryTarget: 'umd'
    }
  },
  transpileDependencies: ['vuex-module-decorators'],
  chainWebpack: config => {
    // These are some necessary steps changing the default webpack config of the Vue CLI
    // that need to be changed in order for Typescript based components to generate their
    // declaration (.d.ts) files.
    //
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('types', path.resolve('types'));
    // Discussed here https://github.com/vuejs/vue-cli/issues/1081
    if (process.env.NODE_ENV === 'production') {
      config.module.rule('ts').uses.delete('cache-loader');
      config.module
        .rule('ts')
        .use('ts-loader')
        .loader('ts-loader')
        .tap(opts => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });
    }
  },
  parallel: false
});
