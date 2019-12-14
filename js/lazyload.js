//lazyLoad.js
//懒加载图片
//添加class标签"lazyload"即可实现图片及背景的懒加载

(function ($win, iteratee) {
  //针对WEB、NODE和浏览器环境确定环境变量
  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this || {}

  $win.onload = $win.onscroll = function () {
    iteratee(root)
  }
}(window, function ($win) {
  var bodyScrollHeight = document.body.scrollTop; // body滚动高度
  var windowHeight = window.innerHeight; // 视窗高度
  var imgs = document.getElementsByClassName('lazyload');

  for (var i = 0; i < imgs.length; i++) {
    var imgHeight = imgs[i].offsetTop; // 图片距离顶部高度  
    if (imgHeight < windowHeight + bodyScrollHeight) {
      if (imgs[i].style.backgroundImage) {
        imgs[i].style.backgroundImage = imgs[i].getAttribute('data-src')
      } else {
        imgs[i].src = imgs[i].getAttribute('data-src');
      }
      imgs[i].className = imgs[i].className.replace('lazyload', '')
    }
  }
}))