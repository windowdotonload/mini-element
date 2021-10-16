/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

"use strict";

const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  return src("./src/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest("./lib"));
}

function copyfont() {
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./lib/fonts"));
}

function modcss() {
  return watch("./src/*.scss", function () {
    console.log("this is modcss");
    compile();
  });
}
exports.build = series(compile, copyfont, modcss);
