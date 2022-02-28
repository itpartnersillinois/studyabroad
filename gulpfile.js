var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var cssmin = require('gulp-cssmin');
var sass = require('gulp-dart-sass');

gulp.task("styles", function () {
    return gulp.src(['_sass/main.scss'])
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat("site.css"))
        .pipe(gulp.dest("style/"));
});

gulp.task("country", function () {
    return gulp.src(['_data/countries.json'])
        .pipe(rename('countries.js'))
        .pipe(gulp.dest("js"));
});

gulp.task("default", gulp.series("styles", "country"));