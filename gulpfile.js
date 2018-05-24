const path = require("path");
const fs = require("fs");
const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const changed = require("gulp-changed");


/*******************
 * 全局配置
 *******************/

var config = {
  src: './pages'
};

/*******************
* 任务
*******************/

// sass 处理
gulp.task('scss', function () {
return gulp.src(config.src + '/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename(function(path){
      path.extname = '.wxss';
  }))
  .pipe(gulp.dest(config.src))
  .on('end', function() {
      console.log('[完成] sass 编译完毕');
  });
});

//监视
gulp.task('watch', function(event) {
  gulp.watch(config.src+ '/**/*.scss', ['scss']);
});

//开发
gulp.task('dev', ['watch', 'scss']);



//帮助
gulp.task('help', function() {
  console.log('----------- gulp命令 -----------');
  console.log('gulp               命令清单');
  console.log('----------- 开发环境 -----------');
  console.log('gulp dev           开发模式');

});


//默认任务
gulp.task('default', ['dev']);