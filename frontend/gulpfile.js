/**
 * Created by Julius Alvarado on 5/7/2017.
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    mainBowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    del = require('del');

var paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    tempIndex: 'temp/index.html',
    index: 'app/index.html',
    appSrc: ['app/**/*.js', '!app/index.html'],
    bowerSrc: 'bower_components/**/*'
};

var tempIndex = gulp.src(paths.index).pipe(gulp.dest(paths.tempVendor));

//-- DEFAULT task:
gulp.task('default', ['watch']);

//-- other tasks:
gulp.task('scripts', function () {
    var appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(paths.tempVendor));

    return gulp.src(paths.tempIndex)
        .pipe(inject(appFiles, {relative: true}))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('vendors', function () {
    var tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));

    return gulp.src(paths.tempIndex)
        .pipe(inject(tempVendors, {
            relative: true, name: 'vendorInject'
        }))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('serve', ['copyAll'], function () {
    return gulp.src(paths.temp).pipe(webserver({
        livereload: true,
        proxies: [{
            source: '/api',
            target: 'http://localhost:1337'
        }]
    }));
});

gulp.task('copyAll', function () {
    var tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));
    var appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(pathsTemp));

    return gulp.src(paths.index)
        .pipe(inject(tempVendors, {relative: true, name: 'vendorInject'}))
        .pipe(inject(appFiles, {relative: true})).pipe(gulp.dest(paths.temp));
});

gulp.task('watch', ['serve'], function () {
    gulp.watch(paths.appSrc, ['scripts']);
    gulp.watch(paths.bowerSrc, ['vendors']);
    gulp.watch(paths.index, ['copyAll']);
});

gulp.task('clean', function(){
    del([paths.temp]);
});


//