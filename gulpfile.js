var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
  return gulp.src('./src/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./'));
});