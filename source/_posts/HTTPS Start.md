---
title: HTTPS Start !
tags: 笔记
comments: true
reward: true
abbrlink: 2040671323
date: 2016-05-17 18:12:01
---
许久没有开自己的博客了，也没有更新，今天就水一发吧。

前两天决定给博客开启HTTPS访问，结果没想到就此摊上了一大堆事。

首先是主机，从阿里云的云虚机迁移到了腾讯云服务器。
<!-- more -->

服务器直接用的amh架构，懒得自己搭了，PHP7.0什么的日后再论（估计自己搭的话又是一大堆烂摊子）。

好不容易把博客搬过来了，尼玛第一个问题就是emlog在nginx下的UrlRewrite问题，试了网上的好多方法都不行，最后用convert-apache-htaccess-to-nginx成功解决问题（<http://www.anilcetin.com/convert-apache-htaccess-to-nginx/>）。

然后申请ssl证书，用的startssl，匹配了五个域名，之后可能会用到，然后再把证书绑定到了cdn和服务器上，都还是一路顺畅。

一切准备就绪，满心欢喜的打开博客，一把小黄锁映入眼帘，图片全部变成了X，多说消失了，音乐播放器消失了，控制台一看瞬间感觉自己任重道远QAQ。

先把之前放在七牛云的文件替换成了https链接，然后停用了 音乐播放器，，然后停用了分享插件（百度分享的锅）。

接下来解决多说的问题，因为之前已经把多说JS本地化了，所以以为问题不大，谁知道换好后多说头像神坑，最后在近泽jrotty的帮助下换了个多说JS，在SAE上扔了个用于头像反代的PHP（详见<https://www.levey.cn/2016/413.htm>l），然后多说表情的问题，根据近泽jrotty的提议，直接用的颜表情2333（<https://github.com/siitakechan/Duoshuo-Kaomoji>），我还挺喜欢的。

本来以为大功告成，然而问题来了，先是颜表情会被多说评论框的#topbar遮住的问题，直接改颜表情的z-index不起作用，貌似被评论框的z-index限制了，放在下面又会被下面的评论遮住，不得已要改多说的CSS，好不容易把#topbar的z-index改成3，结果发现登陆过后其下拉框会被评论框遮住，没办法，强迫症晚期，继续改，改成4又会遮住颜表情，不得不又加了个:hover，在其中把z-index改成4，welldone，这个问题我想除了我也没谁遇得到了，不上图了。

然后由于之前给博客加了全站PJAX，颜表情居然在异步更新后失效了，哎，不得不又去改JS，最后用了pjax的函数结合jquery回调颜表情的JS：
```javascript
$(document).on('pjax:complete', function() {
	pajx_loadEmoji();
});
function pajx_loadEmoji(){
	$.getScript("https://www.iqi7.com/content/templates/CoolBlack/js/emoji.js");
}
```
多说的问题到此得以解决。

然后解决图片的问题，之前一直用的贴图库，没想到这真是一个大坑，试了一下，不支持，难道要一张一张的换？突然想到了多说头像用到的PHP反代，瞬间想到也用那种办法反代贴图库的图片吧，网上找了些源码，自己也根据实际情况改了点，结果如下：
```php
error_reporting(0);
if(isset($_GET['url']) && isset($_SERVER['HTTP_REFERER'])){
   $url = urldecode($_GET['url']);
   $referer = parse_url($_SERVER['HTTP_REFERER']);
   if(preg_match("/^http/",$url) && $referer['host']=='www.iqi7.com'){/*防盗链验证*/
       $opts = array('http'=>array(
           'method'=>'GET',
           'timeout'=>10
       )); 
       $result = file_get_contents($url,FALSE,stream_context_create($opts)); 
       if($result){
           header("Cache-Control:public;maxage=604800");/*设置缓存时间*/
           header('Content-type: image/png');
           echo $result;
       }else{
           header("HTTP/1.1 404 Not Found");
       }
   }else{
       header("HTTP/1.1 400 Bad Request");
   }
}else{
   header("HTTP/1.1 403 Forbidden");
}
```
然后是图片链接的替换问题，之前链接都是以" http://i "开头的，贴图库的链接是i2.tietuku.cn/i3.tietuku.cn ......由于我博客中没有 http://i 开头的其他链接，直接上数据库换
```sql
UPDATE  `emlog_blog` SET content = REPLACE( content,  'http://i',  'https://www.iqi7.com/proxy.php?url=http://i' ) ;
```
执行SQL命令后，大功告成！

其次是侧边栏的友链的favicon，同样使用上述方法反代（使用了g.soz.im的API接口）。
```html
https://www.iqi7.com/proxy.php?url=http://g.soz.im/<?php  echo 友链; ?>cdn.ico?defaulticon=bluepng
```
然后是分享插件的问题，之前把它停用了，我并不想抛弃他，继续开始改造，竟然是百度分享的锅，那就把百度分享全部停掉，突然发现多说分享还是不错，直接用多说分享进行替换，找到插件Liang_zsshare.php，把百度分享替换为：
```HTML
<div class="ds-share flat" data-thread-key="'.$_SERVER['REQUEST_URI'].'" data-title="文章'.$_SERVER['REQUEST_URI'].'" data-images="'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'" data-content="七夏浅笑博客" data-url="'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'">
   <div class="ds-share-inline">
     <ul  class="ds-share-icons-16">    
      <li data-toggle="ds-share-icons-more"><a class="ds-more" href="javascript:void(0);">分享到：</a></li>
       <li><a class="ds-weibo" href="javascript:void(0);" data-service="weibo">微博</a></li>
       <li><a class="ds-qzone" href="javascript:void(0);" data-service="qzone">QQ空间</a></li>
       <li><a class="ds-qqt" href="javascript:void(0);" data-service="qqt">腾讯微博</a></li>
       <li><a class="ds-wechat" href="javascript:void(0);" data-service="wechat">微信</a></li>
     </ul>
     <div class="ds-share-icons-more">
     </div>
   </div>
</div>
```
到此这个插件已经可以正常使用了，接下来就是一言的问题了，直接换成了https链接（还好它支持），但是突然想把它改成自动更换的（异步加载），于是浏览了好多使用一言的网站，最后看到一个合适的，扒了下来，再稍加改造2333，顶部显示一言的地方：
```HTML
<a id="hitokotoa" href="#" target="_blank"><span id="hitokoto" style="display: block;"></span></a>
```
页面底部的调用JS：
```javascript
$(document).on('pjax:complete', function() {
    hitokoto(e);
genHitokoto();
});
function hitokoto(e) {
    $("#hitokoto").stop().fadeOut(function() {
        $("#hitokoto").html(e.hitokoto);
        var element = document.getElementById('hitokotoa');
        element.href = "http://hitokoto.us/view/" + e.id;
        $("#hitokoto").stop().fadeIn()
    })
};
function genHitokoto() {
    var e = ["a", "b", "c", "d"],
    t = document.createElement("script");
    t.type = "text/javascript";
    t.id = "hitokotoko_js";
    t.src = "https://api.hitokoto.us:214/rand?cat=" + e[Math.floor(Math.random() * e.length)] + "&encode=jsc&charset=utf-8";
    $("#hitokoto").append(t);
};
setInterval(genHitokoto, 1e4);
genHitokoto();
```
虽然说是扒的，其实我改了好多的说QAQ

最后是音乐播放器，哎，果然是鱼和熊掌不可兼得，好不容易找到一个支持https的播放器js，然而其调用的音频是不支持https的（网易云音乐），而且，好像主流的音乐站都不支持https，所以只要加载音乐一定会有小黄锁（反代音乐我暂时没有考虑，毕竟音频和图片是有区别的），刚想放弃的时候，突然想到使用一个按钮来手动加载播放器不就行了，这样一来只有要听音乐的时候才会有小黄锁了OLZ，于是把侧边栏的一个小模块做成了按钮，然而启用了PJAX，貌似在不刷新页面的情况下是加载不了的，这就尴尬了QAQ，最后只好用javascript结合php来实现，以下是JS部分：
```javascript
function MusicPlayer(){
    $('#LoadPlayer').click(function(){
    LoadPlayer();
    });
    function LoadPlayer() {
        window.location.href="<?php echo 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'?LoadPlayer=1'; ?>";
    };
};
MusicPlayer();
$(document).on('pjax:complete', function() {
    MusicPlayer();
});
```
以下是PHP部分（其实还是比较简单的）：
```php
if(isset($_GET['LoadPlayer'])){
    $LoadPlayer = $_GET['LoadPlayer'];
    if($LoadPlayer){
        echo '<script src="https://api.miyay.cn/static/smusic.js?id=113054379"></script>';
    }
}
```
这样就能做到点击按钮后打开页面通过URL把参数传给PHP来输出播放器的JS，手动刷新页面后播放器会消失，这时候又变成可爱的小绿锁了o(￣▽￣)d