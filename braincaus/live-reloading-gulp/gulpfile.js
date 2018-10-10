'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create();

gulp.task('default', () => {
    console.log("Hey!!! Im Alive!!!");
});

gulp.task('pug', () => {
    return gulp.src('./src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist/html'));
});