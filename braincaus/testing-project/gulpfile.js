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
    gulp.start('styles', 'build');
});

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('./src/**/*.scss', ['styles']);
    gulp.watch('./src/**/*.js', ['build']);
    gulp.watch('./test/**/*.spec.js', ['test']);
});

gulp.task('styles', ['clean'], () => {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({message: 'CSS - task completed'}))
        .pipe(livereload());
});

gulp.task('build', ['clean'], () => {
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build'))
        // .pipe(uglify())
        // .pipe(rename({suffix: '.min'}))
        // .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'JS - task completed'}))
        .pipe(livereload());
});

gulp.task('dist', ['clean'], () => {
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'JS for Prod - task completed'}))
        .pipe(livereload());
});

gulp.task('clean', () => {
    fs.removeSync('./dist');
    fs.removeSync('./build');
});
