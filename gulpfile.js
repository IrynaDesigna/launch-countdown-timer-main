'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload   = require('gulp-livereload'),
    sourcemaps   = require('gulp-sourcemaps');

// sass.compiler = require('node-sass');

/* task for compilation sass to css */
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded',}).on('error', sass.logError))
        .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(livereload({ start: true }));
});
