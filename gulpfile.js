const { src, dest, parallel, series } = require('gulp');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");

function cleanBuild() {
    return src('build', {allowEmpty: true})
        .pipe(clean())
}

function html() {
    return src('server/**/*.html')
        .pipe(dest('build/'));
}

function tsc() {
    return src('server/**/*.ts')
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(dest('build/'));
}

exports.cleanBuild = cleanBuild;
exports.html = html;
exports.tsc = tsc;
exports.default = series(cleanBuild, parallel(html, tsc));
