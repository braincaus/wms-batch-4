'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    fs = require('fs-extra'),
    babel = require("gulp-babel");

gulp.task('default', () => {
    gulp.start('styles', 'scripts');
});

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('./src/**/*.scss', ['styles']);
    gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('styles', ['clean'], () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({message: 'CSS - task completed'}))
        .pipe(livereload());
});

gulp.task('scripts', ['clean'], () => {
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./source'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'JS - task completed'}))
        .pipe(livereload());
});

gulp.task('clean', () => {
    fs.removeSync('./dist');
    fs.removeSync('./source');
});
