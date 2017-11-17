'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
    src:'./src/es6',
    dest:'./src/lib'
};

const es6Path = {
    src:`${dirs.src}/` + '*.js',
    dest: `${dirs.dest}`
};

gulp.task('babel',() => {
    return gulp.src(es6Path.src)
            .pipe(babel())
            .pipe(gulp.dest(es6Path.dest));
});

gulp.task('watch',() => {
    gulp.watch(es6Path.src,['babel']);
});