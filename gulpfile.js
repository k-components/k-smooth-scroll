'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var SRC = 'src/js/smooth-scroll.js';
var DEST = 'lib/';

gulp.task('default', function() {
  return gulp.src(SRC)
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});