var deploy_dir = '0-4-0'

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
    			'dev/LLL.js',
                'dev/LLL_blocks.js',
                'dev/LLL_from_LLL_blocks.js',
    			'dev/storage.js',
    			'dev/messages.js',
    			'dev/etherscripter.js',
    			])
        .pipe(concat('my.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(deploy_dir))
});

// Concat libraries
gulp.task('concat', ['min'], function() {
    return gulp.src([
    			'dev/blockly_compressed.js',
    			deploy_dir + '/my.min.js',
				'dev/jquery.min.js',
				'dev/bootstrap.min.js',
				'dev/samples.js', // these don't min well so concat unminned
   			])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(deploy_dir))
});

// Stage others 
gulp.task('stage', function() {
    return gulp.src([
    			'dev/*.css',
                'dev/*.html',
                'dev/*.png',
                'dev/*.ico',
                'dev/media/**/*.*',
    			],
                {base: 'dev/'}
                )
        .pipe(gulp.dest(deploy_dir))
});

// Fix Refs
gulp.task('fixrefs', ['stage'], function() {
  gulp.src('dev/index.html')
    .pipe(htmlreplace({
        'js': 'all.min.js'
    }))
    .pipe(gulp.dest(deploy_dir));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/*.js', ['concat']);
});

// Default Task
gulp.task('default', [/* 'lint',*/ 'min', 'concat', 'stage', 'fixrefs']);