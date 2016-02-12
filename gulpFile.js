var gulp            = require('gulp'),
    jade            = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    autowatch       = require('gulp-autowatch'),
    //concat          = require('gulp-concat'),
    reload          = require('browser-sync').reload,
    sass            = require('gulp-sass');


gulp.task('jade', function () {
    return gulp.src('src/*.jade')
        .pipe(jadeInheritance({basedir: 'src'}))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('www/'));
});
gulp.task('sass', function () {
    return gulp.src('./src/all.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(concat('all.css'))
        .pipe(gulp.dest('www/'));
});
gulp.task('connect', function () {
    require('browser-sync')({
        notify: false,
        directory: true,
        open: false,
        port: 8010,
        server: {
            baseDir: './www'
        }
    });
});
//var paths = {
//    'sass': './src/**/*.scss',
//    'jade': 'src/**/*.jade'
//};
gulp.task('watch', function () {
    // Watch less compiler files
    //gulp.watch('src/**/*.less', ['less', reload]);
    // Watch html compiler files
    //autowatch(gulp, paths);
    //gulp.watch('./src/**/*.scss', ['sass', reload]);
    //gulp.watch('./src/**/*.scss', ['sass', reload]);
    //gulp.watch(['src/*.jade', 'src/**/*.jade'], ['jade', reload]);
    gulp.watch('./src/**/*.scss' , ['sass', reload]);
    gulp.watch('./src/**/*.jade' , ['jade', reload]);
});
gulp.task('default', ['jade', 'connect', 'watch']);