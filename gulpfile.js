const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

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
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(minifycss())
			.pipe(sourcemaps.write('.'))
			.pipe(dest('public/styles'));
};


exports.jsTask = jsTask;
exports.stylesTask = stylesTask;
exports.watch = () => {
	watch('src/js/**/*.js', series(jsTask));
	watch('src/styles/**/*.scss', series(stylesTask));
};