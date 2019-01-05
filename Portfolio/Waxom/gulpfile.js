var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', notify.onError({
            message: '<%= error.message %>',
            title: 'Sass Error!',
            sound: 'Pop'
        })))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        // .pipe(notify('WellDone!'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        // notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/*html', browserSync.reload);
});
