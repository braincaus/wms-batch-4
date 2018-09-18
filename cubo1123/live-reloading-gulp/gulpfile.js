const gulp = require("gulp");
const pug = require("gulp-pug");

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task("default" ,["pug"], function(){
    
})

gulp.task("serve" , function(){
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch("./build/*.html").on("change", reload);
})

gulp.task("pug" , function(){
    return gulp.src("./src/**/*.pug")
    .pipe(pug({}))
    .pipe(gulp.dest("./build/"))
})