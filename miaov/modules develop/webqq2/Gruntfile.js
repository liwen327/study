/**
 * Created by liwz on 15-10-20.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            webqq1: {
                files:{
                    'dist/main.js':['./js/main.js','./js/drag.js','./js/popup.js','./js/range.js']
                }
            }
            },
        uglify : {
            webqq1 : {
                files : {
                    'dist/main.min.js' : ['dist/main.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify','concat']);

};
