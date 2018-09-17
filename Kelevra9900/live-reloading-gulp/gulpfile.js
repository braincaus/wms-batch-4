const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');

    browserSync = require('browser-sync').create();
    

    gulp.task('serve', ['sass'], function() {

        browserSync.init({
            server: "./build"
        });
    
        gulp.watch('./src/*.scss', ['sass']).on('change', browserSync);
        gulp.watch('./build/*.pug', ['pug']).on('change', browserSync.reload);
        gulp.watch("./build/*.html").on('change', browserSync.reload);
    });

    gulp.task('sass', function() {
        return gulp.src("src/*.scss")
            .pipe(sass({
                outputStyle: 'expanded',
                sourceComments: true
            }))
            .pipe(autoprefixer({
                versions: ['last 2 browsers']
            }))
            .pipe(gulp.dest("build/css"))
            .pipe(browserSync.stream())
    });

    gulp.task('babel', function () {
        return gulp.src(['./src/**/*.babel'])
        .pipe(babel ({}))
        .pipe(autoprefixer({
            browsers:['last 3 versions']
        }))
        .pipe(gulp.dest('./build/'))
    })

    gulp.task('pug', function () {
        gulp.src("./*.pug")
        .pipe(pug())
        .pipe(autoprefixer({
            browsers:['last 3 versions']
        }))
        .pipe(gulp.dest('./build/'))
    })

    gulp.task('default', function() {
        gulp.watch('./build/scss/*.scss', ['sass']),
        gulp.watch(['./build/*/*.pug'], ['pug']).on('change', browserSync.reload)
    })

    
