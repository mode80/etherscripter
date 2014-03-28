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

// Minify my 
gulp.task('min', function() {
    return gulp.src([
    			'dev/LLL*.js',
    			'dev/storage.js',
    			'dev/messages.js',
    			'dev/etherscripter.js',
    			])
        .pipe(concat('my.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('0/'))
});

// Concat libraries
gulp.task('concat', ['min'], function() {
    return gulp.src([
    			'dev/blockly_compressed.js',
    			'0/my.min.js',
				'dev/jquery.min.js',
				'dev/bootstrap.min.js',
				'dev/samples.js',
   			])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('0/'))
});

// Stage others 
gulp.task('stage', function() {
    return gulp.src([
    			'dev/*.css',
                'dev/media/**/*.*',
    			],
                {base: 'dev/'}
                )
        .pipe(gulp.dest('0'))
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
gulp.task('default', [/* 'lint',*/ 'min', 'concat', 'stage', 'fixrefs']);