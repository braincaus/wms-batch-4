'use strict';

const gulp = require('gulp'),
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

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./**/*.html").on("change", reload);
});
