var gulp = require('gulp'); 

//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Concatenate 
gulp.task('concat', function() {
    var stream = gulp.src([
    			'dev/LLL*.js',
    			'dev/etherscripter.js',
    			'dev/messages.js',
    			'dev/storage.js',
    			])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dev'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('0'));
    return stream
});

gulp.task('min', ['concat'], function() {
    var stream = gulp.src([
    			'dev/LLL*.js',
    			'dev/etherscripter.js',
    			'dev/messages.js',
    			'dev/storage.js',
    			])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('0'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('0'));
    return stream
});

// move files to distribution dir 
gulp.task('move', function() {
    var stream = gulp.src([
    			'dev/*.html',
    			'dev/*.css',
    			'dev/blockly_compressed.js',
    			])
        .pipe(gulp.dest('0'))
    return stream
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/*.js', ['concat']);
});

// Default Task
gulp.task('default', [/* 'lint',*/ 'concat', 'min', 'move']);