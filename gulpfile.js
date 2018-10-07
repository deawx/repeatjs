var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

gulp.task('jsMin', function() 
{
    return gulp.src('src/repeat.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/compiled'));
});
gulp.task('jsNormal', function() 
{
    return gulp.src('src/repeat.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('src/compiled'));
});

gulp.task('autobuild', [ ], function() 
{
    gulp.watch('src/repeat.js', ['jsNormal', 'jsMin']);
});

gulp.task('default', [ 'autobuild' ], function() { });