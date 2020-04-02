const {series, src, dest} = require('gulp');
const sass = require('gulp-sass')
const cssbeautify = require('gulp-cssbeautify');
const clean = require('gulp-clean');

// 准备目录
function prepareDirectory() {
    return src('dist')
        .pipe(clean());
}

// 编译 scss
function compileSass() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist'));
}

// 格式化 css
function formatCss() {
    return src('dist/*.css')
        .pipe(cssbeautify())
        .pipe(dest('dist'));
}

exports.default = series(prepareDirectory, compileSass, formatCss);
