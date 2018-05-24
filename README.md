# bifeng

因小程序不支持css预编译语言，所以使用`gulp`来将scss文件转换成小程序识别的.wxss文件。

## 前端开发  
需要安装node环境，并全局安装gulp
```bash
  sudo npm i -g gulp

  npm install

  gulp
```
gulp会监听./pages文件夹内scss文件的变化，实时编译

## 后端开发
前端对后端开发无影响，后端只需关注`wxml`, `.js`等配置文件
