module.exports = function (gulp, $, browserSync) {
	gulp.task('copy', function () {
		return gulp.src([
				'./src/*.*',
			])
			.pipe(gulp.dest('./dist'));
	});
};
