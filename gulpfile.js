const {series, src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require('gulp-header');
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('package.json'));
const banner = [
    '@charset "UTF-8";\n',
    '/*!',
    ' * <%= name %> -<%= homepage %>',
    ' * Version - <%= version %>',
    ' * Licensed under the MIT license - https://opensource.org/licenses/MIT',
    ' *',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
    ' */\n\n',
].join('\n');

// 编译 scss
function build() {
    return src('emmet.scss')
        .pipe(sass())
        .pipe(dest('./'));
}

// 格式化 css
function format() {
    return src('emmet.css')
        .pipe(cleanCSS({format: 'beautify'}))
        .pipe(dest('./'));
}

// 压缩 css
function minify() {
    return src('emmet.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./'));
}

// 增加头部信息
function addHeader() {
    return src('*.css')
        .pipe(header(banner, pkg))
        .pipe(dest('./'));
}

exports.default = series(build, format, minify, addHeader);
