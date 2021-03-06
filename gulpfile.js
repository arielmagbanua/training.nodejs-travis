const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');

const jsTask = () => {
	return src([
		/* Add your JS files here, they will be combined in this order */
		'src/js/main.js'
	]).pipe(plumber())
		.pipe(babel({
			presets: [
				[
					'@babel/env', { modules: false }
				]
			]
		}))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(dest('public/js'));
};

const stylesTask = () => {
	return src('src/styles/main.scss')
		.pipe(plumber())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compressed',
			// outputStyle: 'compact',
			// outputStyle: 'nested',
			// outputStyle: 'expanded',
			precision: 10
		}))
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('public/styles'));
};

const htmlTask = () => {
	return src(['./src/**/*.html'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(dest('views'));
};

exports.jsTask = jsTask;
exports.stylesTask = stylesTask;
exports.htmlTask = htmlTask;
exports.watch = () => {
	watch('src/js/**/*.js', series(jsTask));
	watch('src/**/*.html', series(htmlTask));
	watch('src/styles/**/*.scss', series(stylesTask));
};

exports.default = series(jsTask, stylesTask, htmlTask);
