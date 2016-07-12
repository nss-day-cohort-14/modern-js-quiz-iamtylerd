module.exports = function(karma) {
  karma.set({
 
    // include browserify first in used frameworks 
    frameworks: [ 'browserify', 'jasmine' ],
 
    // add all your files here, 
    // including non-commonJS files you need to load before your test cases 
    files: [
      // 'src/*.js',
      'spec/appspec.js'
    ],
 
    // add preprocessor to the files that should be 
    // processed via browserify 
    preprocessors: {
      'spec/appspec.js': [ 'browserify' ]
    },
 
    // see what is going on 
    logLevel: 'LOG_DEBUG',
 
    // use autoWatch=true for quick and easy test re-execution once files change 
    autoWatch: true,
 
    // add additional browserify configuration properties here 
    // such as transform and/or debug=true to generate source maps 
    browserify: {
      debug: true,
      // transform: [ 'brfs' ],
      // configure: function(bundle) {
      //   bundle.on('prebundle', function() {
      //     bundle.external('foobar');
      //   });
      // }
    }
  });
};
