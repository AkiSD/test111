const gulp = require('gulp');

const less = require('gulp-less');
const plumber = require('gulp-plumber');


const browserSync = require('browser-sync').create();

const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');

const scssPath = './app/less/style.less';
const scssAllFilesPath = './app/style/less/**/*';
const cssPath = './app/css';

const htmlAllFilesPath = './app/**/*';


function style() {
    return gulp.src(scssPath)
    .pipe(plumber())
    .pipe(less())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest(cssPath))
    .pipe(browserSync.stream());
};


function html() {
    return gulp.src(['./app/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./app'))
    .pipe(browserSync.stream());
}



function watch() {
    browserSync.init({
        port: 3010,
        reloadOnRestart: true,
        server: {
            baseDir: './app',
            directory: true
        }
    });

    gulp.watch(htmlAllFilesPath, html);
    gulp.watch(scssAllFilesPath, style);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.html = html;
exports.style = style;
exports.watch = watch;
