const path = require("path");
const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const changed = require("gulp-changed");


/*******************
 * 全局配置
 *******************/

var config = {
  pages: path.resolve(__dirname, "pages"),
  components: path.resolve(__dirname, "components"),
  assets: path.resolve(__dirname, "assets"),
  templates: path.resolve(__dirname,"templates")
};

/*******************
* 任务
*******************/

// pages目录下sass 处理
gulp.task('pageScss', function () {
return gulp.src(config.pages + '/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename(function(path){
      path.extname = '.wxss';
  }))
  .pipe(gulp.dest(config.pages))
  .on('end', function() {
      console.log('[完成] sass 编译完毕');
  });
});

// components目录下sass 处理
gulp.task('componentScss', function () {
return gulp.src(config.components + '/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename(function(path){
      path.extname = '.wxss';
  }))
  .pipe(gulp.dest(config.components))
  .on('end', function() {
      console.log('[完成] sass 编译完毕');
  });
});

//监视
gulp.task('watch', function(event) {
  gulp.watch('pages/**/*.scss', ['pageScss']);
  gulp.watch('components/**/*.scss', ['componentScss']);
  gulp.watch('assets/**/*.scss', ['pageScss']);
  gulp.watch('templates/**/*.scss', ['pageScss']);
});

//开发
gulp.task('dev', ['pageScss','componentScss','watch']);


//默认任务
gulp.task('default', ['dev']);
