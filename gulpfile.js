const { src, dest, parallel, series } = require('gulp');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
const sassCompiler = require('node-sass');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const tsProject = ts.createProject('tsconfig.server.json');
sass.compiler = sassCompiler;

function cleanBuild() {
    return src('build/', {allowEmpty: true})
        .pipe(clean())
}

function html() {
    return src('server/**/*.html')
        .pipe(dest('build/'));
}

function tscServer() {
    return src('server/**/*.ts')
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(dest('build/'));
}

function scss() {
    return src('public/**/*.scss')
        .pipe(sass())
        .pipe(concatCss('styles.css'))
        .pipe(cleanCss())
        .pipe(dest('build/public/css/'))
}

exports.cleanBuild = cleanBuild;
exports.html = html;
exports.tscServer = tscServer;
exports.scss = scss;
exports.default = series(cleanBuild, parallel(html, tscServer, scss));
