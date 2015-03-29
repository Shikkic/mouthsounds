var gulp = require('gulp'),
    less = require('gulp-less'),
    replace = require('gulp-replace'),
    path = require('path'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    util = require('gulp-util'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('rimraf');
    connect = require('gulp-connect'),
    htmlmin = require('gulp-htmlmin');

gulp.task('less', function() {
  // Builds the CSS
  gulp.src(['less/*.less'])
    .pipe(less().on('error',util.log))
    .pipe(minifyCSS({
    advanced: true
    }))
.pipe(gulp.dest('css'));
});