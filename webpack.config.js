const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              ["@babel/plugin-proposal-decorators", {"legacy": true }],
              ["@babel/plugin-proposal-class-properties", {"loose": false }]
            ]
          }
        }
      },
      {
        test: /\.module\.css$/,
        exclude: '/node_modules/',
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]__[sha1:hash:hex:7]'
                }
              }
            }
        ]
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader'
        ]
      }
    ]
  }, 
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~c': path.resolve(__dirname, 'src/components'),
      '~p': path.resolve(__dirname, 'src/pages'),
      '~s': path.resolve(__dirname, 'src/store')
    }
  }
};
module.exports = conf;