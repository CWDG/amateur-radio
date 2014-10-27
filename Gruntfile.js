module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss',
          'vendor/webicons'
        ]
      },
      dist: {
        options: {
          outputStyle: 'compressed',
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },

    uglify: {
			layout: {
				options: {
					mangle: true
				},
				files: {
					'public/vendor/js/modernizr.js': ['bower_components/foundation/js/vendor/modernizr.js'],
					'public/vendor/js/jquery.js': ['bower_components/foundation/js/vendor/jquery.js'],
					'public/vendor/js/foundation.js': ['bower_components/foundation/js/foundation.js'],
          'public/vendor/js/fastclick.js': ['bower_components/foundation/js/vendor/fastclick.js'],
				}
			}
		},

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('build-css', ['sass']);
  grunt.registerTask('build-js', ['uglify']);
  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};
