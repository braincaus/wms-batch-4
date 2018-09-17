'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    fs = require('fs-extra'),
    babel = require("gulp-babel");

const express = require('express'),
    bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

gulp.task('default', function () {
    gulp.start('dev');
});


gulp.task('serve', null, function () {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    const hello = (request, response) => {
        response.status(200).send('Hola mundo !');
    };

    app.get('/', hello);

    app.listen(PORT, () => {
        console.log(`The server is running on ${PORT}`);
    });
});

gulp.task('dev', ['clean'], function () {
    gulp.src('./scripts/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({suffix: '.build.dev'}))
        .pipe(gulp.dest('./min'))
        .pipe(notify({message: 'JS - task completed'}))
        .pipe(livereload());
});

gulp.task('production', ['clean'], function () {
});

gulp.task('clean', function () {
    fs.removeSync('./min');
});
