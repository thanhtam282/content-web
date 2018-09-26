module.exports = function (gulp, $, browserSync) {
	gulp.task('tao-js', function () {
		return gulp.src([
				'./src/scripts/**/*.js'
			])
			.pipe($.sourcemaps.init())
			.pipe($.concat('app.js'))
			.pipe($.babel())
			.pipe($.sourcemaps.write(''))
			.pipe(gulp.dest('./dist/js'));
	});
};
