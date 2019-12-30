---
title: hexo博客访问优化-CDN选用
tags: 笔记
categories: 程序
comments: true
reward: true
abbrlink: 60859300
date: 2019-11-07 00:34:17
typora-root-url: ..
---

本文为 hexo 博客访问优化上篇，主要介绍了选用合适的国内外 CDN 来加速 hexo 博客全局访问速度的方法，下篇主讲使用腾讯云对象存储来加速博客静态资源的访问，两篇文章均是在**没有备案域名**的前提下进行的 。

<!-- more -->

上篇：[hexo博客访问优化-CDN选用](#前言)

下篇：[hexo博客访问优化-COS使用](/post/1756138088/)

## 前言

又要开始废话啦，想快点看正题的可以直接去看**下一部分**哦。

前段时间给博客换了个主题，其实本来一直想换的，可是一直太懒了哈哈哈，之前那个主题 [yilia](https://github.com/litten/hexo-theme-yilia) 用着bug太多，然后需要使用 webpack 构建所以对我这种咸鱼来说也很不好修改，而且作者也不再更新了，然后看到了两个修改版的 yilia （[第一个](https://github.com/Kiritor/hexo-theme-yilia-l)、[第二个](https://github.com/voidking/hexo-theme-yilia)），本来打算选一个再进行修改的，想了想还是想换一个单栏的博客主题吧，在主题市场找了半天看不到喜欢的，弄得我都快想直接下个 next 主题自己慢慢改了（想想都觉得好累，其实要是有人帮我实现我才不要写代码呢），于是又去 github 上搜了一下，先是看上了 [melody](https://github.com/Molunerfinn/hexo-theme-melody) 这个主题，结果装上了在`hexo g`的时候报错，明明插件我也装了文档我也好好读了的，就是不行，敲伤心，然后就看到了 [fluid](https://github.com/fluid-dev/hexo-theme-fluid) 这个主题，装上完全没问题，于是就它啦。结果用的过程中还是发现有各种问题......所以拿来各种魔改了一遍，顺便[放了出来](https://github.com/qixa/hexo-theme-fluid-mod)，要是谁看上了就拿去用吧~不过主要是自己用，所以没什么大问题可能不会更新什么东西啦。

主题折腾完过后突然发现博客打开真的慢的不行，之前那个主题都没觉得，然后大概看了一下，之前那个主题使用了 webpack 把所有 js 和 css 全部压缩在一个文件里面请求了，这个主题没有进行任何压缩和合并。其实这个还不是影响最大的，影响最大的是这个主题用了挺多框架之类的，调用了很多 [lib](https://github.com/qixa/hexo-theme-fluid-mod/tree/master/source/lib) 而且还都是用的本地的，虽然稳定性会更好不过确实太慢了（要是哪天我真的死了希望有人能帮我全部改回本地链接来吧，这样可能这个破博客的寿命还能长点。

既然问题找到啦，那就来解决一下下吧~

## 文件压缩

之前有看到过 [hexo-uglify](https://github.com/hexojs/hexo-uglify) 这一类单独压缩 js 的 hexo 插件，想再找个能压缩 html 的，看别人博客又看见使用 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 这个插件。好像可以一次对`html css js image`都进行压缩，所以就用这个插件吧

### 安装插件

在博客根目录执行一下代码就安装好啦

```bash
npm install hexo-all-minifier --save
```

### 配置插件

在博客根目录的站点配置文件`_config.yml`里添加配置项

```yaml
# minifier
all_minifier: true

html_minifier:
  enable: true
  ignore_error: false
  exclude:

css_minifier:
  enable: true
  exclude:
    - '*.min.css'

js_minifier:
  enable: false
  mangle: true
  output:
  compress:
  exclude:
    - '*.min.js'

image_minifier:
  enable: false
  interlaced: false
  multipass: false
  optimizationLevel: 2
  pngquant: false
  progressive: false
```

其中`all_minifier`是总开关，其它每一项的开关你需要用哪一项就把`enable`改成`true`就好啦。

我的话 js 压缩没开，不知道是为什么那几个 js 总是提示压缩失败，反正也不多我就不压缩 js 啦；至于图片压缩，因为我图片比较多然后压缩比例不是很高但是真的很费CPU，好几次弄得我电脑都卡死了quq，所以也没开。

## 公共资源使用CDN

我们可以使用一些前端公共库来加速博客里面相关 js 和 css 的访问。

### 公共库CDN选择

在网上搜了一下大概有下面这些前端公共库

- JSDELIVR：https://www.jsdelivr.com/ 国内外都有节点，目前最全的公共库
- Bootstrap 中文网公共库：https://www.bootcdn.cn/ 只有国内节点，大部分常用的库都有
- 又拍云JS库CDN服务：http://jscdn.upai.com/ 国内外都有节点，但是只有很少几种框架
- CDNJS：https://cdnjs.com/ 国外前端公共库，用的是 cloudflare，很全面
- 字节跳动前端公共库：https://cdn.bytedance.com/ 只有国内节点，暂时没了解过
- 七牛云的前端公共库：https://www.staticfile.org/ 国内外都有节点，同步国外[CDNJS 源站](https://github.com/cdnjs/cdnjs)，很全面

本来我打算全部换成用 JSDELIVR 的，结果发现国内有时候请求的时候会比较卡，我也不知到为什么，所以最后选了**七牛云**的库，国内外访问都有比较好的速度，没有的才用 **JSDELIVR** 的替换。

### 公共库CDN使用

然后修改主题中静态文件的链接，有的主题配置文件里面可以直接设置，比如我用的主题有一个`_static_prefix.xml`配置文件可以直接在里面进行修改。

```yaml
#---------------------------
# 这里是配置 JS CSS 静态资源的 URL 前缀，可以自定义成 CDN 地址，
# 请注意，您最好使用与内部版本相同的版本，以避免潜在的问题，
# 在站点上启用 https 时，请使用 CDN 地址的 https 协议，
# 同样，这里的配置也支持覆盖功能
# ** 如果你不知道如何设置，请不要做任何改动 **
#
# Here is the url prefix to configure JS and CSS static assets. Set CDN addresses you want to customize.
# Be aware that you would better use the same version as internal ones to avoid potential problems.
# Please use the https protocol of CDN files when you enable https on your site.
# the configuration here supports overwrite
# DO NOT EDIT THE FOLLOWING SETTINGS UNLESS YOU KNOW WHAT YOU ARE DOING
#---------------------------

#---------------------------
# 内部静态
# Internal static
#---------------------------

internal_js: /js
internal_css: /css
internal_img: /img


#---------------------------
# 第三方库
# Third-party library
#---------------------------

anchor: https://cdn.staticfile.org/anchor-js/4.2.0/ #/lib/anchor

font_awesome: https://cdn.staticfile.org/font-awesome/5.10.0/ #/lib/font-awesome

github_markdown: https://cdn.staticfile.org/github-markdown-css/3.0.1/ #/lib/github-markdown

jquery: https://cdn.staticfile.org/jquery/3.4.1/ #/lib/jquery

bootstrap: https://cdn.staticfile.org/twitter-bootstrap/4.3.1/ #/lib/bootstrap

mdbootstrap: https://cdn.staticfile.org/mdbootstrap/4.8.7/ #/lib/mdbootstrap

...
```

如果主题没有相关配置文件就只有自己去改模板文件了（感觉好麻烦诶~），每个主题都不一样的，但是大部分都在主题 layout 目录下的类似`head.ejs`和`footer.ejs`的文件里。

举个例子， 找到以下 JS 和 CSS

```ejs
<script src="<%- config.root %>js/jquery-2.0.3.min.js"></script>
<script src="<%- config.root %>js/jquery.imagesloaded.min.js"></script>
<script src="<%- config.root %>fancybox/jquery.fancybox.pack.js"></script>
<link rel="stylesheet" href="<%- config.root %>fancybox/jquery.fancybox.css" media="screen" type="text/css">
```

替换为前端公共库的链接

```ejs
<script src="https://cdn.staticfile.org/jquery/2.0.3/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/jquery.imagesloaded/2.1.0/jquery.imagesloaded.min.js"></script>
<script src="https://cdn.staticfile.org/fancybox/2.1.5/jquery.fancybox.pack.js"></script>
<link rel="stylesheet" href="https://cdn.staticfile.org/fancybox/2.1.5/jquery.fancybox.css" media="screen" type="text/css">
```

## 全站使用CDN

主题内公共资源加载缓慢的问题解决了，想要更进一步提高访问速度的，可以配置全站使用CDN加速。

不想看详细介绍的可以直接去看[总结](#总结)

### 全站CDN选择

因为我**没有备案域名**，所以这里只介绍海外CDN，当然大佬们还可以考虑[自建CDN](https://www.openos.org/post/154/)。之前自己收集了不少，这里简单介绍一下，测试效果可以使用站长之家的工具：https://ping.chinaz.com/

#### CloudFlare

链接：https://www.cloudflare.com/

测试链接：https://www.cloudflare.com/ 

很有名的啦，我就不介绍啦，服务稳定功能全面，许多人都直接用的这个的，就是免费版只能用美西的几个节点，大陆访问速度一般般吧，不过 CloudFlare 还有一些其它的用法比如说自定义指定 IP 之类的，可以参考一下《[CloudFlare CDN - 自定义IP](https://geekgens.com/archives/4.html)》

![image-20191108182808889](/assets/img/image-20191108182808889.png)

#### 恰啦高防CDN

链接：https://www.qia.la/

测试链接：http://ys.test.cdn.16tx.cn/

大佬推荐的，说是还不错，不过套餐起步 500G 好贵诶，反正我是用不起

2019/12/27 更新：~~恰啦倒闭啦~~（又恢复了，公告如下）

> 在 11 月中旬，由于法律原因，导致平台终止运营，服务器到期无法续费，恰啦 www.qia.la 域名的解析地址在到期的服务器，打开变成了xx电影网，该电影网与恰啦无关，http://23.224.14.12/ 该电影网站服务器 IP 为恰啦原用服务器，打开 IP 可访问对方网站，到期后被他人购买，该服务器后被用于建设影视网，恰啦于 12 月 27 号开始给客户退款，12/28 已经退款完毕！[退款详情](https://www.qia.la/index.php/announcements/13/-.html) 恰啦交流群：948532691 后期再重新运营群里通知

![image-20191108145832256](/assets/img/image-20191108145832256.png)

#### 善恶CDN

链接：https://www.43c55.com/

测试链接：https://www.43c55.com/

也是大佬推荐的，和上面的恰啦 CDN 应该差不多，起步也是 500G，反正我是用不起

![image-20191227155112610](/assets/img/image-20191227155112610.png)

#### UDomain

链接：https://www.udomain.hk/tc/service/network/global-cdn-content-delivery-network-international#payAsYouGotab

测试链接：http://cdn.xcdn.global/ 

香港通域存網有限公司的 CDN，申请比较麻烦，不能直接在网站上进行购买，填写申请表过后，一两个工作日的样子就有客服发邮件联系你，告诉你后台登陆的地址和密码，我之前试用的时候申请的是全球加速，中国大陆访问基本是直连的（如果出现大陆被解析到欧美的情况可以联系客服关闭全球加速只保留港台加速节点），速度超棒，就是后付费结算和付款方式有点麻烦，线上好像只支持 paypal，不过后台该有的功能都有，操作也比较方便

![image-20191108145646259](/assets/img/image-20191108145646259.png)

#### DDoS-Guard

链接：https://ddos-guard.net/en/store/web

测试链接：http://185.178.208.149/

DDoS-Guard 有**免费**的高防 CDN 套餐，不过分配到的节点只有一个，而且大陆过去是走日本 ntt 线路。配置项不是特别多，会自动帮你申请证书，和 [cloudflare](https://www.cloudflare.com/) 比较类似，高级一点的功能都需要付费

![image-20191108152328729](/assets/img/image-20191108152328729.png)

#### CloudCone

链接：https://app.cloudcone.com/cdn 

测试链接：https://portaone.r.worldssl.net/

最低需要充值 20 美元才能使用，免费测试的时候我木有赶上，所以我实在没钱测试啦，不过听说节点还挺多的，可以参考一下这篇文章《[CloudCone CDN 评测及使用](https://vircloud.net/offer/cloudcone-cdn.html)》

#### NodeCache

链接：https://www.nodecache.com/product/cdn

测试链接：http://be951a5a56d96b1f.ncname.com/

之前在 hostloc 上面看到的，节点基本使用的是 CeraNetworks 的服务器，大陆分配到的是香港的节点，基本都是直连，可以按量付费，不过虽然延迟很低但是遇到被加速文件体积比较大的时候会非常慢（比如图片），后台功能很全面

![image-20191108165016216](/assets/img/image-20191108165016216.png)

#### QUIC.cloud

链接：https://www.quic.cloud/

测试链接：http://c1053.tier1.quic.cloud/

基于 LiteSpeed 技术的 CDN，每个月**免费 20G** 流量，使用的节点全部是 AWS，大陆访问速度还可以，国外各地访问速度超快，后台功能比较基础，支持代申请 SSL 证书

![image-20191108170129622](/assets/img/image-20191108170129622.png)

#### CloudLayar

链接： https://cloudlayar.com/ 

测试链接：http://185.61.137.35/

和 DDoS-Guard 差不多，有**免费**的高防 CDN 套餐，分配一个欧洲的节点，而且需要像 [cloudflare](https://www.cloudflare.com/) 一样把 DNS 给改成它提供的，主打高防所以关于 CDN 相关的配置项特别少

![image-20191108171122954](/assets/img/image-20191108171122954.png)

#### Psychz Networks

链接：https://www.psychz.net/cdn.html 

测试链接：http://pokecdn.net/

饭桶的 CDN，之前免费的时候用过，节点使用 Anycast 全是它自家的服务器，大陆访问基本是去日本 ntt，按流量套餐来计费，流量不过期用完为止，价格最低 5 美元 50G 起，还是有点贵哒，后台功能还是比较全面的

![image-20191108173048980](/assets/img/image-20191108173048980.png)

#### Hostry

链接：https://hostry.com/products/cdn/

测试链接：http://i2x4k3b4.hostrycdn.com/ 

每个月**免费 5G** 流量，超出部分可以按量付费 0.0585 USD/GB，说是全球加速，但是大陆访问到的基本都是美西和欧洲的节点，真的很慢。后台功能比较完整，就是操作起来比较麻烦

![image-20191108175237331](/assets/img/image-20191108175237331.png)

#### RapidSTART

链接：https://cdn.tokyo/

测试链接：http://free.rs.cdnw.net/

[RedBox](https://www.redbox.ne.jp/) 旗下的免费 CDN （收费服务暂时还没上线），节点好像就两台 [SAKURA Internet](https://www.sakura.ad.jp/) 东京机房的服务器，国内线路走 IIJ，带宽是共享 100Mbps，速度应该一般（我还没有测试）。不过免费版限制比较多，每个账号只能绑定一个域名，单文件最大3M（大于3M的文件直接会返回404），不支持https回源，不能刷新指定文件缓存和指定缓存时间等。还有一个就是源站地址是直接暴露出来的，不过 Github Pages 的话好像没什么影响。后台功能很少，具体注册使用方法可以参考《[CDN.TOKYO东京免费CDN](https://blog.moelty.cn/112.html)》

![image-20191121010856077](/assets/img/image-20191121010856077.png)

#### Bitmitigate

链接：https://bitmitigate.com/cdn.html 

测试链接：暂无

单纯收录一下，首月免费，据说挺不好用的

#### NETdepot

链接：https://billing.netdepot.com/cart.php?gid=22

测试链接：暂无

单纯收录一下，免费 CDN，我还没有试过哦

#### 免费 CDN

链接：https://mianfeicdn.com/

测试链接：http://cuji.mfcdndns.com/

是的它的名字就叫免费 CDN，只有香港和美西的节点各一个，大陆直连速度还行，但是节点真的太少啦，后台设置项该有的都有不过有些完全改不了，免费已经很不错了，也是单纯收录一下

![image-20191108182054098](/assets/img/image-20191108182054098.png)

------

下面是几家国内的云服务商，注册账号需要实名，但是都有提供面向**海外**的 CDN 所以**无需备案**

#### Aliyun

链接：https://www.aliyun.com/product/cdn

测试链接：http://www.julydate.com.w.kunlunsl.com/

阿里云 CDN，国内版注册需要实名认证（当然你也可以选择注册阿里云国际版不过比较麻烦），不备案的情况下可以添加域名选择海外加速，功能完善稳定性高，大陆访问分配到的都是日本或者香港阿里云的节点，速度不错，就是有时候被分配到的 IP 段可能绕路到美西造成卡顿

![image-20191108193510929](/assets/img/image-20191108193510929.png)

#### 华为云

链接：https://www.huaweicloud.com/product/cdn.html

测试链接：http://www.example.com.c.cdnhwc1.com/

华为云 CDN，不备案的情况下同样可以添加域名选择海外加速，大陆访问分配到的都是日本 CDNetworks 的节点（走 KDDI 线路），部分会分配到 HiNet，线路全部大陆直连所以整体速度优于阿里云，后台基本功能也都有，国内版注册同样需要实名

![image-20191109213535217](/assets/img/image-20191109213535217.png)

#### Qcloud

链接：https://cloud.tencent.com/product/gcd

测试链接：暂无

腾讯云单独的海外加速，暂时还在内测阶段，我没有申请到内测名额，所以只有暂时先关注一下下啦，国内版注册同样需要实名

#### UCloud

链接：https://www.ucloud.cn/site/product/ucdn.html

测试链接：暂无

最近在做活动  https://www.ucloud.cn/site/active/cdn-ufile.html

**2019/11/09 更新**：UCloud 海外可能暂时用不起啦，客服回复如下

![image-20191109170600546](/assets/img/image-20191109170600546.png)

优刻得，国内云服务提供商，注册需要实名认证，但是有单独的海外加速，添加的节点不需要备案，后台选项很少，而且我测试的时候不知道为什么加速一直没有生效，解析记录是直接回源的，所以暂时没有测试链接，还有更重要的是 SSL 证书那里不知道什么原因还不能设置

![image-20191108182941628](/assets/img/image-20191108182941628.png)

### 总结

我只推荐一下下我自己真正用过的，上面收录的没有在这推荐的不一定不好，因为有的没用过确实不了解哈~

想要一直免费又不想折腾的可以直接用 [cloudflare](https://www.cloudflare.com/)

另外比较推荐的国外免费的就是 [QUIC.cloud](https://www.quic.cloud/)，境内访问比 cloudflare 稍快，每个月免费 20G

其次是面向境内访问不是很好的 [Hostry](https://hostry.com/products/cdn/)，但是境外访问还行，每个月免费 5G

收费的里面比较推荐的是[华为云](https://www.huaweicloud.com/product/cdn.html)、[阿里云](https://www.aliyun.com/product/cdn)和 [NodeCache](https://www.nodecache.com/product/cdn) ，另外 [UDomain](https://www.udomain.hk/tc/service/network/global-cdn-content-delivery-network-international#payAsYouGotab) 购买付费确实比较麻烦（但是便宜）

腾讯云和可能需要过段时间再看看吧，另外挺想试试 CloudCone 的

> 可以使用类似阿里云域名解析一类的分区域解析，国外和国内分开解析到不同的 CDN
>
> 我的话现在国内用的 UDomain，国外用的 QUIC.cloud，备用的是华为云、阿里云和 NodeCache

关于各个网站的 CDN 如何配置使用这里就不说啦，大部分添加完把域名解析过去就能用了，1000 个网站可是有 1000 个不同的后台界面呀