const path = require("path");

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
              // Provide path to the file with resources
              resources: ['src/styles/_variables.scss', 'src/styles/_mixins.scss', 'src/styles/utils.scss'],
            }
          }
        ],
      },
    ]
  }
};
