const path = require("path");
const aliases = require('../next.config').aliases

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['styles/_variables.scss', 'styles/_mixins.scss', 'styles/utils.scss']
            }
          }
        ],
      },
    ],
  },
  resolve: {
    alias: {...aliases}
  }
};
