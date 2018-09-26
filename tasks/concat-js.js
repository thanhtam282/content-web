module.exports = function(gulp, $, browserSync) {
    gulp.task('concat-js', function() {
        return gulp.src([
                'bower_components/offline/offline.min.js',
                'bower_components/angular/angular.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/angular-animate/angular-animate.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'bower_components/angular-toastr/dist/angular-toastr.min.js',
                'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
            ])
            .pipe($.concat('addons.js'))
            .pipe(gulp.dest('./dist/js'));
    });
};
