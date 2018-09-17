'use strict';

var gulp = require('gulp'),
imageResize = require('gulp-image-resize');

gulp.task('default', function () {
    gulp.start('resize');
});

gulp.task('copy', function () {
    gulp.src('./src/**')
        .pipe(gulp.dest('./build/'));
});

gulp.task("resize", ["copy"],function(){
    gulp.src('./build/img/*')
        .pipe(imageResize({
            width : 50,
            height : 50,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('./build/img/min/'));
})
