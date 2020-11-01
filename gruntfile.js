module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
      less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "css/styles.css": "less/styles.less" 
            }
          }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
          styles: {
            files: ['less/**/*.less'], 
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
        },
        imagemin: {
            jpgs: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['*.jpg'],
                    dest: 'images/'
                }]
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
    
  grunt.registerTask('default', ['browserSync', 'watch']);
};