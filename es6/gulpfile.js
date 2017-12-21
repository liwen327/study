
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');
var envify = require('gulp-envify');
var browserify = require('gulp-browserify');
var SourceMap = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglifyjs');
var SourceMapSupport = require('gulp-sourcemaps-support');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('js', function(){
  gulp.src('src/**/*.js')    
    .pipe(SourceMap.init())
    .pipe(babel({
        presets: ['es2015', 'es2016', 'es2017', 'react'],
        //plugins: ['transform-decorators-legacy']
    }))  
    //.pipe(SourceMap.write('.'))
    .pipe(gulp.dest('build'))
    .pipe(reload({ stream:true }));
});

gulp.task('jsConcat', function(){
  gulp.src('src/**/*.js')    
    .pipe(SourceMap.init())
    .pipe(babel({
        presets: ['es2015', 'es2016', 'es2017', 'react'],
        //plugins: ['transform-decorators-legacy']
    }))  
    .pipe(concat({path:'script/bundle.js'}))
    .pipe(uglify())     //默认把js都压缩到文件的第一个js文件 中
    //.pipe(SourceMap.write('.'))
    .pipe(gulp.dest('build'))
    .pipe(reload({ stream:true }));
});
gulp.task('html',function(){
  gulp.src('src/*.html')
  .pipe(SourceMap.init())
  .pipe(gulp.dest('build'))
  .pipe(reload({ stream:true }));
});
//gulp.task('watch',function(){
  //gulp.watch('src/**/*.js',['js']);
  //gulp.watch('src/*.html',['html']);
//});
gulp.task('serve', ['html','jsConcat','js'], function() {
  browserSync({
    server: {
      baseDir: './build'
    }
  });

  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.js', ['jsConcat']);
  gulp.watch('src/*.html',['html']);
});
gulp.task('default', ['js','jsConcat','html','serve']);




