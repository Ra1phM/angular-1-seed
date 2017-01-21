//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
        // Our angular app build with all dependencies
        './public/bundle.js',

        // Module for tests
        './node_modules/angular-mocks/angular-mocks.js',
        
        // Components to watch
        './src/app/components/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine', 'browserify'],

    preprocessors: {
        './src/app/**/*.js': [ 'browserify' ]
    },

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-browserify',
      //'karma-junit-reporter'
    ],

    /*junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }*/

  });
};