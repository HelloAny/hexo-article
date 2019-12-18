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
  var windowHeight = $win.innerHeight; // 视窗高度
  var imgs = document.getElementsByClassName('lazyload');

  for (var i = 0; i < imgs.length; i++) {
    if (getOffsetTop(imgs[i], windowHeight)) {
      if (imgs[i].style.backgroundImage) {
        imgs[i].style.backgroundImage = imgs[i].getAttribute('data-src')
      } else {
        imgs[i].src = imgs[i].getAttribute('data-src');
      }
      imgs[i].className = imgs[i].className.replace('lazyload', '')
    }
  }

  /**
   * 判断图片高度
   * @return <Boolean>
   */
  function getOffsetTop(element, winHeight) {
    var ele = element instanceof Object ? element : Object.keys(element)
    return ele.getBoundingClientRect().top < winHeight + 100 //距离顶部100px时开始加载图片
  }
}))