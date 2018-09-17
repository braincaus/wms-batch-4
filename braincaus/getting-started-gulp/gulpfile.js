'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require("gulp-babel");

gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});

gulp.task('styles', function () {
    gulp.src('./src/index.sass')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('scripts', function () {
    gulp.src('./src/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build/js'));
});