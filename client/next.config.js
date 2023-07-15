/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // для подальшого "export" відключає підтримку компонентів <Image>
  },
  trailingSlash: true,  // включає перехід по компонентам через URL, раніше тільки через links
  webpack(config, options) { // це для використання mp3
    const { isServer } = options;
    /*  this is for SpeechRecognition */
    /*config.plugins.push([
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ]);*/

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-Loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-Loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
