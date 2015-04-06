// Include main components
var gulp = require('gulp');
var gutil = require('gulp-util');
var lr = require('tiny-lr');

// Include CSS components
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// Include JS components
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Include utilities
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var server = lr();

// Source and Target directories
var sourceLESS = 'source/less';
var targetCSS = 'public/css';

var sourceJS = 'source/js';
var targetJS = 'public/js';

