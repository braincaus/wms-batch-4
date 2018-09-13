const gulp = require('gulp'),
      pug = require('gulp-pug'),
      template = require('gulp-template'),
      imagemin = require('gulp-imagemin'),
      browserSync = require('browser-sync').create();

const targetVariable = process.env.ENVIRONMENT;

const distFolder = './build',
      pugPathPattenr = './src/**/*.pug',
      fontsPathPattenr = './src/fonts/**/*.ttf',
      imgPathPattenr = './src/images/*';


gulp.task('pug', function(){
    return gulp.src(pugPathPattenr)
            .pipe(pug())
            .pipe(template({environment: targetVariable}))
            .pipe(gulp.dest(distFolder));
});

gulp.task('copy-fonts', function(){
    return gulp.src(fontsPathPattenr)
            .pipe(gulp.dest(distFolder));
});

gulp.task('images', () =>
    gulp.src(imgPathPattenr)
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(distFolder+'/images'))
);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: distFolder
        }
    });
    gulp.watch(pugPathPattenr, ['pug']);
    gulp.watch(distFolder+'/*.html').on('change', browserSync.reload);
});

 gulp.task('default', ['pug', 'copy-fonts', 'images', 'browser-sync']);
 gulp.task('dist', ['pug', 'copy-fonts', 'images']);