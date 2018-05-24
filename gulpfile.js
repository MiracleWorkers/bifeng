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
  assets: path.resolve(__dirname, "assets")
};

/*******************
* 任务
*******************/

// sass 处理
gulp.task('scss', function () {
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

//监视
gulp.task('watch', function(event) {
  gulp.watch(config.pages+ '/**/*.scss', ['scss']);
  gulp.watch(config.components+ '/**/*.scss', ['scss']);
  gulp.watch(config.assets+ '/**/*.scss', ['scss']);
});

//开发
gulp.task('dev', ['watch', 'scss']);


//默认任务
gulp.task('default', ['dev']);