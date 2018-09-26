module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
				"node_modules/@fortawesome/fontawesome-free/css/all.min.css",
				'bower_components/animate.css/animate.min.css',
				'bower_components/offline/themes/offline-theme-default.css',
				'bower_components/angular-toastr/dist/angular-toastr.min.css',
				// // OWL
				'src/css/offline-language-vietnam.min.css',
			])
			.pipe($.concat('addons.css'))
			.pipe(gulp.dest('./dist/css'));
	});
};
