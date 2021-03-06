module.exports = function (grunt) {
  return {
    tests: {
      jshintrc: '.jshintrc',
      src: [
        'tests/**/*_spec.js',
      ]
    },
    src: {
      jshintrc: '.jshintrc',
      src: [
        'lib/**/*.js'
      ],
      options: {
        '-W085': true, // Don't use 'with'
        '-W030': true // top-level expression
      }
    }
  };
};
