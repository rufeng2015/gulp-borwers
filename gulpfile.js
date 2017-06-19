var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// 浏览器兼容工具
var autoprefixer = require('gulp-autoprefixer');
// autoprefixer css兼容工具
var clean = require('gulp-clean');
// gulp 清除文件夹工具
gulp.task('default', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch(['*.html', '*/**/*.html', '*/**/*.js', '*/**/*.css', '*.js', '*.css']).on('change', browserSync.reload);
    // 监控文件的变化,刷新浏览器
    // gulp.watch('js/*.js').on('change', browserSync.reload);
    // gulp.watch('css/*.css').on('change', browserSync.reload);
    // gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('autoprefixer', ['clean'], function() {
    // 添加浏览器兼容工具
    gulp.src(['*.css', '*/**/*.css', '!node_modules/**/*.*'], { base: './' })
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 2 versions', 'Firefox > 20'],
            cascade: true
        }))
        .pipe(gulp.dest('dist/'));
    gulp.src(['*/**/*.html', '*.html', 'js/*.js', 'images/*.*', '!node_modules/**/*.*'], { base: './' }).pipe(gulp.dest('dist/'));
    // 打包对应的文件到相应的文件夹里面
    // gulp.src('*.html', { base: './' }).pipe(gulp.dest('dist/'));
    // gulp.src('js/*.js', { base: './' }).pipe(gulp.dest('dist/'));
    // gulp.src('images/*.*', { base: './' }).pipe(gulp.dest('dist/'));
});
gulp.task('clean', function() {
    // 清除文件夹工具
    return gulp.src('dist', { read: true })
        .pipe(clean());
});
