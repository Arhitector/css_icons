var gulp            = require('gulp'),
    jade            = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    autowatch       = require('gulp-autowatch'),
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
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
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
gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss' , ['sass', reload]);
    gulp.watch('./src/**/*.jade' , ['jade', reload]);
});
gulp.task('default', ['jade', 'sass', 'connect', 'watch']);