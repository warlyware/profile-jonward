'use strict';

var gulp = require('gulp');
var config = require('./gulp/config.json');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload

gulp.task('styles', function() {
    gulp.task('sass', function () {
      return gulp.src(config.paths.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));
    });
});

gulp.task('copy:html', function() {
  return gulp.src(config.paths.src.html)
    .pipe(gulp.dest('build'));
});

gulp.task('copy:js', function() {
  return gulp.src(config.paths.src.js)
    .pipe(gulp.dest('build'));
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(config.paths.src.html, {cwd: 'src/app'}, reload);
    gulp.watch(config.paths.src.js, {cwd: 'src/app'}, reload);
    gulp.watch(config.paths.src.styles, ['sass'], reload);
});

gulp.task('default', ['styles', 'copy:html', 'copy:js', 'serve', 'watch']);
