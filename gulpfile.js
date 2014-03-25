var gulp = require('gulp'); 

//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlreplace = require('gulp-html-replace');

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Concatenate 
gulp.task('concatmin', function() {
    var stream = gulp.src([
    			'dev/LLL*.js',
    			'dev/storage.js',
    			'dev/messages.js',
    			'dev/etherscripter.js',
    			])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('0/'))
    return stream
});

// Stage others 
gulp.task('stage', function() {
    var stream = gulp.src([
    			'dev/*.css',
    			'dev/blockly_compressed.js',
    			])
        .pipe(gulp.dest('0'))
    return stream
});

// Fix Refs
gulp.task('fixrefs', function() {
  gulp.src('dev/index.html')
    .pipe(htmlreplace({
        'js': 'all.min.js'
    }))
    .pipe(gulp.dest('0/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/*.js', ['concat']);
});

// Default Task
gulp.task('default', [/* 'lint',*/ 'concatmin', 'stage', 'fixrefs']);