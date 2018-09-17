const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');

gulp.task("default",["imagemin","imageresize","fonts"],function(){
    console.log("The fgulp is done");
});

gulp.task("imagemin",function(){
    gulp.src("./images/*")
    .pipe(imagemin())
    .pipe(gulp.dest('./min-build'))
});

gulp.task("imageresize",function(){
    gulp.src('./images/*')
        .pipe(imageResize({
            width : 100,
            height : 100,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('./resized-build'));
})

gulp.task('fonts', function() {
    return gulp.src('./fonts/*')
    .pipe(gulp.dest('./build-fonts'))
  });