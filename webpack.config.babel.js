import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'build';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/dist/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: PATHS.dist
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      // the url-loader uses DataUrls.
      {
        test: /\.(ttf|eot|svg|woff|woff2|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js']
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    allowedHosts: ['localtest.me'],
    contentBase: PATHS.dist,
    hot: true,
    inline: true
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
};

const productionConfig = {
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
};

export default Object.assign(
  {},
  base,
  isProduction ? productionConfig : developmentConfig
);