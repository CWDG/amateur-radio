module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'stylesheets',
          ext: '.css'
        }]
      }
    },
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-sass');

  // Register and run tasks
  grunt.registerTask('default', ['sass']);

};
