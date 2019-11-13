---
title: hexo博客访问优化-COS使用
tags: 笔记
categories: 程序
comments: true
reward: true
abbrlink: 1756138088
date: 2019-11-08 20:32:29
typora-root-url: ..
---

本文为 hexo 博客访问优化下篇，主要介绍了使用腾讯云对象存储来加速博客静态资源的访问的方法，上篇主讲选用合适的国内外 CDN 来加速 hexo 博客全局访问速度，两篇文章均是在**没有备案域名**的前提下进行的 。

<!-- more -->

上篇：[hexo博客访问优化-CDN选用](/post/60859300/)

下篇：[hexo博客访问优化-COS使用](#)

## 前言

本文主要是介绍使用腾讯云对象存储来加速 hexo 网站访问的方法，但本文所提到的插件 [hexo-static-cos](https://github.com/julydate/hexo-static-cos) 适用于所有类似于对象存储的云服务提供商，只要能够存储网站镜像都可以用来加速，包括但不限于自建服务器、CDN、jsDelivr 镜像等，详细情况请看下文介绍。

先复制粘贴个对象存储的介绍吧。

> **对象存储**，也称为基于对象的存储，是一种数据存储，其中每个数据单元存储为称为对象的离散单元。对象可以是离散单元，类似于pdf，音频，图像或视频文件。这些对象实际上可以是任何类型的数据和任何大小的数据。

其实就是弄个类似云盘的东西来当你的图床，顺便存一些其它的静态文件。

然后看看国内各个云服务厂商关于对象存储和 CDN 的免费活动和收费情况（大部分数据来自《[米扑博客调研一览表（2018-09-16）](https://blog.mimvp.com/article/28407.html)》，自己整理收集了一小部分）  

| 服务商名称                                                   | 云存储   |               |                                                | CDN      |                                   |                                   |
| ------------------------------------------------------------ | -------- | ------------- | :--------------------------------------------- | -------- | --------------------------------- | --------------------------------- |
| 免费空间                                                     | 收费价格 | 备注          | 免费流量                                       | 收费价格 | 备注                              |                                   |
| [七牛云](https://www.qiniu.com/prices?source=kodo)           | 10GB     | 0.148元/GB/月 | 标准存储免费10GB/月                            | 10GB/月  | HTTP  0.24元/GB & HTTPS 0.28元/GB | HTTP  免费/HTTPS 收费             |
| [又拍云](https://www.upyun.com/league)                       | 10GB     | 0.129元/GB/月 | 标准存储免费10GB/月，需要挂官方 logo           | 15GB/月  | 0.29元/GB                         | HTTP/HTTS均免费，需要挂官方 logo  |
| [腾讯云](https://cloud.tencent.com/document/product/436/6240) | 50GB     | 0.130元/GB/月 | 标准存储免费50GB/月，开通后免费六个月          | 10GB/月  | 0.21元/GB                         | HTTP/HTTS均免费，开通后免费六个月 |
| [阿里云](https://www.aliyun.com/price/product#/oss/detail)   | 5GB      | 0.120元/GB/月 | 5GB免费仅限香港和海外区                        | 无       | 0.24元/GB                         | 无免费                            |
| [网易云](https://www.163yun.com/help/documents/76809994847309824) | 50GB     | 0.123元/GB/月 | 标准和低频存储均免费，个人用户实名通道暂时关闭 | 无       | 0.23元/GB                         | 无免费                            |
| [青云](https://www.qingcloud.com/pricing-standard)           | 10GB     | 0.147元/GB/月 | 标准和低频存储均免费                           | 无       | 0.23元/GB                         | 无免费                            |
| [Ucloud](https://www.ucloud.cn/site/product/ufile.html)      | 20GB     | 0.156元/GB/月 | 标准和低频存储均免费                           | 无       | 0.34元/GB                         | 无免费                            |
| [百度智能云](https://cloud.baidu.com/doc/BOS/Pricing.html)   | 无       | 0.119元/GB/月 | 无免费                                         | 无       | 0.20元/GB                         | 无免费                            |
| [华为云](https://www.huaweicloud.com/pricing.html#/obs)      | 无       | 0.120元/GB/月 | 无免费                                         | 无       | 0.20元/GB                         | 无免费                            |
| [京东云](https://www.jdcloud.com/help/detail/1144/isCatalog/1) | 无       | 0.128元/GB/月 | 无免费                                         | 无       | 0.35元/GB                         | 无免费                            |
| [景安云](https://www.zzidc.com/storage/kystorageindex)       | 无       | 0.150元/GB/月 | 无免费                                         | 10GB/天  | 0.30元/GB                         | HTTP  免费                        |
| [滴滴云](https://www.didiyun.com/production/s3.html#charge)  | 无       | 0.125元/GB/月 | 无免费                                         | 无       | 无                                | 无                                |
| [猫云](https://www.maoyuncloud.com/product/mos)              | 20GB     | 0.100元/GB/月 | 标准存储免费20GB/月，需要挂官方 logo           | 30G      | 0.23元/GB                         | HTTP/HTTS均免费，需要挂官方 logo  |
| [天翼云](https://www.ctyun.cn/product/oos1)                  | 无       | 0.250元/GB/月 | 无免费                                         | 无       | 0.22元/GB                         | 无免费                            |

其中能**不备案**使用**官方提供的域名**进行“对象存储 + CDN”加速的有百度智能云、腾讯云、阿里云和 UCloud，其中阿里云的对象存储的官方加速服务和 CDN 服务是独立的，收费也比较贵，其余大部分服务商即使官方不提供域名进行 CDN 组合加速的，默认提供的对象存储的域名也是能直接使用的（虽然没有 CDN 加速但是因为服务器在国内，大部分区域访问速度也不错）。

然后最近很多家都在做双十一的活动（腾讯云有一元钱的礼包哦），这里只列出上面能使用 CDN 组合加速的几家

百度智能云：https://cloud.baidu.com/campaign/Promotion-20191111/index.html

腾讯云：https://cloud.tencent.com/act/pro/cos

UCloud：https://www.ucloud.cn/site/active/cdn-ufile.html

阿里云：https://www.aliyun.com/1111/2019/products#module-6372043750

## COS 配置

这里只讲腾讯云对象存储和 CDN 的配置方法，其它云服务厂商大致相同。

购买就不说啦，首先创建存储桶，区域主要看你前面所购买的存储包的位置（每个区域收费都不一样，参见[产品定价](https://buy.cloud.tencent.com/price/cos)），由于后面我要使用 CDN 而且要开启鉴权这里就选择私有读写啦，有的厂商 CDN 不能单独设置鉴权，所以这里建议一般还是选择**公有读私有写**哦。

![image-20191112210241327](/assets/img/image-20191112210241327.png)

创建好过后就可以开始设置存储桶了，打开基础设置，找到跨域访问CORS设置，添加上你网站域名；找到回源设置，这里填你网站的域名如`www.example.com`或`example.github.io`（这里有一个问题就是腾讯云没文件经常回源失败直接返回 404，所以后面我们还是要手动上传同步一下）。

![image-20191112213118056](/assets/img/image-20191112213118056.png)

然后到啦最重要的步骤，打开域名管理，编辑默认加速域名保持如下默认选项即可（但是如果你前面和我一样选的私有读写的话，这里需要点一下添加 CDN 服务授权，然后开启回源鉴权）。

![image-20191112215450319](/assets/img/image-20191112215450319.png)

然后**加速域名**`hanabi-1251438221.file.myqcloud.com`就是你后面插件里面需要用到的域名了，默认已经帮你配置好了 https（UCloud 的话默认没有 https，需要自己申请证书添加，申请证书的域名验证方式选文件验证就行）。

接着我们打开 CDN 控制台的域名管理进行进一步配置，等待部署完成过后，点击管理打开域名的详细配置界面，打开访问控制，因为我们加速的全是静态资源，所以建议把过滤参数打开，防盗链也建议设置一下白名单为自己网站的域名，IP访问限频的话看情况开启，主要是防御CC。

![image-20191112223443939](/assets/img/image-20191112223443939.png)

打开缓存设置，因为我们主要缓存图片等静态资源，所以可以把时间设置长一点，减少回源流量的开销，我这里设置了一个月，分资源设置的话请看文档（比如你想单独设置 css 和 js 文件只缓存一天）。

![image-20191112223738245](/assets/img/image-20191112223738245.png)

> 到这里设置就基本结束啦，如果你前面设置的是**公有读私有写**的话，可以直接去看下一部分 [COS 使用](#COS-使用)

如果你和我一样设置的是私有读写的话，请继续看。这里说一下下我为什么要开鉴权，因为 COS 直接回源的话相当于你源站的一个镜像站了，直接打开能进行访问的，我担心会分走我博客的权重被搜索引擎错误收录，所以开启了鉴权（只允许直接访问图片和 css 等静态文件，禁止访问 html），腾讯云这里 CDN 鉴权是单独设置的，有的厂商（比如百度智能云和 UCloud）的鉴权只能在对象存储的控制台设置，就在那边进行相关的设置吧，一般是在对象存储控制台的“Policy权限设置”里面，添加指定策略即可。

好的我们打开 CDN 控制台的安全配置，里面有一个鉴权配置，点击打开，模式随便选一个，秘钥和有效时间随便填一个，鉴权对象选择指定文件类型不鉴权，建议添加以下静态资源项目，或者你也可以选择指定文件类型鉴权，然后只填写`.html;.htm`

```xml
.jpg;.png;.jpeg;.gif;.webp;.bmp;.ico;.svg;.icon;.tga;.imb;.js;.css;.json;.txt;.md;.csv;.xml;.log;.conf;.vue;.ttf;.otf;.woff;.woff2;.eot;.sfnt;.mp3;.mp4;.avi;.mpeg;.rm;.ra;.ogg;.wav;.wmv;.rmi;.aac;.rmvb;.mkv;.flv;.swf;.mov;.movie;.map
```

添加完后效果如下

![image-20191112230511267](/assets/img/image-20191112230511267.png)

## COS 使用

首先文件管理推荐使用官方的[客户端](https://cloud.tencent.com/document/product/436/11366)，操作方便，登陆方式等详情见官方文档。你还可以像下面这样设置同步文件夹，不过如果你设置了回源域名的话一般没有的资源都会自动镜像源站，回源失败的时候才需要手动上传或同步。

![image-20191112231241886](/assets/img/image-20191112231241886.png)

然后我们打开本地 hexo 的目录安装插件 [hexo-static-cos](https://github.com/julydate/hexo-static-cos)

```bash
npm install hexo-static-cos --save
```

打开主题配置文件`_config.yml`添加以下内容

```yaml
# qcloudcos
qcloudcos:
  enable: true # 是否开启对象储存
  domain: usersubject.file.myqcloud.com # 对象储存或 CDN 域名，无需填写 http/https
  onlypost: false # 是否只替换文章内资源
  priority: 10 # 插件执行优先级，数值越小越先执行，默认为 10
  img: true # 是否替换 html img 标签，下列项目同理
  link: true
  script: true
  audio: false
  video: false
  source: false
  track: false
  area: false
```

其中 domain 改为前文提到的加速域名`hanabi-1251438221.file.myqcloud.com`，如果你只想加速文章内的图片就把`onlypost`设置为`true`，下面的`img`也设置为`true`，如果你还需要加速博客内的 css 和 js，则需要把`onlypost`设置为`false`，下面的`img link script`也设置为`true`，其他的以此类推，根据需要开启，然后你博客内的对应静态资源链接就会在`hexo g`时自动生成为腾讯云对象存储的地址了

## 注意事项

使用本文方法和插件有一个前提，你文章内的图片资源地址必须是相对于博客根目录的链接，比如你在博客 markdown 文件内引用图片的格式为

```markdown
![example](/assets/img/example.jpg)
```

或者如果你启用了 hexo 的 post_asset_folder 功能的话你的图片引用格式应该为

```swig
{% raw %}{% asset_img example.jpg This is an example image %}{% endraw %}
```

如果为以下几种格式时必须安装 [hexo-asset-image](https://github.com/xcodebuild/hexo-asset-image) 插件且将本插件的 priority 设置为 11

```markdown
![example](example.jpg)
![example](postName/example.jpg)
![example](/postName/example.jpg)
```

另外如果你要替换 css 和 js 等静态资源那你博客主题内引用静态资源的链接也必须是相对于博客根目录的（一般主题都是这样）

到这里节结束啦，博客的配置比较简单，而关于对象存储和 CDN 的更多详细设置请多多阅读对应的官方文档，如腾讯云的《[对象存储-控制台指南](https://cloud.tencent.com/document/product/436/11365)》和《[内容分发网络-用户指南](https://cloud.tencent.com/document/product/228/6288)》