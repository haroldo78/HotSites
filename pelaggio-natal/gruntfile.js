module.exports = function( grunt ) {
 
  grunt.initConfig({
 
    uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {
          'landpage/js/pardal.js' : [ 'landpage/js/script.js' ]
        }
      }
    }, // uglify
 
 
 
    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'landpage/css/style.css' : 'landpage/sass/style.scss'
        }
      }
    }, // sass


    imagemin: {                          // Task
	    dynamic: {                         // Another target
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'landpage/_images/',                   // Src matches are relative to this path
	        src: ['**/*.{png,jpg,gif}'],                                 // Actual patterns to match
	        dest: 'landpage/images/'                  // Destination path prefix
	      }]
	    }
	  }, // imagemin

  
    watch : {
      dist : {
        files : [
          'landpage/js/**/*',
          'landpage/sass/**/*',
          'landpage/_images/**/*'
        ],
 
        tasks : [ 'uglify', 'sass', 'imagemin' ]
      }
    } // watch
 
  });
 
 
  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass', 'imagemin' ] );
 
  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
 
};
