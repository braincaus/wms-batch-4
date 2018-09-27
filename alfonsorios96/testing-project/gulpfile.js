'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ()=>{
    gulp.start(['transpile_test', 'transpile_js']);
});

gulp.task('transpile_test', () =>
    gulp.src('test/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/test'))
);

gulp.task('transpile_js', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/src'))
);

