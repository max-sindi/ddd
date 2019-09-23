const withSass = require('@zeit/next-sass')
const path = require('path');

const aliases = {
  '@styles': path.resolve(__dirname, 'styles'),
  '@fragments': path.resolve(__dirname, 'components/fragments'),
  '@components': path.resolve(__dirname, 'components'),
}

module.exports.aliases = aliases



module.exports = withSass({

  webpack: (config, options) => {
    /*
      push sass variables and mixins in global sass scope
    */
    config.module.rules.push(
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'sass-resources-loader',
              options: {
                // Provide path to the file with resources
                resources: ['styles/_variables.scss', 'styles/_mixins.scss'],
              }
            }
          ],
        },
    )

    /*
      populate with custom aliases
    */
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    }

    return config
  },
})
