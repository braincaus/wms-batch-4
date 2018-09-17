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
    chalk = require('chalk'),
    imagemin = require('gulp-imagemin'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create();

gulp.task('default', function () {
    
    
    gulp.start('dev');
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./es6/**/*.js', ['scripts']);
});

gulp.task('styles', ['clean'], function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({message: 'CSS - task completed'}))
        .pipe(livereload());
});

gulp.task('scripts', ['clean'], function () {
    gulp.src('./es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./source/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({message: 'JS - task completed'}))
        .pipe(livereload());
});

gulp.task('clean', function () {
    fs.removeSync('./dist');
    fs.removeSync('./source');
    fs.removeSync('./.env');
    fs.removeSync('./build');
});

gulp.task('dev',['clean'], function () {

    fs.createReadStream('./config/dev.env').pipe(fs.createWriteStream('.env'));
    
});

gulp.task('prod', function () {

    fs.createReadStream('./config/prod.env').pipe(fs.createWriteStream('.env'));
    
});

gulp.task('prod', function () {

    fs.createReadStream('./config/prod.env').pipe(fs.createWriteStream('.env'));
    
});

gulp.task('assets',['clean'], function () {

    gulp.start('imgAssets','fontAssets');
    
});

gulp.task('imgAssets', function () {

    gulp.src('./src/Img/*')
    .pipe(imagemin())
        .pipe(gulp.dest('./build'))
    
});

gulp.task('fontAssets', function () {

    gulp.src('./src/Fonts/*')
        .pipe(gulp.dest('./build'))
    
});

gulp.task('buildPug', function build() {
    return gulp.src('src/**.pug')
      .pipe(pug(options))
      .pipe(gulp.dest('index.html'));
  });

  gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});