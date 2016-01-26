module.exports=function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat:{
         options:{
           seperator:';'
         },
         dist:{
           src:['src/**/*.js'],
           dest:'dist/script.js'
        }
      },
      uglify:{
        options:{
          banner:'/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist:{
          files:{
            'dist/script.min.js':['<%= concat.dist.dest %>']
          }
        }
      },
      watch:{
        files:['script.min.js'],
        tasks:['concat','uglify']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify','watch']);

}