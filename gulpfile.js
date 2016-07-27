var gulp = require('gulp'),
//less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  htmlify = require('gulp-angular-htmlify'),
  jshint = require('gulp-jshint'),
  iife = require('gulp-iife'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  watch = require('gulp-watch'),
//gulpif = require('gulp-if'),
  livereload = require('gulp-livereload'),
  serve = require('gulp-serve');

gulp.task('js-deps', function () {
  gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/mousetrap/mousetrap.min.js',
    './bower_components/lodash/lodash.js',
    './bower_components/moment/moment.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './bower_components/rangeslider.js/dist/rangeslider.min.js'
  ])
    .pipe(concat('deps.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('partials', function () {
  gulp.src('./app/modules/**/*.html')
    .pipe(htmlify({
      customPrefixes: ['ui-']
    }))
    .pipe(gulp.dest('./build/partials'))
    .pipe(livereload());
});

gulp.task('css-deps', function () {
  gulp.src([
    "./bower_components/bootstrap/dist/css/bootstrap.min.css",
    "./bower_components/font-awesome/css/font-awesome.min.css",
    "./bower_components/rangeslider.js/dist/rangeslider.css"
  ])
    .pipe(concat('css-deps.css'))
    .pipe(gulp.dest('./build/css'));

  gulp.src('./bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('js', function () {
  var baseDir = __dirname + '/app/modules',
    outputDir = __dirname + '/build/js',
    outputFilename = 'app.js';

  gulp.src([
    baseDir + "/*module.js",
    baseDir + "/**/*module.js",
    baseDir + "/**/*.js"
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(iife())
    //.pipe(sourcemaps.init())
    .pipe(concat(outputFilename))
    .pipe(ngAnnotate())
    //.pipe(uglify())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir))
    .pipe(livereload());
});

// gulp.task('less', function () {
//     gulp.src([
//         './public/less/app.less'
//     ])
//         .pipe(plumber())
//         .pipe(less())
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('./build/css'))
//         .pipe(livereload());
// });

gulp.task('data', function () {
  gulp.src('./app/data/movies.json')
    .pipe(gulp.dest('./build/data/'));
});

gulp.task('serve', serve('.'));

gulp.task('watch', function () {
  livereload.listen();
  watch(['./app/modules/*.js', './app/modules/**/*.js'], function () {
    gulp.start('js');
  });

  watch('./app/less/*.less', function () {
    gulp.start('less');
  });

  watch(['./app/modules/*.html', './app/modules/**/*.html'], function () {
    gulp.start('partials');
  });
});

gulp.task('default', ['js-deps', 'partials', 'data', 'css-deps', 'js', 'watch', 'serve']);