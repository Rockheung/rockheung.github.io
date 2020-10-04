var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
  pages: ["admin/src/*.html"],
  styles: ["admin/src/*.css"],
};

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("admin"));
});

gulp.task("copy-css", function () {
  return gulp.src(paths.styles).pipe(gulp.dest("admin"));
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html", "copy-css"), function () {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["admin/src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .bundle()
      .pipe(source("main.js"))
      .pipe(gulp.dest("admin"));
  })
);
