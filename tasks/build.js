'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var path = require('path');
var del = require('del');

var pjson = require('../package.json');

var basePath = path.join(__dirname, '..');

var srcDir = path.join(basePath, pjson.siteDir);
var destDir = path.join(basePath, pjson.buildDir);

var stylesheetsDir = path.join(srcDir, 'stylesheets');
var stylesheetsDestDir = path.join(destDir, 'css');

var paths = {
  jsCodeToTranspile: [
    path.join(srcDir, '**/*.js'),
    '!' + path.join(srcDir, 'node_modules/**'),
    '!' + path.join(srcDir, 'bower_components/**')
  ],
  toCopy: [
    // node_modules stuff
    path.join(srcDir, 'node_modules/**'),
    '!' + path.join(srcDir, 'node_modules/.bin/'),
    '!' + path.join(srcDir, 'node_modules/{bower,bower/**}'),
    // bower_components
    path.join(srcDir, 'bower_components/**/*.css'),
    '!' + path.join(srcDir, 'bower_components/**/*.html'),
    // the html
    path.join(srcDir, '**/*.html'),
    path.join(srcDir, 'favicon.ico'),
    // the css
    path.join(srcDir, 'css/**'),
    '!' + path.join(srcDir, '**/*.scss'),
    '!' + path.join(srcDir, 'package.json')
  ],
}

gulp.task('clean', function(cb) {
  del(destDir, cb);
});

var copyTask = function() {
  return gulp.src(paths.toCopy, {base: srcDir})
    .pipe(gulp.dest(destDir))
    .pipe(connect.reload());
}
gulp.task('copy', ['clean'], copyTask);
gulp.task('copy-watch', copyTask);

var transpileTask = function() {
  return gulp.src(paths.jsCodeToTranspile)
    .pipe(babel())
    .pipe(gulp.dest(destDir))
    .pipe(connect.reload());
}
gulp.task('transpile', ['clean'], transpileTask);
gulp.task('transpile-watch', transpileTask);

var sassTask = function() {
  // only sass main.scss to main.css
  return gulp.src(path.join(stylesheetsDir, 'main.scss'))
    .pipe(sass())
    .pipe(gulp.dest(stylesheetsDestDir))
    .pipe(connect.reload());
}
gulp.task('sass', ['clean'], sassTask);
gulp.task('sass-watch', sassTask);

gulp.task('watch', function() {
  gulp.watch(paths.jsCodeToTranspile, ['transpile-watch']);
  gulp.watch(paths.toCopy, ['copy-watch']);
  gulp.watch(path.join(stylesheetsDir, '**/*.scss'), ['sass-watch']);
})

gulp.task('build', ['transpile', 'sass', 'copy']);

gulp.task('connect', ['build', 'watch'], function() {
  connect.server({
    root: destDir,
    livereload: true
  });
});
