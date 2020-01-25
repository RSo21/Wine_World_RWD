const gulp = require("gulp");
const sass = require("gulp-sass");
const nodeSass = require("node-sass");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = nodeSass;

gulp.task("css", function() {
    return (
        gulp
            .src('scss/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
            // .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("./css/"))
    );
});

gulp.task("watch", function() {
    gulp.watch("./scss/**/*.scss", gulp.series("css"));
});

gulp.task("default", gulp.parallel("css", "watch"));
