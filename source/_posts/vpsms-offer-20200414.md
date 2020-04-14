---
title: VpsMS VPS 测试报告
tags:
  - 笔记
  - VPS
  - 测评
categories: 程序
comments: true
reward: true
typora-root-url: ..
abbrlink: 1545821726
date: 2020-04-14 13:32:33
---

近日 VpsMS 团队发来最新 OFFER，洛杉矶安畅 GIA-CN2 机房上架新节点，最低配置为 1 核，512M 内存，15GB SSD + SAS，1TB 流量提升为 100Mbps 带宽，分配的是美国原生 ip，最高配置改为了 300Mbps。使用优惠码后，月付 67 元，季付平均每月 59 元，**半年付平均每月仅 54 元**。

<!-- more -->

> 本次测试机型为 经济实用型 A

## 商家简介

[VpsMS](https://www.vpsms.com/)，新商家，该平台是由国人和港人合资经营，用户反馈工单回复及时，服务做得不错。

官方承诺绝不超售，支持支付宝付款。

安畅线路方面，三网回程基本都走会经过 59.43.\*.\*

目前安畅产品比较成熟，路况应该是不错的，整体性价比较高，需要的用户可以考虑。

## 优惠信息

月付85折优惠码（循环优惠）：Month

季付75折优惠码（循环优惠）：Quarter

半年付7折优惠码（循环优惠）：Halfyear

## 机器配置

| 经济实用型 A                                     | 经济实用型 B                                     | 中可用                                           | 高可用                                           |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| 1v CPU                                           | 1v CPU                                           | 2v CPU                                           | 4v CPU                                           |
| 512M RAM                                         | 1GB RAM                                          | 2GB RAM                                          | 4GB RAM                                          |
| 15G SSD+SAS                                      | 20G SSD+SAS                                      | 50G SSD+SAS                                      | 80G SSD+SAS                                      |
| 100Mbps速率                                      | 150Mbps速率                                      | 200Mbps速率                                      | 300Mbps速率                                      |
| 1TB流量                                          | 1.5TB流量                                        | 3TB流量                                          | 6TB流量                                          |
| 1×IPv4地址                                       | 1×IPv4地址                                       | 1×IPv4地址                                       | 1×IPv4地址                                       |
| 使用优惠码后                                     | 使用优惠码后                                     | 使用优惠码后                                     | 使用优惠码后                                     |
| **月付 67** 元/月                                | **月付 92** 元/月                                | **月付 185**元/月                                | **月付 373** 元/月                               |
| **季付 58** 元/月                                | **季付 80** 元/月                                | **季付 163** 元/月                               | **季付 329** 元/月                               |
| **半年付仅** **54** 元/月                        | **半年付仅** **74** 元/月                        | **半年付仅** **151** 元/月                       | **半年付仅** **306** 元/月                       |
| [购买链接](https://www.vpsms.com/cart.php?gid=7) | [购买链接](https://www.vpsms.com/cart.php?gid=7) | [购买链接](https://www.vpsms.com/cart.php?gid=7) | [购买链接](https://www.vpsms.com/cart.php?gid=7) |

## 测试 IP

38.64.78.129

> 开通后一天内有 IP 相关问题可直接发送工单说明更换
>
> IP 被中国大陆封禁需提交工单更换，50 CNY 一次，且 30 天内只能更换两次 IP 地址

## 系统信息

```shell
CPU 型号             : Common KVM processor
CPU 核心数           : 1
CPU 频率             : 2599.998 MHz
总硬盘大小           : 10.1 GB (2.2 GB Used)
总内存大小           : 989 MB (144 MB Used)
SWAP大小             : 923 MB (0 MB Used)
开机时长             : 0 days, 1 hour 56 min
系统负载             : 1.45, 0.55, 0.43
系统                 : CentOS 7.7.1908
架构                 : x86_64 (64 Bit)
内核                 : 4.11.8-1.el7.elrepo.x86_64
虚拟化平台           : kvm
```

## IP 信息

```shell
IPV4 - IP Address:	[US] 38.64.78.*
IPV4 - ASN Info:	AS58879 (Shanghai Anchang Network Security Technology Co.,Ltd.)
IPV4 - Region:		United States California Los Angeles
IPInfo:
 ip: "38.64.78.129"
 hostname: "ip-38-64-78-129-muca.aerosurf.net"
 city: "Los Angeles"
 region: "California"
 country: "US"
 loc: "34.0614,-118.2385"
 postal: "90012"
 timezone: "America/Los_Angeles"
 asn: 
  asn: "AS58879"
  name: "Shanghai Anchang Network Security Technology Co.,Ltd."
  domain: "anchnet.com"
  route: "38.64.78.0/24"
  type: "hosting"
 hosting: 
  host: "cogent"
  id: "COGENT-A"
  name: "PSINet, Inc."
  network: "38.0.0.0/8"
 company: 
  name: "Shanghai Anchang Network Security Technology Co.,Ltd."
  domain: "anchnet.com"
  type: "hosting"
 privacy: 
  vpn: false
  proxy: false
  tor: false
  hosting: true
 abuse: 
  address: "US, DC, Washington, 2450 N street, NW, 20037"
  country: "US"
  email: "abuse@cogentco.com"
  name: "Cogent Abuse"
  network: "38.0.0.0/8"
  phone: "+1-877-875-4311"
```

## 磁盘性能

```shell
I/O Speed( 1.0GB )   : 158 MB/s
I/O Speed( 1.0GB )   : 184 MB/s
I/O Speed( 1.0GB )   : 173 MB/s
Average I/O Speed    : 171.7 MB/s
Test Name		    Write Speed				        Read Speed
10MB-4K Block		7.3 MB/s (1778 IOPS, 1.44 s)	9.7 MB/秒 (2359 IOPS, 1.09 s)
10MB-1M Block		118 MB/s (112 IOPS, 0.09 s)		531 MB/秒 (506 IOPS, 0.02 s)
100MB-4K Block		5.8 MB/s (1425 IOPS, 17.96 s)	9.6 MB/秒 (2349 IOPS, 10.90 s)
100MB-1M Block		315 MB/s (300 IOPS, 0.33 s)		627 MB/秒 (598 IOPS, 0.17 s)
1GB-4K Block		6.5 MB/s (1598 IOPS, 160.11 s)	9.4 MB/秒 (2289 IOPS, 111.82 s)
1GB-1M Block		178 MB/s (169 IOPS, 5.91 s)		375 MB/秒 (357 IOPS, 2.79 s)
```

## UnixBench

使用秋水逸冰脚本 [UNIX Bench](https://github.com/teddysun/across/#unixbenchsh)

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: centos7.kvm: GNU/Linux
   OS: GNU/Linux -- 4.11.8-1.el7.elrepo.x86_64 -- #1 SMP Thu Jun 29 10:01:10 EDT 2017
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Common KVM processor (5200.0 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   02:00:27 up 11 min,  2 users,  load average: 0.94, 0.34, 0.13; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Tus April 14 2020 02:00:27 - 02:28:35
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables        9690190.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     1553.1 MWIPS (9.6 s, 7 samples)
Execl Throughput                               1341.8 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        238162.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           69888.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        603671.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                              480498.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  73097.9 lps   (10.0 s, 7 samples)
Process Creation                               3371.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   1652.3 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    223.9 lpm   (60.2 s, 2 samples)
System Call Overhead                         586612.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0    9690190.5    830.4
Double-Precision Whetstone                       55.0       1553.1    282.4
Execl Throughput                                 43.0       1341.8    312.0
File Copy 1024 bufsize 2000 maxblocks          3960.0     238162.4    601.4
File Copy 256 bufsize 500 maxblocks            1655.0      69888.1    422.3
File Copy 4096 bufsize 8000 maxblocks          5800.0     603671.1   1040.8
Pipe Throughput                               12440.0     480498.4    386.3
Pipe-based Context Switching                   4000.0      73097.9    182.7
Process Creation                                126.0       3371.9    267.6
Shell Scripts (1 concurrent)                     42.4       1652.3    389.7
Shell Scripts (8 concurrent)                      6.0        223.9    373.2
System Call Overhead                          15000.0     586612.7    391.1
                                                                   ========
System Benchmarks Index Score                                         407.2

======= Script description and score comparison completed! ======= 
```

## 网络测试

### 带宽测试

以下测速在开启了 bbr 加速后进行

SpeedTest: https://www.speedtest.net/result/c/aa8962a4-72a4-472b-9496-26673a0eb36e

![img](/assets/img/aa8962a4-72a4-472b-9496-26673a0eb36e.png)

### 国外网络测试

```shell
节点名称                   IP地址            下载速度           延迟      
CacheFly                  205.234.175.175   12.2MB/s          34.202 ms   
Linode, Tokyo2, JP        139.162.65.37     11.2MB/s          146.288 ms
Linode, Singapore, SG     139.162.23.4      1.84MB/s          177.340 ms  
Linode, London, UK        176.58.107.39     3.81MB/s          141.002 ms  
Linode, Frankfurt, DE     139.162.130.8     10.0MB/s          154.208 ms  
Linode, Fremont, CA       50.116.14.9       12.2MB/s          10.167 ms   
Softlayer, Dallas, TX     173.192.68.18     12.1MB/s          29.878 ms   
Softlayer, Seattle, WA    67.228.112.250    9.09MB/s          25.067 ms   
Softlayer, Frankfurt, DE  159.122.69.4      9.33MB/s          149.180 ms  
Softlayer, Singapore, SG  119.81.28.170     5.87MB/s          209.625 ms  
Softlayer, HongKong, CN   119.81.130.170    3.65MB/s          209.628 ms
```

### 国内网络测试

```shell
国内网络测试
节点名称                  上传速度          下载速度            延迟      
上海电信                  65.47 Mbit/s      22.00 Mbit/s        160.298 ms 
西安电信                  46.05 Mbit/s      71.66 Mbit/s        283.729 ms 
北京联通                  9.98 Mbit/s       58.43 Mbit/s        287.852 ms 

国内网络延迟测试
合肥: 133.01 ms  
北京: 149.88 ms  
武汉: 160.51 ms
```

### Speedtest.net 网络测试

```shell
Node Name        Upload Speed      Download Speed      Latency     
Speedtest.net    96.60 Mbit/s      103.99 Mbit/s       3.055 ms   
Fast.com         0.00 Mbit/s       104.2 Mbit/s        -           
Beijing 5G   CT  38.14 Mbit/s      56.43 Mbit/s        -          
Nanjing 5G   CT  44.02 Mbit/s      79.98 Mbit/s        -          
Hefei 5G     CT  45.63 Mbit/s      74.40 Mbit/s        -          
Guangzhou 5G CT  2.99 Mbit/s       16.05 Mbit/s        -          
TianJin 5G   CU  50.08 Mbit/s      74.76 Mbit/s        -          
Shanghai 5G  CU  36.02 Mbit/s      85.07 Mbit/s        -          
Guangzhou 5G CU  42.45 Mbit/s      71.92 Mbit/s        -          
Tianjin 5G   CM  16.07 Mbit/s      41.56 Mbit/s        -          
Wuxi 5G      CM  16.98 Mbit/s      20.73 Mbit/s        -          
Nanjing 5G   CM  1.26 Mbit/s       39.26 Mbit/s        -          
Hefei 5G     CM  10.68 Mbit/s      25.68 Mbit/s        -          
Changsha 5G  CM  20.16 Mbit/s      67.17 Mbit/s        -     
```

### Ping 丢包测试

使用 Ping.pe 测试：https://ping.pe/

![image-20200414165313283](/assets/img/image-20200414165313283.png)

## 国内路由追踪

### 去程路由

#### 江苏宿迁电信

| 跳数 |                              IP                              |           主机名            |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [222.187.226.193](https://whois.ipip.net/cidr/222.187.226.193/32) |       222.187.226.193       |            中国江苏宿迁 chinatelecom.com.cn 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |    104.9 / 4 / 9.4    |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |         10.254.61.1         |                            局域网                            |                                                              |   13.1 / 3.2 / 3.5    |
|  3   |  [10.254.51.1](https://whois.ipip.net/cidr/10.254.51.1/32)   |         10.254.51.1         |                            局域网                            |                                                              |    1.3 / 1.2 / 1.6    |
|  4   | [61.147.244.225](https://whois.ipip.net/cidr/61.147.244.225/32) |       61.147.244.225        |            中国江苏宿迁 chinatelecom.com.cn 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |    2.8 / 0.7 / 4.8    |
|  5   | [222.187.241.241](https://whois.ipip.net/cidr/222.187.241.241/32) |       222.187.241.241       |            中国江苏宿迁 chinatelecom.com.cn 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |    2.5 / 1.5 / 1.4    |
|  6   | [222.187.252.121](https://whois.ipip.net/cidr/222.187.252.121/32) |       222.187.252.121       |            中国江苏宿迁 chinatelecom.com.cn 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |   12.5 / 18.1 / 16    |
|  7   | [202.97.92.29](https://whois.ipip.net/cidr/202.97.92.29/32)  |        202.97.92.29         |              中国上海 chinatelecom.com.cn 电信               |           [AS4134](https://whois.ipip.net/AS4134)            |   19 / 16.7 / 18.3    |
|  8   | [59.43.80.105](https://whois.ipip.net/cidr/59.43.80.105/32) * [59.43.80.105](https://whois.ipip.net/cidr/59.43.80.105/32) | 59.43.80.105 * 59.43.80.105 | 中国上海 chinatelecom.com.cn 电信 * 中国上海 chinatelecom.com.cn 电信 |                              *                               |       15 * 15.2       |
|  9   | * * [59.43.130.194](https://whois.ipip.net/cidr/59.43.130.194/32) |      * * 59.43.130.194      |            * * 中国上海 chinatelecom.com.cn 电信             |                             * *                              |       * * 15.4        |
|  10  | [59.43.247.62](https://whois.ipip.net/cidr/59.43.247.62/32)  |        59.43.247.62         |              中国上海 chinatelecom.com.cn 电信               |                                                              |  27.4 / 27.3 / 27.3   |
|  11  | [59.43.189.38](https://whois.ipip.net/cidr/59.43.189.38/32)  |        59.43.189.38         |       美国加利福尼亚州洛杉矶 chinatelecom.com.cn 电信        |                                                              |  154 / 153.6 / 162.9  |
|  12  | [118.184.22.62](https://whois.ipip.net/cidr/118.184.22.62/32) |        118.184.22.62        |               美国加利福尼亚州洛杉矶 51idc.com               |                                                              | 144.3 / 142.1 / 142.1 |
|  13  | [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32)  |        38.64.78.129         |             美国加利福尼亚州洛杉矶 cogentco.com              | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) | 142.6 / 138.8 / 139.4 |

#### 广东茂名电信

| 跳数 |                              IP                              |                      主机名                      |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :----------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [113.107.150.129](https://whois.ipip.net/cidr/113.107.150.129/32) |                 113.107.150.129                  |            中国广东茂名 chinatelecom.com.cn 电信             | [AS58543](https://whois.ipip.net/AS58543) / [AS4134](https://whois.ipip.net/AS4134) |   5.2 / 21.9 / 4.7    |
|  2   |                              *                               |                        *                         |                              *                               |                              *                               |           *           |
|  3   | [183.61.211.133](https://whois.ipip.net/cidr/183.61.211.133/32) |                  183.61.211.133                  |            中国广东茂名 chinatelecom.com.cn 电信             | [AS58543](https://whois.ipip.net/AS58543) / [AS4134](https://whois.ipip.net/AS4134) |    4.5 / 4.4 / 4.6    |
|  4   | [113.96.187.233](https://whois.ipip.net/cidr/113.96.187.233/32) |                  113.96.187.233                  |            中国广东茂名 chinatelecom.com.cn 电信             | [AS58543](https://whois.ipip.net/AS58543) / [AS4134](https://whois.ipip.net/AS4134) |   3.3 / 11.4 / 11.1   |
|  5   | [59.36.105.137](https://whois.ipip.net/cidr/59.36.105.137/32) |                  59.36.105.137                   |            中国广东佛山 chinatelecom.com.cn 电信             | [AS58543](https://whois.ipip.net/AS58543) / [AS4134](https://whois.ipip.net/AS4134) |  21.9 / 21.4 / 21.9   |
|  6   | [59.36.111.125](https://whois.ipip.net/cidr/59.36.111.125/32) | 125.111.36.59.broad.dg.gd.dynamic.163data.com.cn |            中国广东广州 chinatelecom.com.cn 电信             | [AS58543](https://whois.ipip.net/AS58543) / [AS4134](https://whois.ipip.net/AS4134) |  24.6 / 11.8 / 14.9   |
|  7   | [202.97.65.149](https://whois.ipip.net/cidr/202.97.65.149/32) |                  202.97.65.149                   |            中国江苏无锡 chinatelecom.com.cn 电信             |                                                              |  43.1 / 40.7 / 46.3   |
|  8   |                              *                               |                        *                         |                              *                               |                              *                               |           *           |
|  9   |                              *                               |                        *                         |                              *                               |                              *                               |           *           |
|  10  | [59.43.130.198](https://whois.ipip.net/cidr/59.43.130.198/32) [59.43.130.198](https://whois.ipip.net/cidr/59.43.130.198/32) * |          59.43.130.198 59.43.130.198 *           | 中国上海 chinatelecom.com.cn 电信 中国上海 chinatelecom.com.cn 电信 * |                              *                               |      39.8 39.9 *      |
|  11  | [59.43.187.82](https://whois.ipip.net/cidr/59.43.187.82/32)  |                   59.43.187.82                   |              中国上海 chinatelecom.com.cn 电信               |                                                              |  52.2 / 52.2 / 52.2   |
|  12  | [59.43.189.38](https://whois.ipip.net/cidr/59.43.189.38/32) [59.43.189.38](https://whois.ipip.net/cidr/59.43.189.38/32) * |           59.43.189.38 59.43.189.38 *            | 美国加利福尼亚州洛杉矶 chinatelecom.com.cn 电信 美国加利福尼亚州洛杉矶 chinatelecom.com.cn 电信 * |                              *                               |     180.6 180.3 *     |
|  13  | [118.184.22.62](https://whois.ipip.net/cidr/118.184.22.62/32) [118.184.22.62](https://whois.ipip.net/cidr/118.184.22.62/32) * |          118.184.22.62 118.184.22.62 *           | 美国加利福尼亚州洛杉矶 51idc.com 美国加利福尼亚州洛杉矶 51idc.com * |                              *                               |      170 174.7 *      |
|  14  | [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32)  |                   38.64.78.129                   |             美国加利福尼亚州洛杉矶 cogentco.com              | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) | 171.6 / 171.7 / 171.6 |

#### 江苏宿迁联通

| 跳数 |                              IP                              |             主机名              |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-----------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [222.187.226.193](https://whois.ipip.net/cidr/222.187.226.193/32) |         222.187.226.193         |            中国江苏宿迁 chinatelecom.com.cn 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |   9.6 / 2.8 / 105.4   |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |           10.254.61.1           |                            局域网                            |                                                              |   11.7 / 4.4 / 3.6    |
|  3   |  [10.254.51.1](https://whois.ipip.net/cidr/10.254.51.1/32)   |           10.254.51.1           |                            局域网                            |                                                              |      1.1 / 1 / 1      |
|  4   |  [10.254.11.2](https://whois.ipip.net/cidr/10.254.11.2/32)   |           10.254.11.2           |                            局域网                            |                                                              |    2.6 / 4.8 / 1.6    |
|  5   | [153.36.202.5](https://whois.ipip.net/cidr/153.36.202.5/32)  |          153.36.202.5           |              中国江苏宿迁 chinaunicom.com 联通               |           [AS4837](https://whois.ipip.net/AS4837)            |    2.6 / 1.7 / 1.6    |
|  6   | [221.6.174.85](https://whois.ipip.net/cidr/221.6.174.85/32)  |          221.6.174.85           |              中国江苏宿迁 chinaunicom.com 联通               |           [AS4837](https://whois.ipip.net/AS4837)            |    10 / 8.3 / 8.2     |
|  7   | [219.158.104.97](https://whois.ipip.net/cidr/219.158.104.97/32) [219.158.104.97](https://whois.ipip.net/cidr/219.158.104.97/32) * | 219.158.104.97 219.158.104.97 * | 中国上海 chinaunicom.com 联通 中国上海 chinaunicom.com 联通 * | [AS4837](https://whois.ipip.net/AS4837) [AS4837](https://whois.ipip.net/AS4837) * |      10.8 11.1 *      |
|  8   | [219.158.9.98](https://whois.ipip.net/cidr/219.158.9.98/32)  |          219.158.9.98           |                中国上海 chinaunicom.com 联通                 |           [AS4837](https://whois.ipip.net/AS4837)            |   15.5 / 17.2 / 15    |
|  9   | [219.158.40.174](https://whois.ipip.net/cidr/219.158.40.174/32) |         219.158.40.174          |                中国上海 chinaunicom.com 联通                 |           [AS4837](https://whois.ipip.net/AS4837)            |  18.2 / 18.1 / 15.8   |
|  10  | * [59.43.138.46](https://whois.ipip.net/cidr/59.43.138.46/32) [59.43.138.46](https://whois.ipip.net/cidr/59.43.138.46/32) |   * 59.43.138.46 59.43.138.46   | * 中国上海 chinatelecom.com.cn 电信 中国上海 chinatelecom.com.cn 电信 |                              *                               |       * 11 12.1       |
|  11  | [59.43.187.66](https://whois.ipip.net/cidr/59.43.187.66/32)  |          59.43.187.66           |              中国上海 chinatelecom.com.cn 电信               |                                                              |  17.6 / 17.8 / 19.7   |
|  12  | [59.43.189.38](https://whois.ipip.net/cidr/59.43.189.38/32)  |          59.43.189.38           |       美国加利福尼亚州洛杉矶 chinatelecom.com.cn 电信        |                                                              | 163.6 / 160.7 / 160.2 |
|  13  | [118.184.22.62](https://whois.ipip.net/cidr/118.184.22.62/32) |          118.184.22.62          |               美国加利福尼亚州洛杉矶 51idc.com               |                                                              | 150.2 / 138.8 / 142.8 |
|  14  | [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32)  |          38.64.78.129           |             美国加利福尼亚州洛杉矶 cogentco.com              | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) |  136 / 135.8 / 145.9  |

#### 广东茂名联通

| 跳数 |                              IP                              |              主机名               |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [122.13.195.129](https://whois.ipip.net/cidr/122.13.195.129/32) |          122.13.195.129           |              中国广东茂名 chinaunicom.com 联通               |          [AS17816](https://whois.ipip.net/AS17816)           |      6 / 7 / 5.4      |
|  2   |                              *                               |                 *                 |                              *                               |                              *                               |           *           |
|  3   |  [172.16.69.1](https://whois.ipip.net/cidr/172.16.69.1/32)   |               bogon               |                            局域网                            |                                                              |    6.2 / 5.7 / 5.7    |
|  4   | [120.80.253.101](https://whois.ipip.net/cidr/120.80.253.101/32) |          120.80.253.101           |              中国广东茂名 chinaunicom.com 联通               |          [AS17816](https://whois.ipip.net/AS17816)           |    2.6 / 5.1 / 3.5    |
|  5   | [120.80.253.17](https://whois.ipip.net/cidr/120.80.253.17/32) * [120.80.253.17](https://whois.ipip.net/cidr/120.80.253.17/32) |   120.80.253.17 * 120.80.253.17   | 中国广东茂名 chinaunicom.com 联通 * 中国广东茂名 chinaunicom.com 联通 | [AS17816](https://whois.ipip.net/AS17816) * [AS17816](https://whois.ipip.net/AS17816) |      23.5 * 2.9       |
|  6   |  [120.83.0.33](https://whois.ipip.net/cidr/120.83.0.33/32)   |            120.83.0.33            |              中国广东茂名 chinaunicom.com 联通               |          [AS17816](https://whois.ipip.net/AS17816)           |   10.4 / 12.2 / 9.7   |
|  7   | [219.158.10.250](https://whois.ipip.net/cidr/219.158.10.250/32) |          219.158.10.250           |              中国广东广州 chinaunicom.com 联通               |           [AS4837](https://whois.ipip.net/AS4837)            |   15 / 12.7 / 14.3    |
|  8   | [219.158.40.170](https://whois.ipip.net/cidr/219.158.40.170/32) |          219.158.40.170           |              中国广东广州 chinaunicom.com 联通               |           [AS4837](https://whois.ipip.net/AS4837)            |  12.1 / 13.7 / 12.1   |
|  9   | [59.43.18.242](https://whois.ipip.net/cidr/59.43.18.242/32)  |           59.43.18.242            |            中国广东广州 chinatelecom.com.cn 电信             |                                                              |  14.1 / 11.7 / 10.8   |
|  10  | [59.43.130.114](https://whois.ipip.net/cidr/59.43.130.114/32) * [59.43.130.114](https://whois.ipip.net/cidr/59.43.130.114/32) |   59.43.130.114 * 59.43.130.114   | 中国广东广州 chinatelecom.com.cn 电信 * 中国广东广州 chinatelecom.com.cn 电信 |                              *                               |      12.6 * 12.8      |
|  11  | [59.43.187.150](https://whois.ipip.net/cidr/59.43.187.150/32) [59.43.187.150](https://whois.ipip.net/cidr/59.43.187.150/32) * |   59.43.187.150 59.43.187.150 *   | 中国广东广州 chinatelecom.com.cn 电信 中国广东广州 chinatelecom.com.cn 电信 * |                              *                               |      21.3 21.3 *      |
|  12  | * * [59.43.182.105](https://whois.ipip.net/cidr/59.43.182.105/32) |         * * 59.43.182.105         |     * * 美国加利福尼亚州洛杉矶 chinatelecom.com.cn 电信      |                             * *                              |       * * 182.2       |
|  13  | * [118.184.22.62](https://whois.ipip.net/cidr/118.184.22.62/32) * |         * 118.184.22.62 *         |             * 美国加利福尼亚州洛杉矶 51idc.com *             |                             *  *                             |       * 166.1 *       |
|  14  | [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32)  | ip-38-64-78-129-muca.aerosurf.net |             美国加利福尼亚州洛杉矶 cogentco.com              | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) | 164.7 / 164.8 / 164.7 |

#### 江苏宿迁移动

| 跳数 |                              IP                              |                 主机名                  |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   |                              *                               |                    *                    |                              *                               |                              *                               |           *           |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |               10.254.61.1               |                            局域网                            |                                                              |    7.3 / 4.3 / 4.8    |
|  3   |  [10.254.52.1](https://whois.ipip.net/cidr/10.254.52.1/32)   |               10.254.52.1               |                            局域网                            |                                                              |    1.1 / 1.1 / 1.1    |
|  4   |  [10.254.44.2](https://whois.ipip.net/cidr/10.254.44.2/32)   |               10.254.44.2               |                            局域网                            |                                                              |    1.9 / 1.6 / 1.5    |
|  5   | * * [223.68.14.181](https://whois.ipip.net/cidr/223.68.14.181/32) |            * * 223.68.14.181            |            * * 中国江苏宿迁 chinamobile.com 移动             | * * [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |        * * 59         |
|  6   | [223.68.13.153](https://whois.ipip.net/cidr/223.68.13.153/32) |              223.68.13.153              |              中国江苏宿迁 chinamobile.com 移动               | [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |    1.7 / 1.8 / 1.8    |
|  7   | [183.207.29.81](https://whois.ipip.net/cidr/183.207.29.81/32) | 81.29.207.183.static.js.chinamobile.com |              中国江苏宿迁 chinamobile.com 移动               | [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |  12.4 / 12.4 / 12.3   |
|  8   | [221.183.18.1](https://whois.ipip.net/cidr/221.183.18.1/32)  |              221.183.18.1               |              中国江苏南京 chinamobile.com 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |   31.1 / 6.5 / 6.5    |
|  9   | [221.176.19.222](https://whois.ipip.net/cidr/221.176.19.222/32) |             221.176.19.222              |                中国上海 chinamobile.com 移动                 |           [AS9808](https://whois.ipip.net/AS9808)            |  33.9 / 34.1 / 75.5   |
|  10  | [221.183.25.190](https://whois.ipip.net/cidr/221.183.25.190/32) |             221.183.25.190              |                中国上海 chinamobile.com 移动                 |           [AS9808](https://whois.ipip.net/AS9808)            |  36.5 / 39.2 / 36.6   |
|  11  | [221.183.55.29](https://whois.ipip.net/cidr/221.183.55.29/32) |              221.183.55.29              |                中国上海 chinamobile.com 移动                 |           [AS9808](https://whois.ipip.net/AS9808)            |  31.5 / 31.3 / 31.5   |
|  12  | [223.120.13.45](https://whois.ipip.net/cidr/223.120.13.45/32) |              223.120.13.45              |         美国加利福尼亚州洛杉矶 chinamobile.com 移动          | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 221.8 / 224.3 / 227.5 |
|  13  | [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32)  |              223.120.6.18               |         美国加利福尼亚州洛杉矶 chinamobile.com 移动          | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 210.6 / 210.5 / 210.4 |
|  14  | * [223.119.64.230](https://whois.ipip.net/cidr/223.119.64.230/32) [223.119.64.230](https://whois.ipip.net/cidr/223.119.64.230/32) |     * 223.119.64.230 223.119.64.230     | * 美国加利福尼亚州洛杉矶 chinamobile.com 移动 美国加利福尼亚州洛杉矶 chinamobile.com 移动 | * [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |     * 217.1 218.5     |
|  15  | [192.254.81.48](https://whois.ipip.net/cidr/192.254.81.48/32) |              192.254.81.48              |             美国加利福尼亚州洛杉矶 zenlayer.com              |          [AS21859](https://whois.ipip.net/AS21859)           |  292.3 / 297.2 / 292  |
|  16  | [45.192.191.70](https://whois.ipip.net/cidr/45.192.191.70/32) |              45.192.191.70              |                 中国香港 cloudinnovation.org                 |                                                              | 234.3 / 209.8 / 214.9 |
|  17  | [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32)  |              38.64.78.129               |             美国加利福尼亚州洛杉矶 cogentco.com              | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) |  180.6 / 180.5 / 183  |

#### 广东广州移动

| 跳数 |                              IP                              |                    主机名                    |                       地区（仅供参考）                       |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   |                              *                               |                      *                       |                              *                               |                              *                               |           *           |
|  2   |                              *                               |                      *                       |                              *                               |                              *                               |           *           |
|  3   |                              *                               |                      *                       |                              *                               |                              *                               |           *           |
|  4   |   [10.0.1.245](https://whois.ipip.net/cidr/10.0.1.245/32)    |                  10.0.1.245                  |                            局域网                            |                                                              |    0.7 / 0.4 / 0.5    |
|  5   | [221.183.63.125](https://whois.ipip.net/cidr/221.183.63.125/32) |                221.183.63.125                |              中国广东广州 chinamobile.com 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |    0.6 / 0.4 / 0.4    |
|  6   | [221.176.18.237](https://whois.ipip.net/cidr/221.176.18.237/32) [221.176.18.237](https://whois.ipip.net/cidr/221.176.18.237/32) [221.183.25.73](https://whois.ipip.net/cidr/221.183.25.73/32) | 221.176.18.237 221.176.18.237 221.183.25.73  | 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      1.7 1.4 0.6      |
|  7   | [221.176.22.158](https://whois.ipip.net/cidr/221.176.22.158/32) [221.183.68.145](https://whois.ipip.net/cidr/221.183.68.145/32) [221.176.22.158](https://whois.ipip.net/cidr/221.176.22.158/32) | 221.176.22.158 221.183.68.145 221.176.22.158 | 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      2.2 2.6 2.6      |
|  8   | [221.176.20.6](https://whois.ipip.net/cidr/221.176.20.6/32) [221.176.20.2](https://whois.ipip.net/cidr/221.176.20.2/32) [221.176.20.2](https://whois.ipip.net/cidr/221.176.20.2/32) |    221.176.20.6 221.176.20.2 221.176.20.2    | 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      5.4 4.5 6.3      |
|  9   | [221.183.55.53](https://whois.ipip.net/cidr/221.183.55.53/32) |                221.183.55.53                 |              中国广东广州 chinamobile.com 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |      4.2 / 4 / 4      |
|  10  | [223.120.22.14](https://whois.ipip.net/cidr/223.120.22.14/32) [223.120.12.9](https://whois.ipip.net/cidr/223.120.12.9/32) [223.120.22.14](https://whois.ipip.net/cidr/223.120.22.14/32) |   223.120.22.14 223.120.12.9 223.120.22.14   | 中国广东广州 chinamobile.com 移动 美国加利福尼亚州洛杉矶 chinamobile.com 移动 中国广东广州 chinamobile.com 移动 | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |       6 159.4 5       |
|  11  | [223.120.12.9](https://whois.ipip.net/cidr/223.120.12.9/32) [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32) [223.120.12.9](https://whois.ipip.net/cidr/223.120.12.9/32) |    223.120.12.9 223.120.6.18 223.120.12.9    | 美国加利福尼亚州洛杉矶 chinamobile.com 移动 美国加利福尼亚州洛杉矶 chinamobile.com 移动 美国加利福尼亚州洛杉矶 chinamobile.com 移动 | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |    157.5 152 157.4    |
|  12  | [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32)  |                 223.120.6.18                 |         美国加利福尼亚州洛杉矶 chinamobile.com 移动          | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |  151.8 / 151.1 / 153  |
|  13  | [223.119.64.230](https://whois.ipip.net/cidr/223.119.64.230/32) |                223.119.64.230                |         美国加利福尼亚州洛杉矶 chinamobile.com 移动          | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 159.5 / 160.5 / 158.9 |
|  14  | [192.254.81.48](https://whois.ipip.net/cidr/192.254.81.48/32) |                192.254.81.48                 |             美国加利福尼亚州洛杉矶 zenlayer.com              |          [AS21859](https://whois.ipip.net/AS21859)           | 153.4 / 152.1 / 153.2 |
|  15  | [45.192.191.70](https://whois.ipip.net/cidr/45.192.191.70/32) [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32) [38.64.78.129](https://whois.ipip.net/cidr/38.64.78.129/32) |   45.192.191.70 38.64.78.129 38.64.78.129    | 中国香港 cloudinnovation.org 美国加利福尼亚州洛杉矶 cogentco.com 美国加利福尼亚州洛杉矶 cogentco.com | [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) [AS58879](https://whois.ipip.net/AS58879) / [AS137443](https://whois.ipip.net/AS137443) / [AS174](https://whois.ipip.net/AS174) |   155.3 158.2 159.3   |

### 回程路由

```shell
Traceroute to China, Beijing CU (TCP Mode, Max 50 Hop)
============================================================
traceroute to 123.125.99.1 (123.125.99.1), 50 hops max, 60 byte packets
 1  104.251.231.1  1.45 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.31 ms  *  LAN Address
 3  118.184.22.61  7.63 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  145.50 ms  *  China ChinaTelecom
 5  59.43.186.249  131.05 ms  *  China Shanghai ChinaTelecom
 6  *
 7  59.43.80.86  129.20 ms  *  China Shanghai ChinaTelecom
 8  154.54.42.97  44.69 ms  AS174  United States Utah Salt Lake City cogentco.com
 9  154.54.44.137  59.87 ms  AS174  United States California San Francisco cogentco.com
10  219.158.5.73  129.98 ms  AS4837  China Shanghai ChinaUnicom
11  219.158.6.189  160.31 ms  AS4837  China Beijing ChinaUnicom
12  *
13  219.232.11.134  148.70 ms  AS4808  China Beijing ChinaUnicom
14  124.65.194.138  147.57 ms  AS4808  China Beijing ChinaUnicom
15  61.135.113.154  148.43 ms  AS4808  China Beijing ChinaUnicom
16  *
17  *
18  123.125.99.1  148.01 ms  AS4808  China Beijing ChinaUnicom


Traceroute to China, Beijing CT (TCP Mode, Max 50 Hop)
============================================================
traceroute to 180.149.128.1 (180.149.128.1), 50 hops max, 60 byte packets
 1  104.251.231.1  1.28 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  3.02 ms  *  LAN Address
 3  118.184.22.61  1.14 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  122.34 ms  *  China ChinaTelecom
 5  59.43.247.141  159.04 ms  *  China Beijing ChinaTelecom
 6  *
 7  59.43.132.17  151.85 ms  *  China Beijing ChinaTelecom
 8  202.97.17.45  163.74 ms  AS4134  China Beijing ChinaTelecom
 9  36.110.244.46  150.74 ms  AS23724  China Beijing ChinaTelecom
10  180.149.128.1  158.35 ms  AS23724  China Beijing ChinaTelecom


Traceroute to China, Beijing CM (TCP Mode, Max 50 Hop)
============================================================
traceroute to 211.136.25.153 (211.136.25.153), 50 hops max, 60 byte packets
 1  104.251.231.1  4.70 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.18 ms  *  LAN Address
 3  118.184.22.61  1.31 ms  *  United States California Los Angeles 51idc.com
 4  59.43.189.37  127.22 ms  *  China Shanghai ChinaTelecom
 5  *
 6  59.43.130.205  128.39 ms  *  China Shanghai ChinaTelecom
 7  59.43.80.138  129.20 ms  *  China Shanghai ChinaTelecom
 8  *
 9  *
10  *
11  *
12  221.183.25.113  176.03 ms  AS9808  China Beijing ChinaMobile
13  *
14  *
15  *
16  211.136.63.66  192.43 ms  AS56048  China Beijing ChinaMobile
17  211.136.95.226  181.48 ms  AS56048  China Beijing ChinaMobile
18  *
19  *
20  211.136.25.153  192.76 ms  AS56048  China Beijing ChinaMobile


Traceroute to China, Shanghai CU (TCP Mode, Max 50 Hop)
============================================================
traceroute to 58.247.0.49 (58.247.0.49), 50 hops max, 60 byte packets
 1  104.251.231.1  1.20 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.35 ms  *  LAN Address
 3  118.184.22.61  1.15 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  125.60 ms  *  China ChinaTelecom
 5  *
 6  59.43.138.45  131.17 ms  *  China Shanghai ChinaTelecom
 7  219.158.40.173  125.56 ms  AS4837  China Shanghai ChinaUnicom
 8  219.158.9.97  127.14 ms  AS4837  China Shanghai ChinaUnicom
 9  *
10  139.226.214.33  128.62 ms  AS17621  China Shanghai ChinaUnicom
11  58.247.0.49  142.61 ms  AS17621  China Shanghai ChinaUnicom


Traceroute to China, Shanghai CT (TCP Mode, Max 50 Hop)
============================================================
traceroute to 180.153.28.1 (180.153.28.1), 50 hops max, 60 byte packets
 1  104.251.231.1  1.82 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  17.68 ms  *  LAN Address
 3  118.184.22.61  1.27 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  124.11 ms  *  China ChinaTelecom
 5  59.43.187.69  128.16 ms  *  China Shanghai ChinaTelecom
 6  59.43.130.205  129.47 ms  *  China Shanghai ChinaTelecom
 7  101.95.88.42  131.76 ms  AS4812  China Shanghai ChinaTelecom
 8  202.97.58.169  136.07 ms  AS4134  China Shanghai ChinaTelecom
 9  124.74.232.66  126.51 ms  AS4812  China Shanghai ChinaTelecom
10  101.227.255.46  130.65 ms  AS4812  China Shanghai ChinaTelecom
11  *
12  101.227.250.3  130.20 ms  AS4812  China Shanghai ChinaTelecom
13  180.153.28.1  126.71 ms  AS4812  China Shanghai ChinaTelecom


Traceroute to China, Shanghai CM (TCP Mode, Max 50 Hop)
============================================================
traceroute to 221.183.55.22 (221.183.55.22), 50 hops max, 60 byte packets
 1  104.251.231.1  1.60 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.44 ms  *  LAN Address
 3  118.184.22.61  1.16 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  122.32 ms  *  China ChinaTelecom
 5  154.54.3.70  1.63 ms  AS174  United States California Los Angeles cogentco.com
 6  *
 7  59.43.80.78  130.63 ms  *  China Shanghai ChinaTelecom
 8  202.97.46.66  130.60 ms  AS4134  China Shanghai ChinaTelecom
 9  221.183.15.25  156.05 ms  AS9808  China Shanghai ChinaMobile
10  *
11  221.176.22.30  200.93 ms  AS9808  China Shanghai ChinaMobile
12  221.183.55.22  164.03 ms  AS9808  China Shanghai ChinaMobile


Traceroute to China, Guangzhou CU (TCP Mode, Max 50 Hop)
============================================================
traceroute to 210.21.4.130 (210.21.4.130), 50 hops max, 60 byte packets
 1  104.251.231.1  6.27 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.22 ms  *  LAN Address
 3  118.184.22.61  1.12 ms  *  United States California Los Angeles 51idc.com
 4  59.43.182.102  144.85 ms  *  United States California Los Angeles ChinaTelecom
 5  *
 6  59.43.130.145  163.07 ms  *  China Guangdong Guangzhou ChinaTelecom
 7  59.43.18.241  155.98 ms  *  China Guangdong Guangzhou ChinaTelecom
 8  219.158.40.169  159.50 ms  AS4837  China Guangdong Guangzhou ChinaUnicom
 9  219.158.10.249  165.02 ms  AS4837  China Guangdong Guangzhou ChinaUnicom
10  120.83.0.62  158.08 ms  AS17816  China Guangdong Guangzhou ChinaUnicom
11  120.80.170.254  164.45 ms  AS17622  China Guangdong Guangzhou ChinaUnicom
12  120.80.170.254  264.79 ms  AS17622  China Guangdong Guangzhou ChinaUnicom
13  210.21.4.130  156.69 ms  AS17622  China Guangdong Guangzhou ChinaUnicom


Traceroute to China, Guangzhou CT (TCP Mode, Max 50 Hop)
============================================================
traceroute to 113.108.209.1 (113.108.209.1), 50 hops max, 60 byte packets
 1  104.251.231.1  7.72 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  8.60 ms  *  LAN Address
 3  118.184.22.61  1.59 ms  *  United States California Los Angeles 51idc.com
 4  59.43.182.102  145.10 ms  *  United States California Los Angeles ChinaTelecom
 5  *
 6  38.142.238.34  6.85 ms  AS174  United States California Los Angeles cogentco.com
 7  202.97.50.29  2.77 ms  AS4134  United States California Los Angeles ChinaTelecom
 8  113.108.208.50  163.79 ms  AS58466  China Guangdong Guangzhou ChinaTelecom
 9  113.108.209.1  163.20 ms  AS58466  China Guangdong Guangzhou ChinaTelecom


Traceroute to China, Guangzhou CM (TCP Mode, Max 50 Hop)
============================================================
traceroute to 211.139.129.5 (211.139.129.5), 50 hops max, 60 byte packets
 1  104.251.231.1  7.39 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.82 ms  *  LAN Address
 3  118.184.22.61  1.34 ms  *  United States California Los Angeles 51idc.com
 4  59.43.182.102  155.03 ms  *  United States California Los Angeles ChinaTelecom
 5  *
 6  59.43.130.117  146.86 ms  *  China Guangdong Guangzhou ChinaTelecom
 7  202.97.55.54  156.12 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
 8  202.97.18.241  159.14 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
 9  *
10  221.176.22.185  168.19 ms  AS9808  China Guangdong Guangzhou ChinaMobile
11  221.183.38.162  156.89 ms  AS9808  China Guangdong Guangzhou ChinaMobile
12  211.136.208.41  152.59 ms  AS56040  China Guangdong Guangzhou ChinaMobile
13  211.136.249.117  158.90 ms  AS56040  China Guangdong Guangzhou ChinaMobile
14  120.198.206.166  171.33 ms  AS56040  China Guangdong Guangzhou ChinaMobile
15  211.139.129.5  167.49 ms  AS56040  China Guangdong Guangzhou ChinaMobile


Traceroute to China, Shanghai CU AS9929 (TCP Mode, Max 50 Hop)
============================================================
traceroute to 210.13.66.238 (210.13.66.238), 50 hops max, 60 byte packets
 1  104.251.231.1  6.34 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  14.37 ms  *  LAN Address
 3  118.184.22.61  1.49 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  122.20 ms  *  China ChinaTelecom
 5  59.43.187.85  127.74 ms  *  China Shanghai ChinaTelecom
 6  59.43.130.213  126.28 ms  *  China Shanghai ChinaTelecom
 7  59.43.80.98  129.89 ms  *  China Shanghai ChinaTelecom
 8  202.97.46.2  126.85 ms  AS4134  China Shanghai ChinaTelecom
 9  202.97.16.66  147.26 ms  AS4134  China Shanghai ChinaTelecom
10  *
11  218.105.2.210  151.30 ms  AS9929  China Shanghai ChinaUnicom
12  210.13.112.254  148.79 ms  AS9929  China Shanghai ChinaUnicom
13  210.13.66.237  161.93 ms  AS9929  China Shanghai ChinaUnicom
14  210.13.66.238  154.72 ms  AS9929  China Shanghai ChinaUnicom


Traceroute to China, Shanghai CT CN2 (TCP Mode, Max 50 Hop)
============================================================
traceroute to 58.32.0.1 (58.32.0.1), 50 hops max, 60 byte packets
 1  104.251.231.1  1.43 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.24 ms  *  LAN Address
 3  118.184.22.61  1.24 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  122.32 ms  *  China ChinaTelecom
 5  59.43.187.69  127.13 ms  *  China Shanghai ChinaTelecom
 6  59.43.130.213  124.25 ms  *  China Shanghai ChinaTelecom
 7  101.95.88.206  138.95 ms  AS4812  China Shanghai ChinaTelecom
 8  101.95.95.18  130.17 ms  AS4812  China Shanghai ChinaTelecom
 9  58.32.0.1  129.13 ms  AS4812  China Shanghai ChinaTelecom


Traceroute to China, Beijing Dr.Peng Home Network (TCP Mode, Max 50 Hop)
============================================================
traceroute to 14.131.128.1 (14.131.128.1), 50 hops max, 60 byte packets
 1  104.251.231.1  17.78 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.07 ms  *  LAN Address
 3  118.184.22.61  0.99 ms  *  United States California Los Angeles 51idc.com
 4  59.43.189.37  131.30 ms  *  China Shanghai ChinaTelecom
 5  59.43.247.61  125.38 ms  *  China Shanghai ChinaTelecom
 6  59.43.138.61  124.74 ms  *  China Shanghai ChinaTelecom
 7  59.43.80.14  126.76 ms  *  China Shanghai ChinaTelecom
 8  202.97.50.253  127.47 ms  AS4134  China Shanghai ChinaTelecom
 9  202.97.17.206  131.27 ms  AS4134  China Shanghai ChinaTelecom
10  219.158.109.173  127.26 ms  AS4837  China Shanghai ChinaUnicom
11  219.158.8.241  159.55 ms  AS4837  China Beijing ChinaUnicom
12  *
13  202.106.193.38  150.27 ms  AS4808  China Beijing ChinaUnicom


Traceroute to China, Beijing Dr.Peng Network IDC Network (TCP Mode, Max 50 Hop)
============================================================
traceroute to 211.167.230.100 (211.167.230.100), 50 hops max, 60 byte packets
 1  104.251.231.1  1.14 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  2.10 ms  *  LAN Address
 3  118.184.22.61  1.30 ms  *  United States California Los Angeles 51idc.com
 4  59.43.189.37  127.61 ms  *  China Shanghai ChinaTelecom
 5  59.43.187.65  129.52 ms  *  China Shanghai ChinaTelecom
 6  *
 7  59.43.80.14  123.87 ms  *  China Shanghai ChinaTelecom
 8  202.97.48.141  126.05 ms  AS4134  China Shanghai ChinaTelecom
 9  202.97.16.34  126.81 ms  AS4134  China Shanghai ChinaTelecom
10  219.158.8.225  124.86 ms  AS4837  China Shanghai ChinaUnicom
11  219.158.7.229  152.14 ms  AS4837  China Beijing ChinaUnicom
12  61.149.203.182  150.66 ms  AS4808  China Beijing ChinaUnicom
13  202.96.13.214  145.99 ms  AS4808  China Beijing ChinaUnicom
14  *
15  218.241.244.2  149.27 ms  AS4808,AS4847  China Beijing DRPENG
16  218.241.255.86  156.55 ms  AS4808,AS4847  China Beijing DRPENG
17  218.241.253.130  148.11 ms  AS4808,AS4847  China Beijing DRPENG
18  211.167.230.100  152.44 ms  AS4808,AS17964  China Beijing DRPENG


Traceroute to China, Beijing CERNET (TCP Mode, Max 50 Hop)
============================================================
traceroute to 202.205.109.205 (202.205.109.205), 50 hops max, 60 byte packets
 1  104.251.231.1  1.45 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  1.29 ms  *  LAN Address
 3  118.184.22.61  1.39 ms  *  United States California Los Angeles 51idc.com
 4  59.43.182.102  144.69 ms  *  United States California Los Angeles ChinaTelecom
 5  *
 6  59.43.130.113  159.30 ms  *  China Guangdong Guangzhou ChinaTelecom
 7  202.97.70.14  161.29 ms  *  China Guangdong Guangzhou ChinaTelecom
 8  202.97.18.241  150.04 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
 9  *
10  202.105.95.18  157.09 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
11  202.112.46.29  160.02 ms  AS4538  China Guangdong Guangzhou CHINAEDU
12  *
13  101.4.117.33  192.53 ms  AS4538  China Hunan Changsha CHINAEDU
14  101.4.112.38  176.50 ms  AS4538  China Hubei Wuhan CHINAEDU
15  101.4.117.38  192.06 ms  AS4538  China Henan Zhengzhou CHINAEDU
16  101.4.112.1  203.90 ms  AS4538  China Beijing CHINAEDU
17  219.224.102.230  182.82 ms  AS4538  China Beijing CHINAEDU
18  202.112.38.82  198.59 ms  AS4538  China Beijing CHINAEDU
19  202.205.109.205  198.12 ms  AS4538  China Beijing CHINAEDU


Traceroute to China, Beijing CSTNET (TCP Mode, Max 50 Hop)
============================================================
traceroute to 159.226.254.1 (159.226.254.1), 50 hops max, 60 byte packets
 1  104.251.231.1  1.30 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  20.10 ms  *  LAN Address
 3  118.184.22.61  1.17 ms  *  United States California Los Angeles 51idc.com
 4  59.43.181.145  122.13 ms  *  China ChinaTelecom
 5  59.43.249.25  164.78 ms  *  China Shanghai ChinaTelecom
 6  59.43.138.45  135.89 ms  *  China Shanghai ChinaTelecom
 7  63.218.211.9  186.50 ms  AS3491  China Hong Kong pccw.com
 8  202.97.46.2  125.42 ms  AS4134  China Shanghai ChinaTelecom
 9  *
10  *
11  159.226.253.121  147.56 ms  AS7497  China Beijing CSTNET
12  159.226.254.1  165.55 ms  AS7497  China Beijing CSTNET


Traceroute to China, Beijing GCable (TCP Mode, Max 50 Hop)
============================================================
traceroute to 211.156.140.17 (211.156.140.17), 50 hops max, 60 byte packets
 1  104.251.231.1  4.39 ms  AS58879,AS137443  United States California Los Angeles klayer.com
 2  10.8.18.1  6.80 ms  *  LAN Address
 3  118.184.22.61  1.40 ms  *  United States California Los Angeles 51idc.com
 4  59.43.189.37  127.25 ms  *  China Shanghai ChinaTelecom
 5  59.43.182.233  153.98 ms  *  China ChinaTelecom
 6  *
 7  59.43.132.13  154.35 ms  *  China Beijing ChinaTelecom
 8  *
 9  *
10  *
11  60.247.93.254  181.04 ms  AS4847  China Beijing uecom.com.cn ChinaTelecom
```

## LemonBench

关于 [LemonBench](https://github.com/LemonBench)

报告链接：https://paste.ubuntu.com/p/ZzRRYKwwfy/
