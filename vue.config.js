module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/scss/style.scss"'
      }
    }
  },
  chainWebpack: config => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach(match => {
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap(opt =>
          Object.assign(opt, {
            prependData: `@import './src/assets/scss/style.scss';`
          })
        );
    });
  },
  transpileDependencies: ["vuetify"]
};
