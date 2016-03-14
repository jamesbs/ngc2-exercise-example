const gulp = require('gulp');
const del = require('del');
const R = require('ramda');
const browserSync = require('browser-sync').create();
const merge = require('merge-stream');

const vendorFiles = ['jspm_packages/**/*']
const applicationFiles = [
    'config.js',
    'app/**/*.{js,html,gif,jpg,png,ttf}'
];
    
gulp.task('clean', () => del('dist'));

gulp.task('vendor', ['clean'], () => {
    return gulp.src(vendorFiles, { base: '.' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['vendor'], () => {
    return gulp.src(applicationFiles)
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch(applicationFiles, ['build']);
});


gulp.task('start', ['watch'], () => {
    browserSync.init({
       server: {
           baseDir: "dist"
       } 
    });
});