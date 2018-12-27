module.exports = function( grunt ) {
 
  grunt.initConfig({
 
    uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {
          'site/templates/terrassofrancisco/js/terrassofrancisco.js' : [ 'site/templates/terrassofrancisco/js/scripts.js' ]
        }
      }
    }, // uglify
 
 
 
    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'site/templates/terrassofrancisco/css/template.css' : 'site/templates/terrassofrancisco/sass/template.scss'
        }
      }
    }, // sass


    imagemin: {                          // Task
	    dynamic: {                         // Another target
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'site/templates/terrassofrancisco/_images/',                   // Src matches are relative to this path
	        src: ['**/*.{png,jpg,gif}'],                                 // Actual patterns to match
	        dest: 'site/templates/terrassofrancisco/images/'                  // Destination path prefix
	      }]
	    }
	  }, // imagemin

 
    watch : {
      dist : {
        files : [
          'site/templates/terrassofrancisco/js/**/*',
          'site/templates/terrassofrancisco/sass/**/*',
          'site/templates/terrassofrancisco/_images/**/*'
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
