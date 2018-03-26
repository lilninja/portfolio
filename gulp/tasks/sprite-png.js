var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../config');

gulp.task('sprite', function () {
  var spriteData = gulp.src(config.src.iconsPng + '/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '/img/icons/sprite.png'
  }));
  return spriteData.pipe(gulp.dest('app/img/icons/'));
});