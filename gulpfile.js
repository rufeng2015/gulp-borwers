var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
gulp.task('default', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch(['*.html', '*/**/*.html', '*/**/*.js', '*/**/*.css', '*.js', '*.css']).on('change', browserSync.reload);
});

gulp.task('autoprefixer', ['clean'], function() {
    gulp.src(['*.css', '*/**/*.css', '!node_modules/**/*.*'], { base: './' })
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 2 versions', 'Firefox > 20'],
            cascade: true
        }))
        .pipe(gulp.dest('dist/'));
    gulp.src(['*/**/*.html', '*.html', 'js/*.js', 'images/*.*', '!node_modules/**/*.*'], { base: './' }).pipe(gulp.dest('dist/'));
});
gulp.task('clean', function() {
    return gulp.src('dist', { read: true })
        .pipe(clean());
});
