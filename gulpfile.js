var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var sass = require('gulp-sass');
var jest = require('jest-cli');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();

var jsDest = './public/js';
var bundler = watchify(browserify({
    	entries: './app/main.jsx',
    	debug: true
  	}));
var jestConfig = {
    rootDir: 'app'
};

function bundle(watching) {
    bundler
    .transform(babel, {presets: ["react"]})
    .bundle()
    .on('error', gutil.log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(jsDest));
}

gulp.task('watch', function() {
    bundle(true);
    bundler.on('update', function() {
        console.log('updating...');
        bundle(true);
    });
});

gulp.task('build', function() {
    bundle();
    bundler.close();
});

gulp.task('server',['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./public/scss/*.scss", ['sass']);
    gulp.watch("./public/js/*.js").on('change', browserSync.reload);;
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("./public/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
});

gulp.task('tdd', function(done) {
    gulp.watch([ jestConfig.rootDir + "/**/*.js" ], [ 'test' ]);
});

gulp.task('default',['server','build','watch','tdd']);
