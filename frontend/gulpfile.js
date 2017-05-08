/**
 * Created by Julius Alvarado on 5/7/2017.
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    mainBowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');

var paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    index: 'app/index.html'
};

//-- DEFAULT task:
gulp.task('default', ['scripts', 'serve']);

//-- other tasks:
gulp.task('scripts', function () {
    var tempIndex = gulp.src(paths.index).pipe(gulp.dest(paths.temp));

    gulp.src('app/**/*.js').pipe(gulp.dest(path.temp));

    var tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));

    tempIndex.pipe(inject(tempVendors, {relative: true})).pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function () {
    gulp.src(paths.temp).pipe(webserver({open: true}));
});


//