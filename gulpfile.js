'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
	console.log('Starting SASS task')
	return gulp.src ('./src/sass/**/*.scss')
		.pipe(sass().on ('error', sass.logError))
		.pip(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', () => {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('scripts', () => {
	console.log('Starting SCRIPTS task')
})

gulp.task('default', () => {
	console.log('Starting DEFAULT task')
})