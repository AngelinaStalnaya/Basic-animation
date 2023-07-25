const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync').create();


const clean = () => {
    return del(['dist'])
};

const resoures = () => {
    return src('src/resources/**')
    .pipe(dest('dist/additional'))
};

const styles = () => {
    return src('src/css/**/*.css')
    .pipe((mode.development(sourcemaps.init())))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe((mode.production(cleanCss({
        level: 2,
    }))))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe((mode.production(htmlMin({
        collapseWhitespace: true,
    }))))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};
// для дев - не обфусцироваль(аглифай) и не минимация(cssmin) + сорсмапы
// для прода - мин + афусц

const svgSprites = () => {
    return src('src/img/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg',
        },
    }}))
    .pipe(dest('dist/img'))
};

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe((mode.development(sourcemaps.init())))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(mode.production(uglify({
        toplevel: true,
    })).on('error', notify.onError()))
    .pipe((mode.development(sourcemaps.write())))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const images = () => {
    return src([
        'src/img/**/*.png',
        'src/img/**/*.jpg',
        'src/img/**/*.jpeg',
        'src/img/*.svg'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist',
        }
    })
};

watch('src/**/*.html', htmlMinify);
watch('src/css/**/*.css', styles);
watch('src/img/svg/**/*.svg', svgSprites);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resoures);

exports.del = clean;

exports.styles = styles;
exports.scripts = scripts;
exports.htmlMinify = htmlMinify;
exports.default = series(clean, resoures, htmlMinify, scripts, styles, images, svgSprites, watchFiles);
