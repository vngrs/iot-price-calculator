
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './__tests__/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './src/*.js': ['webpack'],
      './__tests__/*.js': ['webpack']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: false,
    plugins : [
      'karma-mocha',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-commonjs-preprocessor',
      'karma-babel-preprocessor',
      require('karma-chai-plugins'),
      require('karma-sinon')
    ],
    webpack: webpackConfig,
    babelPreprocessor: {
      options: {
        presets: ['react', 'latest', 'stage-0', 'airbnb']
      }
    },
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }
  })
};