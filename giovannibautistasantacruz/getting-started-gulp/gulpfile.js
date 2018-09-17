'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    fs = require('fs-extra'),
    babel = require("gulp-babel"),
    chalk = require('chalk');
    pug = require('gulp-pug');

gulp.task('default', function () {
    
    
    gulp.start('styles',"scripts");
});

gulp.task('buildPug', function build() {
    return gulp.src('src/**.pug')
      .pipe(pug(options))
      .pipe(gulp.dest('index.html'));
  });

gulp.task('clean', function () {
    fs.removeSync('./dist');
    fs.removeSync('./source');
    
});

