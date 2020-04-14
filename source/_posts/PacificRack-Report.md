---
title: PacificRack VPS 测试报告
tags: [笔记,VPS,测评]
categories: 程序
comments: true
reward: true
typora-root-url: ..
abbrlink: 1907789401
date: 2019-12-03 16:46:12
---

前几天黑色星期五，然后看见大佬们都在说 PacificRack 的服务器，所以我也去凑热闹收了一台，刚好把自己之前那台 256M 的小可怜换掉，顺便也跑了一下测试之类哒。

<!-- more -->

CPU 真的还是有点差，不过和之前那台也差不多，但是这台商家没有开 aes_ni，路由的话我看见别人的电信回程是 CN2 GT，联通移动直连，~~但是我这台不知道为什么电信也是直连的没有走 CN2 好惨诶~~（电信回程切到 CN2 GT 啦，具体见[更新测试结果](#更新测试结果)）。

> PacificRack 为机房运营商 QuadraNET 旗下的全资子品牌。目前推出 QuadraNET 洛杉矶线路的 VPS，混合云和独立服务器等业务。2019 双十一/黑五活动正式启动，50% 优惠码后，最便宜的机型 512M/25G SSD/500G 仅需 12.5 美金一年。

## 机器配置

### 常规机型

我的这台是最低配的那个，之前半价的

**512M KVM VPS**

- CPU：**1x Intel Xeon vCore** CPU
- 内存：**512 MB** RAM
- 磁盘：**25 GB RAID-10** SSD
- 带宽：**1 Gigabit** Link speed
- 流量：**500GB/mo** Transfer
- IP数：**1 Free Dedicated IP Address** IP Space
- 虚拟类型： **KVM** Virtualization
- DDoS防御： **3Gbps** DDoS Protection

购买地址：https://pacificrack.com/portal/cart.php?a=add&pid=1&aff=575

半价优惠码：**VPS50OFF**（不过现在好像活动结束了，原价就...很贵了）

所有机型：https://pacificrack.com/portal/cart.php?aff=575

### 活动机型

下面是最近还在做活动的机型

**Cyber Monday Sale – 512MB KVM VPS**

- RAM: 512 MB
- SSD: 20 GB RAID-10
- CPU: 1x Intel Xeon vCore
- Transfer: 500GB /mo
- Link speed: 1 Gigabit
- DDoS Protection: 3Gbps
- IP Space: 1 Free Dedicated IP Address
- Virtualization: KVM

[$13.95一年(限量700台)](https://pacificrack.com/portal/aff.php?aff=575&pid=33)

**Black Friday Sale – 1G KVM VPS**

- RAM: 1GB
- SSD: 30 GB RAID-10
- CPU: 2x Intel Xeon vCore
- Transfer: 1TB/mo
- Link speed: 1 Gigabit
- DDoS Protection: 3Gbps
- IP Space: 1 Free Dedicated IP Address

[$18.95一年(限量1000台)](https://pacificrack.com/portal/aff.php?aff=575&pid=32)

## 测试 IP

155.94.143.100

192.161.179.106

> PacificRack 更换 IP 需要 6 美元一次

## 系统信息

```shell
CPU 型号             : QEMU Virtual CPU version (cpu64-rhel6)
CPU 核心数           : 1
CPU 频率             : 2199.998 MHz
CPU 缓存大小         : 4096 KB
总硬盘大小           : 25.2 GB (3.9 GB Used)
总内存大小           : 485 MB (221 MB Used)
SWAP大小             : 511 MB (15 MB Used)
开机时长             : 1 days, 23 hour 54 min
系统负载             : 0.21, 0.10, 0.07
系统                 : Debian GNU/Linux 9
架构                 : x86_64 (64 Bit)
内核                 : 4.14.129-bbrplus
虚拟化平台           : kvm
```

## IP 信息

```shell
本机IP:		155.94.*.*
ASN信息:	AS8100 (美国 加利福尼亚州 洛杉矶 )
运营商:		quadranet.com
IPInfo:
  ip: "155.94.*.*"
  hostname: "155.94.*.*.static.quadranet.com"
  city: "Los Angeles"
  region: "California"
  country: "US"
  loc: "34.0522,-118.2437"
  postal: "90009"
  timezone: "America/Los_Angeles"
  asn: 
    asn: "AS8100"
    name: "QuadraNet Enterprises LLC"
    domain: "quadranet.com"
    route: "155.94.128.0/17"
    type: "hosting"
  hosting: 
    host: "quadranet"
    id: "QUADRANET"
    name: "QuadraNet Enterprises LLC"
    network: "155.94.128.0/17"
  company: 
    name: "QuadraNet Enterprises LLC"
    domain: "quadranet.com"
    type: "hosting"
  abuse: 
    address: "US, CA, Los Angeles, 530 W 6th Street Suite 901, 90014"
    country: "US"
    email: "abuse@quadranet.com"
    name: "QuadraNet Abuse"
    network: "155.94.128.0/17"
    phone: "+1-213-614-8371"
```

## 磁盘性能

```shell
硬盘I/O (第一次测试) : 97.9 MB/s
硬盘I/O (第二次测试) : 137 MB/s
硬盘I/O (第三次测试) : 167 MB/s
磁盘性能测试 (4K块/1M块, Direct写入)
测试项目	  写入速度				           读取速度
10MB-4K块	8.4 MB/s (2038 IOPS, 1.26 秒)	16.4 MB/s (4002 IOPS, 0.64 秒)
10MB-1M块	146 MB/s (139 IOPS, 0.07 秒)		860 MB/s (820 IOPS, 0.01 秒)
100MB-4K块	9.4 MB/s (2302 IOPS, 11.12 秒)	14.7 MB/s (3596 IOPS, 7.12 秒)
100MB-1M块	117 MB/s (111 IOPS, 0.90 秒)		135 MB/s (128 IOPS, 0.78 秒)
1000MB-4K块	8.3 MB/s (2037 IOPS, 125.65 秒)	15.6 MB/s (3807 IOPS, 67.23 秒)
1000MB-1M块	126 MB/s (120 IOPS, 8.29 秒)		199 MB/s (190 IOPS, 5.26 秒)
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

   System: prprvps: GNU/Linux
   OS: GNU/Linux -- 4.14.129-bbrplus -- #1 SMP Mon Jun 24 16:51:05 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: QEMU Virtual CPU version (cpu64-rhel6) (4400.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   04:26:17 up 42 min,  2 users,  load average: 0.73, 0.26, 0.30; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun Dec 01 2019 04:26:17 - 04:54:14
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       18940501.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     2840.5 MWIPS (9.7 s, 7 samples)
Execl Throughput                               2450.5 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        206406.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           53804.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        592374.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                              302962.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  66757.5 lps   (10.0 s, 7 samples)
Process Creation                               5128.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   4350.3 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    581.8 lpm   (60.0 s, 2 samples)
System Call Overhead                         171607.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   18940501.0   1623.0
Double-Precision Whetstone                       55.0       2840.5    516.5
Execl Throughput                                 43.0       2450.5    569.9
File Copy 1024 bufsize 2000 maxblocks          3960.0     206406.9    521.2
File Copy 256 bufsize 500 maxblocks            1655.0      53804.1    325.1
File Copy 4096 bufsize 8000 maxblocks          5800.0     592374.4   1021.3
Pipe Throughput                               12440.0     302962.8    243.5
Pipe-based Context Switching                   4000.0      66757.5    166.9
Process Creation                                126.0       5128.5    407.0
Shell Scripts (1 concurrent)                     42.4       4350.3   1026.0
Shell Scripts (8 concurrent)                      6.0        581.8    969.7
System Call Overhead                          15000.0     171607.8    114.4
                                                                   ========
System Benchmarks Index Score                                         481.6

======= Script description and score comparison completed! ======= 
```

## 宝塔跑分

使用宝塔面板版本：7.0.3

使用宝塔跑分版本：1.3

![image-20191210212401106](/assets/img/image-20191210212401106.png)

## 网络测试

### 带宽测试

以下测速在开启了 bbrplus 加速插件后进行

SpeedTest: https://www.speedtest.net/result/8818851622

![speedtest](/assets/img/speedtest_net_8818851622.png)

### 国外网络测试

```shell
节点名称                   IP地址            下载速度             延迟      
CacheFly                  205.234.175.175   34.5MB/s            36.223 ms   
Linode, Singapore, SG     139.162.23.4      4.71MB/s            174.827 ms  
Linode, London, UK        176.58.107.39     6.33MB/s            134.622 ms  
Linode, Frankfurt, DE     139.162.130.8     4.54MB/s            140.710 ms  
Linode, Fremont, CA       50.116.14.9       28.8MB/s            10.968 ms   
Softlayer, Dallas, TX     173.192.68.18     22.3MB/s            59.636 ms   
Softlayer, Seattle, WA    67.228.112.250    24.0MB/s            24.740 ms   
Softlayer, Frankfurt, DE  159.122.69.4      3.98MB/s            148.515 ms  
Softlayer, Singapore, SG  119.81.28.170     5.14MB/s            220.955 ms  
Softlayer, HongKong, CN   119.81.130.170    4.34MB/s            160.135 ms  
```

### 国内网络测试

```shell
国内网络测试
节点名称                  上传速度           下载速度             延迟      
上海电信                  2.03 Mbit/s       72.49 Mbit/s        000.000 ms 
西安电信                  55.38 Mbit/s      44.67 Mbit/s        301.5 ms   
北京联通                  61.46 Mbit/s      56.30 Mbit/s        289.113 ms 

国内网络延迟测试
合肥        : 174.67 ms  北京        : 167.77 ms  武汉        : 179.01 ms 
杭州        : 143.09 ms  宁夏        : 181.69 ms  呼和浩特    : 174.41 ms 
兰州        : 238.37 ms  济南        : 158.84 ms  西安        : 202.28 ms 
重庆        : 197.94 ms  长春        : 159.72 ms  福州        : 191.54 ms 
乌鲁木齐    : 231.01 ms   天津        : 173.94 ms  郑州        : 160.81 ms 
```

### Speedtest.net 网络测试

```shell
节点名称		 上传速度	  下载速度	   Ping延迟
距离最近测速点	   78.03 MB/s  59.47 MB/s  5.986 ms
东北-吉林联通		8.45 MB/s	6.09 MB/s	186.77 ms
东北-沈阳移动		0.93 MB/s	0.26 MB/s	232.305 ms
华北-山东联通		0.81 MB/s	4.91 MB/s	600400.933 ms
华中-南京联通		8.32 MB/s	4.40 MB/s	164.451 ms
华中-杭州电信		0.93 MB/s	0.72 MB/s	172.854 ms
华中-杭州移动		0.98 MB/s	5.75 MB/s	267.247 ms
华东-上海联通		5.28 MB/s	5.98 MB/s	183.763 ms
华东-上海移动		0.63 MB/s	6.57 MB/s	221.509 ms
西南-南宁移动		1.54 MB/s	8.98 MB/s	240.192 ms
西北-兰州联通		7.39 MB/s	3.80 MB/s	272.142 ms
西北-兰州电信		0.44 MB/s	1.15 MB/s	377.571 ms
西北-兰州移动		1.65 MB/s	5.63 MB/s	265.209 ms
```
### Ping 丢包测试

使用 Ping.pe 测试：https://ping.pe/

![img_k5uRvNNv](/assets/img/img_k5uRvNNv.png)

### 代理测试

测速在广东联通 100M 网络下进行

测速时间：2019 年 12 月 8 日 11:55 AM

#### 网速测试

SpeedTest: https://www.speedtest.net/result/8833509926

![speedtest](/assets/img/speedtest_net_8833509926.png)

#### YouTube 测试

![image-20191208120153623](/assets/img/image-20191208120153623.png)

## 国内路由追踪

### 去程路由

#### 江苏宿迁电信

| 跳数 |                              IP                              |              主机名               |           地区（仅供参考）            |            AS号（仅供参考）             |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------------------------: | :-----------------------------------: | :-------------------------------------: | :-------------------: |
|  1   |                              *                               |                 *                 |                  N/A                  |                    *                    |           *           |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |            10.254.61.1            |                局域网                 |                                         |   15.4 / 3.6 / 4.8    |
|  3   |  [10.254.51.1](https://whois.ipip.net/cidr/10.254.51.1/32)   |            10.254.51.1            |                局域网                 |                                         |     1.1 / 1 / 1.1     |
|  4   | [61.147.244.221](https://whois.ipip.net/cidr/61.147.244.221/32) |          61.147.244.221           |             江苏宿迁 电信             | [AS4134](https://whois.ipip.net/AS4134) |    0.8 / 0.8 / 1.5    |
|  5   | [222.187.244.161](https://whois.ipip.net/cidr/222.187.244.161/32) |          222.187.244.161          |             江苏宿迁 电信             | [AS4134](https://whois.ipip.net/AS4134) |    1.1 / 1.1 / 1.3    |
|  6   | [61.147.244.57](https://whois.ipip.net/cidr/61.147.244.57/32) |           61.147.244.57           |             江苏宿迁 电信             | [AS4134](https://whois.ipip.net/AS4134) |     6.8 / 6 / 8.6     |
|  7   | [202.97.92.13](https://whois.ipip.net/cidr/202.97.92.13/32)  |           202.97.92.13            |               上海 电信               | [AS4134](https://whois.ipip.net/AS4134) |  12.4 / 10.1 / 11.8   |
|  8   | [202.97.62.26](https://whois.ipip.net/cidr/202.97.62.26/32)  |           202.97.62.26            |               上海 电信               | [AS4134](https://whois.ipip.net/AS4134) |  25.1 / 26.9 / 24.5   |
|  9   | [202.97.51.241](https://whois.ipip.net/cidr/202.97.51.241/32) |           202.97.51.241           |               上海 电信               | [AS4134](https://whois.ipip.net/AS4134) |  28.7 / 34.3 / 31.8   |
|  10  | [59.43.244.113](https://whois.ipip.net/cidr/59.43.244.113/32) |           59.43.244.113           |               上海 电信               |                    *                    |         15.4          |
|  11  | [59.43.246.238](https://whois.ipip.net/cidr/59.43.246.238/32) |           59.43.246.238           |      美国加利福尼亚州洛杉矶 电信      |                    *                    |         149.4         |
|  12  | [218.30.48.146](https://whois.ipip.net/cidr/218.30.48.146/32) |           218.30.48.146           | 美国加利福尼亚州洛杉矶 ctamericas.com | [AS4134](https://whois.ipip.net/AS4134) |         160.8         |
|  13  | [96.44.175.33](https://whois.ipip.net/cidr/96.44.175.33/32)  | 96.44.175.33.static.quadranet.com | 美国加利福尼亚州洛杉矶 quadranet.com  | [AS8100](https://whois.ipip.net/AS8100) |          169          |
|  14  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |          155.94.143.100           | 美国加利福尼亚州洛杉矶 quadranet.com  | [AS8100](https://whois.ipip.net/AS8100) | 156.8 / 156.8 / 156.9 |

#### 广东深圳电信

| 跳数 |                              IP                              |     主机名      |           地区（仅供参考）            |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------: | :-----------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   |                              *                               |        *        |                  N/A                  |                              *                               |           *           |
|  2   | [172.20.250.252](https://whois.ipip.net/cidr/172.20.250.252/32) | 172.20.250.252  |                局域网                 |                                                              |    15.1 / 7 / 4.3     |
|  3   |  [103.45.0.53](https://whois.ipip.net/cidr/103.45.0.53/32)   |   103.45.0.53   |         广东深圳 niaoyun.com          |                                                              |   161.3 / 1.4 / 1.1   |
|  4   | [183.56.167.125](https://whois.ipip.net/cidr/183.56.167.125/32) | 183.56.167.125  |             广东深圳 电信             | [AS4816](https://whois.ipip.net/AS4816) / [AS4134](https://whois.ipip.net/AS4134) |   3.3 / 10.5 / 3.2    |
|  5   |                              *                               |        *        |                  N/A                  |                              *                               |           *           |
|  6   | [121.14.112.125](https://whois.ipip.net/cidr/121.14.112.125/32) | 121.14.112.125  |             广东深圳 电信             | [AS4816](https://whois.ipip.net/AS4816) / [AS4134](https://whois.ipip.net/AS4134) |    1.2 / 1.4 / 1.1    |
|  7   | [119.147.223.113](https://whois.ipip.net/cidr/119.147.223.113/32) | 119.147.223.113 |             广东深圳 电信             | [AS4816](https://whois.ipip.net/AS4816) / [AS4134](https://whois.ipip.net/AS4134) |     5.1 / 6.3 / 4     |
|  8   | [202.97.91.154](https://whois.ipip.net/cidr/202.97.91.154/32) |  202.97.91.154  |             广东广州 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |  19.7 / 20.3 / 21.7   |
|  9   | [202.97.91.194](https://whois.ipip.net/cidr/202.97.91.194/32) |  202.97.91.194  |             广东广州 电信             |           [AS4134](https://whois.ipip.net/AS4134)            |         35.7          |
|  10  | [59.43.244.129](https://whois.ipip.net/cidr/59.43.244.129/32) |  59.43.244.129  |             广东广州 电信             |                                                              |   33 / 32.7 / 32.9    |
|  11  | [59.43.182.73](https://whois.ipip.net/cidr/59.43.182.73/32)  |  59.43.182.73   |      美国加利福尼亚州洛杉矶 电信      |                                                              | 189.2 / 189.1 / 188.6 |
|  12  | [218.30.48.146](https://whois.ipip.net/cidr/218.30.48.146/32) |  218.30.48.146  | 美国加利福尼亚州洛杉矶 ctamericas.com |           [AS4134](https://whois.ipip.net/AS4134)            | 209.4 / 189.6 / 189.6 |
|  13  | [96.44.175.33](https://whois.ipip.net/cidr/96.44.175.33/32)  |  96.44.175.33   | 美国加利福尼亚州洛杉矶 quadranet.com  |           [AS8100](https://whois.ipip.net/AS8100)            |         209.7         |
|  14  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) | 155.94.143.100  | 美国加利福尼亚州洛杉矶 quadranet.com  |           [AS8100](https://whois.ipip.net/AS8100)            |  187 / 187.5 / 188.9  |

#### 江苏宿迁联通

| 跳数 |                              IP                              |     主机名      |            地区（仅供参考）            |             AS号（仅供参考）              |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------: | :------------------------------------: | :---------------------------------------: | :-------------------: |
|  1   |                              *                               |        *        |                  N/A                   |                     *                     |           *           |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |   10.254.61.1   |                 局域网                 |                                           |   16.2 / 1.7 / 1.9    |
|  3   |  [10.254.51.1](https://whois.ipip.net/cidr/10.254.51.1/32)   |   10.254.51.1   |                 局域网                 |                                           |      1.3 / 1 / 1      |
|  4   |  [10.254.11.2](https://whois.ipip.net/cidr/10.254.11.2/32)   |   10.254.11.2   |                 局域网                 |                                           |    1.5 / 1.6 / 1.6    |
|  5   | [153.36.202.5](https://whois.ipip.net/cidr/153.36.202.5/32)  |  153.36.202.5   |             江苏宿迁 联通              |  [AS4837](https://whois.ipip.net/AS4837)  |    1.6 / 1.6 / 1.6    |
|  6   | [221.6.174.69](https://whois.ipip.net/cidr/221.6.174.69/32)  |  221.6.174.69   |             江苏宿迁 联通              |  [AS4837](https://whois.ipip.net/AS4837)  |    10.2 / 9 / 8.8     |
|  7   | [219.158.18.13](https://whois.ipip.net/cidr/219.158.18.13/32) |  219.158.18.13  |               北京 联通                |  [AS4837](https://whois.ipip.net/AS4837)  |  32.6 / 70.7 / 32.6   |
|  8   | [219.158.4.174](https://whois.ipip.net/cidr/219.158.4.174/32) |  219.158.4.174  |               北京 联通                |  [AS4837](https://whois.ipip.net/AS4837)  |  78.4 / 74.9 / 80.2   |
|  9   | [219.158.3.178](https://whois.ipip.net/cidr/219.158.3.178/32) |  219.158.3.178  |               北京 联通                |  [AS4837](https://whois.ipip.net/AS4837)  |  70.2 / 82.9 / 80.6   |
|  10  | [219.158.117.18](https://whois.ipip.net/cidr/219.158.117.18/32) | 219.158.117.18  |      美国加利福尼亚州洛杉矶 联通       |  [AS4837](https://whois.ipip.net/AS4837)  | 222.3 / 211.9 / 202.2 |
|  11  | [207.254.191.126](https://whois.ipip.net/cidr/207.254.191.126/32) | 207.254.191.126 | 美国加利福尼亚州洛杉矶 chinaunicom.com | [AS19174](https://whois.ipip.net/AS19174) | 193.9 / 190.6 / 187.3 |
|  12  | [204.152.204.1](https://whois.ipip.net/cidr/204.152.204.1/32) |  204.152.204.1  |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  |         246.3         |
|  13  | [96.44.175.35](https://whois.ipip.net/cidr/96.44.175.35/32)  |  96.44.175.35   |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  |         218.8         |
|  14  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) | 155.94.143.100  |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  |  182.8 / 210 / 183.9  |

#### 广东茂名联通

| 跳数 |                              IP                              |              主机名               |            地区（仅供参考）            |             AS号（仅供参考）              |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :-------------------------------: | :------------------------------------: | :---------------------------------------: | :-------------------: |
|  1   | [122.13.195.129](https://whois.ipip.net/cidr/122.13.195.129/32) |          122.13.195.129           |             广东茂名 联通              | [AS17816](https://whois.ipip.net/AS17816) |    8.3 / 4.5 / 4.3    |
|  2   |                              *                               |                 *                 |                  N/A                   |                     *                     |           *           |
|  3   |  [172.16.69.1](https://whois.ipip.net/cidr/172.16.69.1/32)   |               bogon               |                 局域网                 |                                           |   11.8 / 8.1 / 5.5    |
|  4   | [120.80.253.101](https://whois.ipip.net/cidr/120.80.253.101/32) |          120.80.253.101           |             广东茂名 联通              | [AS17816](https://whois.ipip.net/AS17816) |    2.3 / 1.9 / 2.7    |
|  5   | [120.80.253.21](https://whois.ipip.net/cidr/120.80.253.21/32) |           120.80.253.21           |             广东茂名 联通              | [AS17816](https://whois.ipip.net/AS17816) |    2.6 / 4.5 / 6.1    |
|  6   |  [112.91.0.45](https://whois.ipip.net/cidr/112.91.0.45/32)   |            112.91.0.45            |             广东茂名 联通              | [AS17816](https://whois.ipip.net/AS17816) |    8.5 / 8.3 / 8.5    |
|  7   | [219.158.8.122](https://whois.ipip.net/cidr/219.158.8.122/32) |           219.158.8.122           |             广东广州 联通              |  [AS4837](https://whois.ipip.net/AS4837)  |  16.9 / 14.5 / 12.1   |
|  8   | [219.158.103.38](https://whois.ipip.net/cidr/219.158.103.38/32) |          219.158.103.38           |             广东广州 联通              |  [AS4837](https://whois.ipip.net/AS4837)  |   15 / 12.5 / 10.8    |
|  9   | [219.158.97.210](https://whois.ipip.net/cidr/219.158.97.210/32) |          219.158.97.210           |      美国加利福尼亚州洛杉矶 联通       |  [AS4837](https://whois.ipip.net/AS4837)  | 227.5 / 225.5 / 231.8 |
|  10  | [207.254.191.101](https://whois.ipip.net/cidr/207.254.191.101/32) |          207.254.191.101          | 美国加利福尼亚州洛杉矶 chinaunicom.com | [AS19174](https://whois.ipip.net/AS19174) |  182.1 / 182 / 182.1  |
|  11  | [204.152.204.1](https://whois.ipip.net/cidr/204.152.204.1/32) | 204.152.204.1 quadranet quadranet |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  |         181.7         |
|  12  | [96.44.175.35](https://whois.ipip.net/cidr/96.44.175.35/32)  | 96.44.175.35.static.quadranet.com |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  | 209.4 / 195.1 / 209.4 |
|  13  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |          155.94.143.100           |  美国加利福尼亚州洛杉矶 quadranet.com  |  [AS8100](https://whois.ipip.net/AS8100)  |         231.9         |

#### 江苏宿迁移动

| 跳数 |                              IP                              |                    主机名                    |             地区（仅供参考）              |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :------------------------------------------: | :---------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   |                              *                               |                      *                       |                    N/A                    |                              *                               |           *           |
|  2   |  [10.254.61.1](https://whois.ipip.net/cidr/10.254.61.1/32)   |                 10.254.61.1                  |                  局域网                   |                                                              |    9.7 / 5.6 / 3.1    |
|  3   |  [10.254.52.1](https://whois.ipip.net/cidr/10.254.52.1/32)   |                 10.254.52.1                  |                  局域网                   |                                                              |      1.4 / 1 / 1      |
|  4   |  [10.254.44.2](https://whois.ipip.net/cidr/10.254.44.2/32)   |                 10.254.44.2                  |                  局域网                   |                                                              |    2.5 / 1.6 / 1.7    |
|  5   | [112.25.206.101](https://whois.ipip.net/cidr/112.25.206.101/32) |                112.25.206.101                |               江苏宿迁 移动               | [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |    21.2 / 5 / 13.8    |
|  6   | [223.68.13.153](https://whois.ipip.net/cidr/223.68.13.153/32) |                223.68.13.153                 |               江苏宿迁 移动               | [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |     2.8 / 2 / 1.8     |
|  7   | [183.207.19.241](https://whois.ipip.net/cidr/183.207.19.241/32) |   241.19.207.183.static.js.chinamobile.com   |               江苏南京 移动               | [AS56046](https://whois.ipip.net/AS56046) / [AS9808](https://whois.ipip.net/AS9808) |      6.8 / 7 / 7      |
|  8   | [221.183.18.21](https://whois.ipip.net/cidr/221.183.18.21/32) |                221.183.18.21                 |               江苏无锡 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |    9.2 / 9.2 / 9.2    |
|  9   | [221.176.22.245](https://whois.ipip.net/cidr/221.176.22.245/32) |                221.176.22.245                |               广东广州 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |  30.1 / 53.3 / 30.3   |
|  10  | [221.176.22.106](https://whois.ipip.net/cidr/221.176.22.106/32) |                221.176.22.106                |               广东广州 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |  40.4 / 33.2 / 33.4   |
|  11  | [221.176.19.194](https://whois.ipip.net/cidr/221.176.19.194/32) [221.183.25.206](https://whois.ipip.net/cidr/221.183.25.206/32) [221.176.19.210](https://whois.ipip.net/cidr/221.176.19.210/32) | 221.176.19.194 221.183.25.206 221.176.19.210 | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |    37.6 33.2 32.1     |
|  12  | [221.183.55.77](https://whois.ipip.net/cidr/221.183.55.77/32) [221.183.55.77](https://whois.ipip.net/cidr/221.183.55.77/32) [221.183.55.81](https://whois.ipip.net/cidr/221.183.55.81/32) |  221.183.55.77 221.183.55.77 221.183.55.81   | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |    40.6 40.5 40.2     |
|  13  | [223.120.12.9](https://whois.ipip.net/cidr/223.120.12.9/32)  |                 223.120.12.9                 |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |         255.4         |
|  14  | [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32)  |                 223.120.6.18                 |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |         202.4         |
|  15  | [223.119.64.246](https://whois.ipip.net/cidr/223.119.64.246/32) |                223.119.64.246                |                 美国 移动                 | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |         255.6         |
|  16  | [96.44.175.35](https://whois.ipip.net/cidr/96.44.175.35/32)  |      96.44.175.35.static.quadranet.com       |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            |         224.9         |
|  17  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |                155.94.143.100                |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            | 255.8 / 257.1 / 258.2 |

#### 广东广州移动

| 跳数 |                              IP                              |                    主机名                    |             地区（仅供参考）              |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :------------------------------------------: | :---------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   |                              *                               |                      *                       |                    N/A                    |                              *                               |           *           |
|  2   |                              *                               |                      *                       |                    N/A                    |                              *                               |           *           |
|  3   |                              *                               |                      *                       |                    N/A                    |                              *                               |           *           |
|  4   |   [10.0.1.229](https://whois.ipip.net/cidr/10.0.1.229/32)    |                  10.0.1.229                  |                  局域网                   |                                                              |    0.7 / 0.7 / 0.4    |
|  5   | [221.183.63.121](https://whois.ipip.net/cidr/221.183.63.121/32) |                221.183.63.121                |               广东广州 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |    0.6 / 0.4 / 0.4    |
|  6   | [221.183.22.33](https://whois.ipip.net/cidr/221.183.22.33/32) [221.183.22.33](https://whois.ipip.net/cidr/221.183.22.33/32) [221.176.18.77](https://whois.ipip.net/cidr/221.176.18.77/32) |  221.183.22.33 221.183.22.33 221.176.18.77   | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |     21.5 3.8 1.9      |
|  7   | [221.176.22.106](https://whois.ipip.net/cidr/221.176.22.106/32) [221.176.18.110](https://whois.ipip.net/cidr/221.176.18.110/32) [221.176.18.110](https://whois.ipip.net/cidr/221.176.18.110/32) | 221.176.22.106 221.176.18.110 221.176.18.110 | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      2.3 2 23.5       |
|  8   | [221.176.19.198](https://whois.ipip.net/cidr/221.176.19.198/32) [221.183.25.117](https://whois.ipip.net/cidr/221.183.25.117/32) [221.176.20.6](https://whois.ipip.net/cidr/221.176.20.6/32) |  221.176.19.198 221.183.25.117 221.176.20.6  | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      14.6 44 4.3      |
|  9   | [221.183.55.77](https://whois.ipip.net/cidr/221.183.55.77/32) [221.183.55.81](https://whois.ipip.net/cidr/221.183.55.81/32) [221.183.55.81](https://whois.ipip.net/cidr/221.183.55.81/32) |  221.183.55.77 221.183.55.81 221.183.55.81   | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |      4.8 5.6 5.7      |
|  10  | [223.120.12.105](https://whois.ipip.net/cidr/223.120.12.105/32) |                223.120.12.105                |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 155.3 / 154.6 / 154.9 |
|  11  | [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32)  |                 223.120.6.18                 |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 145.6 / 145.5 / 145.2 |
|  12  | [223.119.64.246](https://whois.ipip.net/cidr/223.119.64.246/32) |                223.119.64.246                |                 美国 移动                 | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 144.1 / 143.9 / 143.9 |
|  13  | [96.44.175.35](https://whois.ipip.net/cidr/96.44.175.35/32)  |      96.44.175.35.static.quadranet.com       |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            |         220.4         |
|  14  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |                155.94.143.100                |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            | 157.5 / 174.7 / 154.4 |

#### 北京鹏博士

| 跳数 |                              IP                              |      主机名      |           地区（仅供参考）            |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :--------------: | :-----------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [60.206.36.129](https://whois.ipip.net/cidr/60.206.36.129/32) |  60.206.36.129   |         北京 鹏博士/电信/联通         | [AS17964](https://whois.ipip.net/AS17964) / [AS17816](https://whois.ipip.net/AS17816) |    4.2 / 5.4 / 3.7    |
|  2   | [10.255.163.73](https://whois.ipip.net/cidr/10.255.163.73/32) |  10.255.163.73   |                局域网                 |                                                              |    0.6 / 0.7 / 0.6    |
|  3   | [10.255.163.85](https://whois.ipip.net/cidr/10.255.163.85/32) |  10.255.163.85   |                局域网                 |                                                              |    0.3 / 0.3 / 8.3    |
|  4   | [10.240.34.129](https://whois.ipip.net/cidr/10.240.34.129/32) |  10.240.34.129   |                局域网                 |                                                              |    0.7 / 1.1 / 0.9    |
|  5   | [10.240.34.70](https://whois.ipip.net/cidr/10.240.34.70/32)  |   10.240.34.70   |                局域网                 |                                                              |    0.8 / 0.7 / 0.8    |
|  6   | [124.207.160.21](https://whois.ipip.net/cidr/124.207.160.21/32) |  124.207.160.21  |           北京 鹏博士/联通            | [AS17816](https://whois.ipip.net/AS17816) / [AS17964](https://whois.ipip.net/AS17964) |    1.1 / 1.2 / 1.2    |
|  7   | [124.193.241.249](https://whois.ipip.net/cidr/124.193.241.249/32) | 124.193.241.249  |           北京 鹏博士/联通            | [AS4847](https://whois.ipip.net/AS4847) / [AS17816](https://whois.ipip.net/AS17816) / [AS17964](https://whois.ipip.net/AS17964) |    2.1 / 2.4 / 2.2    |
|  8   |                              *                               |        *         |                  N/A                  |                              *                               |           *           |
|  9   | [218.241.244.174](https://whois.ipip.net/cidr/218.241.244.174/32) | 218.241.244.174  |         北京 鹏博士/电信/联通         |           [AS4847](https://whois.ipip.net/AS4847)            |    4.8 / 4.8 / 4.9    |
|  10  | [221.239.18.133](https://whois.ipip.net/cidr/221.239.18.133/32) |  221.239.18.133  |               天津 电信               | [AS17638](https://whois.ipip.net/AS17638) / [AS4134](https://whois.ipip.net/AS4134) |   12 / 13.5 / 11.3    |
|  11  | [219.150.51.205](https://whois.ipip.net/cidr/219.150.51.205/32) |  219.150.51.205  |               天津 电信               | [AS17638](https://whois.ipip.net/AS17638) / [AS4134](https://whois.ipip.net/AS4134) |   6.9 / 12.4 / 6.6    |
|  12  | [221.238.222.225](https://whois.ipip.net/cidr/221.238.222.225/32) | 221.238.222.225  |               天津 电信               | [AS17638](https://whois.ipip.net/AS17638) / [AS4134](https://whois.ipip.net/AS4134) |    6.8 / 6.8 / 6.5    |
|  13  | [202.97.79.197](https://whois.ipip.net/cidr/202.97.79.197/32) |  202.97.79.197   |               北京 电信               |                                                              |    10.6 / 19 / 9.5    |
|  14  | [202.97.53.142](https://whois.ipip.net/cidr/202.97.53.142/32) |  202.97.53.142   |               北京 电信               |           [AS4134](https://whois.ipip.net/AS4134)            |  27.2 / 24.3 / 27.1   |
|  15  | [202.97.12.106](https://whois.ipip.net/cidr/202.97.12.106/32) |  202.97.12.106   |               中国 电信               |           [AS4134](https://whois.ipip.net/AS4134)            |   25 / 27.3 / 24.9    |
|  16  | [59.43.246.153](https://whois.ipip.net/cidr/59.43.246.153/32) |  59.43.246.153   |               北京 电信               |                              *                               |          13           |
|  17  | [59.43.247.126](https://whois.ipip.net/cidr/59.43.247.126/32) |  59.43.247.126   |               上海 电信               |                                                              |  55.8 / 54.9 / 54.7   |
|  18  | [59.43.189.34](https://whois.ipip.net/cidr/59.43.189.34/32)  |   59.43.189.34   |      美国加利福尼亚州洛杉矶 电信      |                                                              | 219.9 / 161.3 / 160.4 |
|  19  | [218.30.48.146](https://whois.ipip.net/cidr/218.30.48.146/32) |  218.30.48.146   | 美国加利福尼亚州洛杉矶 ctamericas.com |           [AS4134](https://whois.ipip.net/AS4134)            |         194.8         |
|  20  | [96.44.175.33](https://whois.ipip.net/cidr/96.44.175.33/32)  | 96.44.175.33 * * | 美国加利福尼亚州洛杉矶 quadranet.com  |           [AS8100](https://whois.ipip.net/AS8100)            |         195.2         |
|  21  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |  155.94.143.100  | 美国加利福尼亚州洛杉矶 quadranet.com  |           [AS8100](https://whois.ipip.net/AS8100)            |         183.8         |

#### 吉林长春铁通

| 跳数 |                              IP                              |                    主机名                    |             地区（仅供参考）              |                       AS号（仅供参考）                       |     时间（毫秒）      |
| :--: | :----------------------------------------------------------: | :------------------------------------------: | :---------------------------------------: | :----------------------------------------------------------: | :-------------------: |
|  1   | [222.34.18.254](https://whois.ipip.net/cidr/222.34.18.254/32) |                222.34.18.254                 |               吉林长春 铁通               | [AS134810](https://whois.ipip.net/AS134810) / [AS9394](https://whois.ipip.net/AS9394) |     3.1 / 3 / 4.9     |
|  2   | [61.235.52.209](https://whois.ipip.net/cidr/61.235.52.209/32) |                61.235.52.209                 |               吉林长春 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |   1.9 / 78.6 / 1.5    |
|  3   |  [61.235.52.5](https://whois.ipip.net/cidr/61.235.52.5/32)   |                 61.235.52.5                  |               吉林长春 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |    1.5 / 9.9 / 0.7    |
|  4   | [61.235.52.41](https://whois.ipip.net/cidr/61.235.52.41/32)  |                 61.235.52.41                 |               吉林长春 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |   17.3 / 1.8 / 1.2    |
|  5   | [61.235.59.61](https://whois.ipip.net/cidr/61.235.59.61/32)  |                 61.235.59.61                 |               吉林长春 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |   1.3 / 20.6 / 1.5    |
|  6   | [61.235.52.33](https://whois.ipip.net/cidr/61.235.52.33/32)  |                 61.235.52.33                 |               吉林长春 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |      6.2 / 7 / 8      |
|  7   | [61.237.127.209](https://whois.ipip.net/cidr/61.237.127.209/32) |                61.237.127.209                |                 北京 铁通                 |           [AS9394](https://whois.ipip.net/AS9394)            |  23.1 / 20.5 / 22.4   |
|  8   | [61.237.126.218](https://whois.ipip.net/cidr/61.237.126.218/32) |                61.237.126.218                |               广东广州 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |  51.7 / 53.6 / 51.2   |
|  9   | [61.237.126.150](https://whois.ipip.net/cidr/61.237.126.150/32) |                61.237.126.150                |               广东广州 铁通               |           [AS9394](https://whois.ipip.net/AS9394)            |  51.5 / 51.1 / 51.5   |
|  10  | [221.176.23.9](https://whois.ipip.net/cidr/221.176.23.9/32)  |                 221.176.23.9                 |               广东广州 移动               |           [AS9808](https://whois.ipip.net/AS9808)            |  51.7 / 51.4 / 52.1   |
|  11  | [221.183.23.57](https://whois.ipip.net/cidr/221.183.23.57/32) * [221.183.23.57](https://whois.ipip.net/cidr/221.183.23.57/32) |        221.183.23.57 * 221.183.23.57         |      广东广州 移动 N/A 广东广州 移动      | [AS9808](https://whois.ipip.net/AS9808) * [AS9808](https://whois.ipip.net/AS9808) |      52.5 * 52.5      |
|  12  | [221.176.22.106](https://whois.ipip.net/cidr/221.176.22.106/32) [221.176.22.158](https://whois.ipip.net/cidr/221.176.22.158/32) [221.176.22.106](https://whois.ipip.net/cidr/221.176.22.106/32) | 221.176.22.106 221.176.22.158 221.176.22.106 | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |    73.1 64.5 54.4     |
|  13  | [221.183.25.121](https://whois.ipip.net/cidr/221.183.25.121/32) [221.183.25.117](https://whois.ipip.net/cidr/221.183.25.117/32) [221.176.19.34](https://whois.ipip.net/cidr/221.176.19.34/32) | 221.183.25.121 221.183.25.117 221.176.19.34  | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |    64.5 55.5 66.6     |
|  14  | [221.183.55.57](https://whois.ipip.net/cidr/221.183.55.57/32) [221.183.55.53](https://whois.ipip.net/cidr/221.183.55.53/32) [221.183.55.57](https://whois.ipip.net/cidr/221.183.55.57/32) |  221.183.55.57 221.183.55.53 221.183.55.57   | 广东广州 移动 广东广州 移动 广东广州 移动 | [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) [AS9808](https://whois.ipip.net/AS9808) |    96.7 97.2 97.3     |
|  15  | [223.120.22.14](https://whois.ipip.net/cidr/223.120.22.14/32) |                223.120.22.14                 |               广东广州 移动               | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |    100 / 99.1 / 99    |
|  16  | [223.120.12.9](https://whois.ipip.net/cidr/223.120.12.9/32)  |                 223.120.12.9                 |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) | 232.8 / 232.2 / 232.5 |
|  17  | [223.120.6.18](https://whois.ipip.net/cidr/223.120.6.18/32)  |                 223.120.6.18                 |        美国加利福尼亚州洛杉矶 移动        | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |         260.6         |
|  18  | [223.119.64.246](https://whois.ipip.net/cidr/223.119.64.246/32) |                223.119.64.246                |          美国 移动 N/A 美国 移动          | [AS58453](https://whois.ipip.net/AS58453) / [AS9808](https://whois.ipip.net/AS9808) |          272          |
|  19  | [96.44.175.35](https://whois.ipip.net/cidr/96.44.175.35/32)  |                 96.44.175.35                 |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            |         328.4         |
|  20  | [155.94.143.100](https://whois.ipip.net/cidr/155.94.143.100/32) |                155.94.143.100                |   美国加利福尼亚州洛杉矶 quadranet.com    |           [AS8100](https://whois.ipip.net/AS8100)            | 219.8 / 261.6 / 257.5 |

### 回程路由

#### 电信

```shell
路由追踪到 北京电信 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 180.149.128.1 (180.149.128.1), 30 hops max, 60 byte packets
 1  66.212.29.97  3.40 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.32  0.28 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  64.124.85.221  1.59 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 4  64.124.85.221  0.39 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 5  64.125.26.6  5.95 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 6  64.125.14.42  7.85 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 7  202.97.90.133  4.81 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 8  202.97.90.133  0.98 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 9  202.97.12.61  150.31 ms  AS4134  中国 北京 电信
10  202.97.34.157  159.88 ms  AS4134  中国 北京 电信
11  202.97.34.157  156.93 ms  AS4134  中国 北京 电信
12  180.149.128.1  166.42 ms  AS23724  中国 北京 电信

路由追踪到 上海电信 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 180.153.28.1 (180.153.28.1), 30 hops max, 60 byte packets
 1  66.212.29.97  5.56 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  19.08 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  69.12.69.2  0.57 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 4  89.149.130.94  37.18 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  213.254.230.254  0.53 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 6  202.97.92.38  51.98 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 7  202.97.92.38  4.40 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 8  202.97.59.169  139.92 ms  AS4134  中国 上海 电信
 9  202.97.24.253  173.78 ms  AS4134  中国 上海 电信
10  *
11  101.95.120.105  189.93 ms  AS4812  中国 上海 电信
12  101.95.225.34  161.29 ms  AS4812  中国 上海 电信
13  124.74.232.54  162.88 ms  AS4812  中国 上海 电信
14  180.153.28.1  165.99 ms  AS4812  中国 上海 电信

路由追踪到 广州电信 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 113.108.209.1 (113.108.209.1), 30 hops max, 60 byte packets
 1  66.212.29.97  18.24 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  0.35 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  69.12.69.2  35.01 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 4  89.149.130.94  6.84 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  89.149.130.94  9.22 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 6  202.97.92.38  56.04 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 7  202.97.92.38  30.33 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 8  202.97.94.113  160.88 ms  AS4134  中国 广东 广州 电信
 9  202.97.94.145  186.50 ms  AS4134  中国 广东 广州 电信
10  202.97.94.125  186.48 ms  AS4134  中国 广东 广州 电信
11  *
12  113.108.209.1  170.74 ms  AS58466  中国 广东 广州 电信

路由追踪到 上海电信CN2 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 58.32.0.1 (58.32.0.1), 30 hops max, 60 byte packets
 1  66.212.29.97  6.56 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  2.04 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  173.205.58.41  37.07 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 4  4.68.62.1  36.91 ms  AS3356  美国 加利福尼亚州 洛杉矶 level3.com
 5  *
 6  4.71.136.202  1.35 ms  AS3356  美国 加利福尼亚州 洛杉矶 level3.com
 7  4.71.136.202  1.27 ms  AS3356  美国 加利福尼亚州 洛杉矶 level3.com
 8  59.43.181.153  149.53 ms  *  中国 电信
 9  59.43.182.142  131.45 ms  *  中国 上海 电信
10  59.43.187.61  262.83 ms  *  中国 上海 电信
11  101.95.88.62  145.72 ms  AS4812  中国 上海 电信
12  58.32.0.1  137.42 ms  AS4812  中国 上海 电信
```

#### 联通

```shell
路由追踪到 北京联通 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 123.125.99.1 (123.125.99.1), 30 hops max, 60 byte packets
 1  66.212.29.97  8.63 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  0.38 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  173.205.58.41  0.40 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 4  219.158.42.241  1.07 ms  AS4837  美国 加利福尼亚州 洛杉矶 联通
 5  219.158.42.241  2.50 ms  AS4837  美国 加利福尼亚州 洛杉矶 联通
 6  219.158.97.26  217.16 ms  AS4837  中国 广东 广州 联通
 7  219.158.8.113  200.52 ms  AS4837  中国 广东 广州 联通
 8  219.158.8.113  336.49 ms  AS4837  中国 广东 广州 联通
 9  219.158.6.109  233.90 ms  AS4837  中国 北京 联通
10  123.126.0.210  201.47 ms  AS4808  中国 北京 联通
11  61.51.169.146  195.35 ms  AS4808  中国 北京 联通
12  124.65.194.138  216.65 ms  AS4808  中国 北京 联通
13  61.135.113.158  231.35 ms  AS4808  中国 北京 联通
14  *
15  *
16  123.125.99.1  229.63 ms  AS4808  中国 北京 联通

路由追踪到 上海联通 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 58.247.0.49 (58.247.0.49), 30 hops max, 60 byte packets
 1  66.212.29.97  6.92 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  40.02 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  69.12.69.2  0.50 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 4  173.205.56.190  8.05 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  219.158.97.205  209.57 ms  AS4837  中国 广东 广州 联通
 6  219.158.103.29  223.19 ms  AS4837  中国 广东 广州 联通
 7  219.158.103.41  223.47 ms  AS4837  中国 广东 广州 联通
 8  219.158.109.9  240.16 ms  AS4837  中国 上海 联通
 9  219.158.109.9  216.40 ms  AS4837  中国 上海 联通
10  58.247.0.49  237.32 ms  AS17621  中国 上海 联通

路由追踪到 广州联通 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 210.21.4.130 (210.21.4.130), 30 hops max, 60 byte packets
 1  66.212.29.97  9.70 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.32  18.70 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  173.205.58.41  0.41 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 4  173.205.58.41  0.78 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  89.149.180.38  7.81 ms  AS3257  美国 加利福尼亚州 圣何塞 gtt.net
 6  173.205.56.178  182.54 ms  AS3257  美国 加利福尼亚州 圣何塞 gtt.net
 7  219.158.97.177  164.64 ms  AS4837  中国 上海 联通
 8  219.158.19.86  167.05 ms  AS4837  中国 上海 联通
 9  219.158.19.81  163.30 ms  AS4837  中国 上海 联通
10  219.158.6.254  181.37 ms  AS4837  中国 广东 广州 联通
11  112.91.0.254  189.51 ms  AS17816  中国 广东 联通
12  210.21.4.130  186.37 ms  AS17622  中国 广东 广州 联通

路由追踪到 上海联通精品网 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 210.13.66.238 (210.13.66.238), 30 hops max, 60 byte packets
 1  66.212.29.97  4.59 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.32  7.77 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  173.205.58.41  1.05 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 4  89.149.181.170  2.00 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  64.125.27.39  0.40 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 6  64.125.14.210  0.71 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 7  144.232.17.56  2.76 ms  AS1239  美国 加利福尼亚州 洛杉矶 sprint.com
 8  144.232.17.27  13.67 ms  AS1239  美国 加利福尼亚州 洛杉矶 sprint.com
 9  144.232.9.176  134.93 ms  AS1239  美国 加利福尼亚州 圣何塞 sprint.com
10  144.232.22.215  13.64 ms  AS1239  美国 加利福尼亚州 圣何塞 sprint.com
11  144.223.242.10  170.04 ms  AS1239  美国 加利福尼亚州 圣何塞 sprint.com
12  218.105.2.129  171.01 ms  AS9929  中国 广东 广州 联通
13  218.105.2.210  161.16 ms  AS9929  中国 上海 联通
14  210.13.75.138  160.73 ms  AS9929  中国 上海 联通
15  210.13.66.237  172.82 ms  AS9929  中国 上海 联通
16  *
17  210.13.66.238  262.68 ms  AS9929  中国 上海 联通
```

#### 移动

```shell
路由追踪到 北京移动 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 211.136.88.117 (211.136.88.117), 30 hops max, 60 byte packets
 1  66.212.29.97  5.68 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.32  0.75 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  64.124.85.221  0.33 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 4  64.125.26.6  6.49 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 5  64.125.27.39  0.59 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 6  206.223.123.137  1.09 ms  AS7713  美国 加利福尼亚州 洛杉矶 equinix.com
 7  223.120.6.217  1.73 ms  AS58453  美国 加利福尼亚州 洛杉矶 移动
 8  *
 9  *
10  *
11  221.176.27.253  274.77 ms  AS9808  中国 北京 移动
12  *
13  211.136.67.190  222.51 ms  AS56048  中国 北京 移动
14  *
15  211.136.88.117  254.95 ms  AS56048  中国 北京 移动

路由追踪到 上海移动 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 221.183.55.22 (221.183.55.22), 30 hops max, 60 byte packets
 1  66.212.29.97  8.92 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  28.45 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  64.125.41.13  0.82 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 4  64.125.26.6  2.05 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 5  64.125.27.39  0.47 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 6  206.223.123.137  3.82 ms  AS7713  美国 加利福尼亚州 洛杉矶 equinix.com
 7  223.120.6.217  1.58 ms  AS58453  美国 加利福尼亚州 洛杉矶 移动
 8  *
 9  *
10  *
11  *
12  *
13  221.176.22.10  242.38 ms  AS9808  中国 上海 移动
14  221.183.55.22  230.21 ms  AS9808  中国 上海 移动

路由追踪到 广州移动 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 211.139.129.5 (211.139.129.5), 30 hops max, 60 byte packets
 1  66.212.29.97  2.45 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  16.78 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  64.124.85.221  70.37 ms  AS6461  美国 加利福尼亚州 洛杉矶 zayo.com
 4  64.125.26.6  0.82 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 5  64.125.27.39  0.47 ms  AS6461  ZAYO.COM 骨干网 zayo.com
 6  206.223.123.137  2.81 ms  AS7713  美国 加利福尼亚州 洛杉矶 equinix.com
 7  223.120.6.217  0.97 ms  AS58453  美国 加利福尼亚州 洛杉矶 移动
 8  *
 9  221.183.55.98  179.34 ms  AS9808  中国 广东 广州 移动
10  221.176.24.57  238.23 ms  AS9808  中国 广东 广州 移动
11  221.176.24.5  218.87 ms  AS9808  中国 广东 广州 移动
12  221.183.14.122  261.00 ms  AS9808  中国 广东 广州 移动
13  183.235.226.25  226.01 ms  AS56040  中国 广东 广州 移动
14  211.139.129.5  233.40 ms  AS56040  中国 广东 广州 移动
```

#### 其它

```shell
路由追踪到 北京鹏博士/电信通 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 211.167.230.100 (211.167.230.100), 30 hops max, 60 byte packets
 1  66.212.29.97  168.00 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.32  119.01 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  173.205.58.41  0.49 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 4  173.205.58.41  0.41 ms  AS3257  美国 加利福尼亚州 洛杉矶 gtt.net
 5  *
 6  219.158.20.221  228.07 ms  AS4837  中国 广东 广州 联通
 7  219.158.20.221  240.29 ms  AS4837  中国 广东 广州 联通
 8  219.158.19.65  211.08 ms  AS4837  中国 广东 广州 联通
 9  219.158.7.225  230.36 ms  AS4837  中国 北京 联通
10  61.148.147.18  215.65 ms  AS4808  中国 北京 联通
11  61.148.156.190  188.14 ms  AS4808  中国 北京 联通
12  61.148.156.190  195.86 ms  AS4808  中国 北京 联通
13  *
14  *
15  *
16  218.241.253.130  233.46 ms  AS4847  中国 北京 鹏博士/电信/联通
17  211.167.230.100  234.47 ms  AS4808,AS17964  中国 北京 鹏博士

路由追踪到 北京教育网 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 202.205.109.205 (202.205.109.205), 30 hops max, 60 byte packets
 1  66.212.29.97  2.86 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  80.37 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  38.104.82.217  0.48 ms  AS174  美国 加利福尼亚州 洛杉矶 cogentco.com
 4  38.88.196.186  49.78 ms  AS174  美国 加利福尼亚州 洛杉矶 cogentco.com
 5  101.4.117.169  197.30 ms  AS4538  中国 北京 教育网
 6  101.4.117.97  242.57 ms  AS4538  中国 北京 教育网
 7  101.4.117.97  188.23 ms  AS4538  中国 北京 教育网
 8  101.4.114.197  197.02 ms  AS4538  中国 北京 教育网
 9  219.224.102.234  198.18 ms  AS4538  中国 北京 教育网
10  202.112.38.158  196.41 ms  AS4538  中国 北京 教育网
11  202.205.109.205  203.26 ms  AS4538  中国 北京 赛尔网络信息资源部 教育网

路由追踪到 北京科技网 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 159.226.254.1 (159.226.254.1), 30 hops max, 60 byte packets
 1  66.212.29.97  8.18 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  13.13 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  63.218.212.169  24.34 ms  AS3491  美国 加利福尼亚州 洛杉矶 pccw.com
 4  63.223.17.94  152.70 ms  AS3491  中国 香港 pccw.com
 5  *
 6  *
 7  159.226.254.1  226.45 ms  AS7497  中国 北京 科技网

路由追踪到 北京广电网 (TCP 模式, 最大 30 跃点)
============================================================
traceroute to 211.156.140.17 (211.156.140.17), 30 hops max, 60 byte packets
 1  66.212.29.97  3.66 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 2  96.44.175.34  20.54 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 3  69.12.69.2  0.75 ms  AS8100  美国 加利福尼亚州 洛杉矶 quadranet.com
 4  63.218.212.169  1.24 ms  AS3491  美国 加利福尼亚州 洛杉矶 pccw.com
 5  63.218.72.166  1.27 ms  AS3491  美国 加利福尼亚州 洛杉矶 pccw.com
 6  202.97.90.113  2.01 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 7  202.97.90.113  75.95 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 8  202.97.90.113  5.51 ms  AS4134  美国 加利福尼亚州 洛杉矶 电信
 9  202.97.12.49  147.47 ms  AS4134  中国 北京 电信
10  *
11  *
12  60.247.93.254  182.06 ms  AS4847  中国 北京 uecom.com.cn 电信
13  60.247.93.254  181.65 ms  AS4847  中国 北京 uecom.com.cn 电信
14  211.156.140.17  197.65 ms  AS7641  中国 北京 chinabtn.com 广电网/联通/电信
```

## LemonBench

关于 [LemonBench](https://github.com/LemonBench)

报告链接：https://paste.ubuntu.com/p/nQ7GQ26XtW/

下面这个是我之前那台 VPS 的测试结果

死海网络互联 LAX C3

报告链接：https://paste.ubuntu.com/p/Kg2j3PtpQj/

## 更新测试结果

### 20191207

网络和路由有点变更，电信回程好像已经切换到 CN2 GT 了

报告链接：https://paste.ubuntu.com/p/pghgs8pXhT/

```shell
 -> Speedtest.net Network Speed Test
 
 Node Name                      Upload Speed    Download Speed  Ping Latency
 Speedtest Default              58.79 MB/s      64.38 MB/s      3.592 ms
 China, Jilin CU                5.09 MB/s       3.15 MB/s       180.903 ms
 China, Shandong CU             1.27 MB/s       1.89 MB/s       762.615 ms
 China, Nanjing CU              2.72 MB/s       2.62 MB/s       198.584 ms
 China, Shanghai CU             8.10 MB/s       7.13 MB/s       198.152 ms
 China, Guangxi CU              2.27 MB/s       1.53 MB/s       321.498 ms
 China, Lanzhou CU              1.97 MB/s       1.51 MB/s       334.353 ms
 China, Beijing CT              12.06 MB/s      4.07 MB/s       449.869 ms
 China, Hangzhou CT             0.25 MB/s       3.58 MB/s       152.372 ms
 China, Nanjing CT              Fail: ERROR: No matched servers: 26352
 China, Guangzhou CT            1.86 MB/s       2.04 MB/s       164.714 ms
 China, Wuhan CT                Fail: ERROR: No matched servers: 23844
 China, Shenyang CM             0.97 MB/s       0.64 MB/s       340.458 ms
 China, Hangzhou CM             0.87 MB/s       9.88 MB/s       295.61 ms
 China, Shanghai CM             1.36 MB/s       1.44 MB/s       428.57 ms
 China, Nanning CM              1.59 MB/s       6.99 MB/s       410.127 ms
 China, Lanzhou CM              1.71 MB/s       1.09 MB/s       226.8 ms

 -> Traceroute Test (IPV4)

Traceroute to China, Beijing CU (TCP Mode, Max 30 Hop)
============================================================
traceroute to 123.125.99.1 (123.125.99.1), 30 hops max, 60 byte packets
 1  66.212.29.97  25.88 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  0.33 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.152  18.58 ms  AS8100  United States California Los Angeles quadranet.com
 4  207.254.191.121  4.67 ms  AS19174  United States California Los Angeles chinaunicom.com
 5  207.254.191.89  48.26 ms  AS19174  United States California Los Angeles chinaunicom.com
 6  219.158.98.17  150.42 ms  AS4837  China Beijing ChinaUnicom
 7  219.158.16.81  151.62 ms  AS4837  China Beijing ChinaUnicom
 8  219.158.8.113  176.48 ms  AS4837  China Guangdong Guangzhou ChinaUnicom
 9  61.148.157.170  167.46 ms  AS4808  China Beijing ChinaUnicom
10  123.126.0.214  202.76 ms  AS4808  China Beijing ChinaUnicom
11  61.135.113.154  231.81 ms  AS4808  China Beijing ChinaUnicom
12  124.65.194.50  173.49 ms  AS4808  China Beijing ChinaUnicom
13  *
14  123.125.99.1  150.92 ms  AS4808  China Beijing ChinaUnicom

Traceroute to China, Beijing CT (TCP Mode, Max 30 Hop)
============================================================
traceroute to 180.149.128.1 (180.149.128.1), 30 hops max, 60 byte packets
 1  66.212.29.97  3.05 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  16.52 ms  AS8100  United States California Los Angeles quadranet.com
 3  218.30.48.145  0.81 ms  AS4134  United States California Los Angeles ctamericas.com
 4  59.43.186.213  14.96 ms  AS4809  United States California San Jose ChinaTelecom
 5  59.43.247.101  149.81 ms  AS4809  China Beijing ChinaTelecom
 6  59.43.247.101  363.83 ms  AS4809  China Beijing ChinaTelecom
 7  59.43.247.101  230.15 ms  AS4809  China Beijing ChinaTelecom
 8  *
 9  *
10  *
11  180.149.159.6  174.87 ms  AS23724  China Beijing ChinaTelecom
12  180.149.128.1  163.05 ms  AS23724  China Beijing ChinaTelecom

Traceroute to China, Beijing CM (TCP Mode, Max 30 Hop)
============================================================
traceroute to 211.136.88.117 (211.136.88.117), 30 hops max, 60 byte packets
 1  66.212.29.97  6.20 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  0.35 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.152  14.36 ms  AS8100  United States California Los Angeles quadranet.com
 4  223.119.64.245  3.77 ms  AS58453  United States California Los Angeles ChinaMobile
 5  223.120.6.2  1.03 ms  AS58453  United States California Los Angeles ChinaMobile
 6  *
 7  *
 8  *
 9  221.176.27.253  220.96 ms  AS9808  China Beijing ChinaMobile
10  *
11  221.179.158.110  224.76 ms  AS56048  China Beijing ChinaMobile
12  211.136.88.117  216.76 ms  AS56048  China Beijing ChinaMobile

Traceroute to China, Shanghai CU (TCP Mode, Max 30 Hop)
============================================================
traceroute to 58.247.0.49 (58.247.0.49), 30 hops max, 60 byte packets
 1  66.212.29.97  11.15 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  58.46 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.152  2.47 ms  AS8100  United States California Los Angeles quadranet.com
 4  207.254.191.102  1.31 ms  AS19174  United States California Los Angeles chinaunicom.com
 5  207.254.191.42  42.24 ms  AS19174  United States California Los Angeles chinaunicom.com
 6  219.158.98.17  169.99 ms  AS4837  China Beijing ChinaUnicom
 7  219.158.103.41  168.65 ms  AS4837  China Guangdong Guangzhou ChinaUnicom
 8  219.158.16.86  195.17 ms  AS4837  China Shanghai ChinaUnicom
 9  *
10  58.247.0.49  180.33 ms  AS17621  China Shanghai ChinaUnicom

Traceroute to China, Shanghai CT (TCP Mode, Max 30 Hop)
============================================================
traceroute to 180.153.28.1 (180.153.28.1), 30 hops max, 60 byte packets
 1  66.212.29.97  28.09 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  22.52 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.153  0.62 ms  AS8100  United States California Los Angeles quadranet.com
 4  59.43.248.106  18.96 ms  AS4809  United States California San Jose ChinaTelecom
 5  59.43.246.237  145.56 ms  AS4809  China Shanghai ChinaTelecom
 6  59.43.182.138  206.74 ms  AS4809  China Shanghai ChinaTelecom
 7  202.97.57.26  144.55 ms  AS4134  China Shanghai ChinaTelecom
 8  202.97.57.26  149.72 ms  AS4134  China Shanghai ChinaTelecom
 9  101.95.207.234  167.95 ms  AS4812  China Shanghai ChinaTelecom
10  *
11  *
12  180.153.28.1  144.12 ms  AS4812  China Shanghai ChinaTelecom

Traceroute to China, Shanghai CM (TCP Mode, Max 30 Hop)
============================================================
traceroute to 221.183.55.22 (221.183.55.22), 30 hops max, 60 byte packets
 1  66.212.29.97  2.38 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  0.28 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.152  11.50 ms  AS8100  United States California Los Angeles quadranet.com
 4  223.119.64.245  0.91 ms  AS58453  United States California Los Angeles ChinaMobile
 5  223.120.6.17  0.84 ms  AS58453  United States California Los Angeles ChinaMobile
 6  223.120.6.126  1.73 ms  AS58453  United States California Los Angeles ChinaMobile
 7  *
 8  *
 9  221.176.24.205  168.73 ms  AS9808  China Guangdong Guangzhou ChinaMobile
10  *
11  *
12  221.176.17.178  224.95 ms  AS9808  China Shanghai ChinaMobile
13  221.183.55.22  230.39 ms  AS9808  China Shanghai ChinaMobile

Traceroute to China, Guangzhou CU (TCP Mode, Max 30 Hop)
============================================================
traceroute to 210.21.4.130 (210.21.4.130), 30 hops max, 60 byte packets
 1  66.212.29.97  5.65 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  18.17 ms  AS8100  United States California Los Angeles quadranet.com
 3  204.152.204.2  11.41 ms  AS8100  United States California Los Angeles quadranet.com
 4  207.254.191.102  0.68 ms  AS19174  United States California Los Angeles chinaunicom.com
 5  207.254.191.102  69.85 ms  AS19174  United States California Los Angeles chinaunicom.com
 6  219.158.25.113  202.78 ms  AS4837  China Guangdong Guangzhou ChinaUnicom
 7  219.158.3.181  204.41 ms  AS4837  China Beijing ChinaUnicom
 8  *
 9  *
10  120.80.175.78  203.62 ms  AS17622  China Guangdong Guangzhou ChinaUnicom
11  210.21.4.130  216.09 ms  AS17622  China Guangdong Guangzhou ChinaUnicom

Traceroute to China, Guangzhou CT (TCP Mode, Max 30 Hop)
============================================================
traceroute to 113.108.209.1 (113.108.209.1), 30 hops max, 60 byte packets
 1  66.212.29.97  1.78 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  4.49 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.153  0.46 ms  AS8100  United States California Los Angeles quadranet.com
 4  59.43.182.78  156.26 ms  AS4809  China Guangdong Guangzhou ChinaTelecom
 5  59.43.182.74  154.55 ms  AS4809  China Guangdong Guangzhou ChinaTelecom
 6  202.97.12.42  156.20 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
 7  202.97.94.125  162.92 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
 8  113.108.208.38  162.78 ms  AS58466  China Guangdong Guangzhou ChinaTelecom
 9  113.108.209.1  157.27 ms  AS58466  China Guangdong Guangzhou ChinaTelecom

Traceroute to China, Guangzhou CM (TCP Mode, Max 30 Hop)
============================================================
traceroute to 211.139.129.5 (211.139.129.5), 30 hops max, 60 byte packets
 1  66.212.29.97  1.19 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  1.03 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.152  0.43 ms  AS8100  United States California Los Angeles quadranet.com
 4  223.120.6.17  0.69 ms  AS58453  United States California Los Angeles ChinaMobile
 5  223.120.6.17  1.14 ms  AS58453  United States California Los Angeles ChinaMobile
 6  *
 7  *
 8  221.176.24.5  196.19 ms  AS9808  China Guangdong Guangzhou ChinaMobile
 9  221.183.14.142  185.22 ms  AS9808  China Guangdong Guangzhou ChinaMobile
10  *
11  183.235.226.133  220.25 ms  AS56040  China Guangdong Guangzhou ChinaMobile
12  183.235.226.237  192.71 ms  AS56040  China Guangdong Guangzhou ChinaMobile
13  211.139.129.5  192.79 ms  AS56040  China Guangdong Guangzhou ChinaMobile

Traceroute to China, Shanghai CU AS9929 (TCP Mode, Max 30 Hop)
============================================================
traceroute to 210.13.66.238 (210.13.66.238), 30 hops max, 60 byte packets
 1  66.212.29.97  6.98 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  16.45 ms  AS8100  United States California Los Angeles quadranet.com
 3  69.12.69.1  1.41 ms  AS8100  United States California Los Angeles quadranet.com
 4  62.115.136.46  5.88 ms  AS1299  United States California Los Angeles telia.com
 5  62.115.136.46  28.42 ms  AS1299  United States California Los Angeles telia.com
 6  140.222.236.27  2.62 ms  *  United States California Los Angeles verizon.com
 7  208.222.0.98  171.98 ms  AS701  China Beijing verizon.com
 8  208.222.0.98  160.54 ms  AS701  China Beijing verizon.com
 9  218.105.2.89  150.98 ms  AS9929  China Beijing ChinaUnicom
10  218.105.2.198  152.41 ms  AS9929  China Shanghai ChinaUnicom
11  218.105.2.198  163.31 ms  AS9929  China Shanghai ChinaUnicom
12  210.13.66.237  170.96 ms  AS9929  China Shanghai ChinaUnicom
13  *
14  210.13.66.238  152.17 ms  AS9929  China Shanghai ChinaUnicom

Traceroute to China, Shanghai CT CN2 (TCP Mode, Max 30 Hop)
============================================================
traceroute to 58.32.0.1 (58.32.0.1), 30 hops max, 60 byte packets
 1  66.212.29.97  6.79 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  52.20 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.153  3.91 ms  AS8100  United States California Los Angeles quadranet.com
 4  218.30.48.145  0.92 ms  AS4134  United States California Los Angeles ctamericas.com
 5  59.43.189.33  128.34 ms  AS4809  China Shanghai ChinaTelecom
 6  *
 7  101.95.88.214  139.13 ms  AS4812  China Shanghai ChinaTelecom
 8  101.95.88.226  149.09 ms  AS4812  China Shanghai ChinaTelecom
 9  58.32.0.1  128.62 ms  AS4812  China Shanghai ChinaTelecom

Traceroute to China, Beijing Dr.Peng Home Network (TCP Mode, Max 30 Hop)
============================================================
traceroute to 14.131.125.1 (14.131.125.1), 30 hops max, 60 byte packets
 1  66.212.29.97  1.46 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  46.91 ms  AS8100  United States California Los Angeles quadranet.com
 3  96.44.163.153  0.43 ms  AS8100  United States California Los Angeles quadranet.com
 4  218.30.48.145  12.52 ms  AS4134  United States California Los Angeles ctamericas.com
 5  59.43.248.106  9.13 ms  AS4809  United States California San Jose ChinaTelecom
 6  59.43.247.101  165.30 ms  AS4809  China Beijing ChinaTelecom
 7  59.43.246.142  200.51 ms  AS4809  China Beijing ChinaTelecom
 8  202.97.85.57  157.54 ms  AS4134  China Beijing ChinaTelecom
 9  202.97.18.205  170.89 ms  AS4134  China Beijing ChinaTelecom
10  *
11  106.120.235.22  184.03 ms  AS4847  China Beijing ChinaTelecom
12  *
13  *
14  218.241.245.25  204.16 ms  AS4847  China Beijing DRPENG
15  218.241.246.42  173.43 ms  AS4847  China Beijing DRPENG
16  218.241.255.186  184.68 ms  AS4847  China Beijing DRPENG
17  *
18  218.241.254.246  181.16 ms  AS4847  China Beijing DRPENG

Traceroute to China, Beijing Dr.Peng Network IDC Network (TCP Mode, Max 30 Hop)
============================================================
traceroute to 115.47.124.254 (115.47.124.254), 30 hops max, 60 byte packets
 1  66.212.29.97  4.73 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  22.74 ms  AS8100  United States California Los Angeles quadranet.com
 3  218.30.48.145  0.78 ms  AS4134  United States California Los Angeles ctamericas.com
 4  59.43.246.237  127.59 ms  AS4809  China Shanghai ChinaTelecom
 5  59.43.248.106  9.95 ms  AS4809  United States California San Jose ChinaTelecom
 6  59.43.246.154  159.73 ms  AS4809  China Beijing ChinaTelecom
 7  59.43.247.125  162.55 ms  AS4809  China Beijing ChinaTelecom
 8  202.97.12.49  220.51 ms  AS4134  China Beijing ChinaTelecom

Traceroute to China, Beijing CERNET (TCP Mode, Max 30 Hop)
============================================================
traceroute to 202.205.109.205 (202.205.109.205), 30 hops max, 60 byte packets
 1  66.212.29.97  6.43 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  20.76 ms  AS8100  United States California Los Angeles quadranet.com
 3  204.152.204.2  2.49 ms  AS8100  United States California Los Angeles quadranet.com
 4  59.43.182.78  159.57 ms  AS4809  China Guangdong Guangzhou ChinaTelecom
 5  59.43.244.130  181.33 ms  AS4809  China Guangdong Guangzhou ChinaTelecom
 6  202.97.47.2  156.44 ms  AS4134  China Xinjiang Urumqi ChinaTelecom
 7  219.158.5.145  159.81 ms  AS4837  China Beijing ChinaUnicom
 8  219.158.6.253  253.03 ms  AS4837  China Shanghai ChinaUnicom
 9  219.158.113.170  174.76 ms  AS4837  China Shanghai ChinaUnicom
10  202.105.95.18  210.23 ms  AS4134  China Guangdong Guangzhou ChinaTelecom
11  101.4.117.217  285.14 ms  AS4538  China Shanghai CHINAEDU
12  101.4.114.245  197.19 ms  AS4538  China Shanghai CHINAEDU
13  101.4.117.30  242.25 ms  AS4538  China Beijing CHINAEDU
14  101.4.112.38  165.61 ms  AS4538  China Hubei Wuhan CHINAEDU
15  101.4.117.38  182.03 ms  AS4538  China Henan Zhengzhou CHINAEDU
16  219.224.102.234  186.36 ms  AS4538  China Beijing CHINAEDU
17  219.224.102.230  205.26 ms  AS4538  China Beijing CHINAEDU
18  202.205.109.205  251.52 ms  AS4538  China Beijing CHINAEDU

Traceroute to China, Beijing CSTNET (TCP Mode, Max 30 Hop)
============================================================
traceroute to 159.226.254.1 (159.226.254.1), 30 hops max, 60 byte packets
 1  66.212.29.97  12.88 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.34  23.75 ms  AS8100  United States California Los Angeles quadranet.com
 3  218.30.48.145  0.64 ms  AS4134  United States California Los Angeles ctamericas.com
 4  207.254.191.102  3.62 ms  AS19174  United States California Los Angeles chinaunicom.com
 5  59.43.182.138  136.54 ms  AS4809  China Shanghai ChinaTelecom
 6  *
 7  63.218.211.65  194.05 ms  AS3491  China Hong Kong pccw.com
 8  219.158.3.218  149.45 ms  AS4837  China Beijing ChinaUnicom
 9  219.158.5.118  231.15 ms  AS4837  China Beijing ChinaUnicom
10  *
11  159.226.254.1  176.72 ms  AS7497  China Beijing CSTNET

Traceroute to China, Beijing GCable (TCP Mode, Max 30 Hop)
============================================================
traceroute to 211.156.140.17 (211.156.140.17), 30 hops max, 60 byte packets
 1  66.212.29.97  11.14 ms  AS8100  United States California Los Angeles quadranet.com
 2  96.44.175.32  16.69 ms  AS8100  United States California Los Angeles quadranet.com
 3  223.119.64.245  1.17 ms  AS58453  United States California Los Angeles ChinaMobile
 4  223.119.64.245  0.90 ms  AS58453  United States California Los Angeles ChinaMobile
 5  *
 6  *
 7  221.183.25.189  195.87 ms  AS9808  China Shanghai ChinaMobile
 8  221.183.23.25  200.51 ms  AS9808  China Shanghai ChinaMobile
 9  221.176.22.38  195.18 ms  AS9808  China Shanghai ChinaMobile
10  221.176.22.18  186.90 ms  AS9808  China Shanghai ChinaMobile
11  *
12  211.156.129.89  188.28 ms  AS7641  China Beijing chinabtn.com CATV
13  211.156.129.89  281.02 ms  AS7641  China Beijing chinabtn.com CATV
14  211.156.128.229  206.44 ms  AS7641  China Beijing chinabtn.com CATV
15  211.156.140.17  176.49 ms  AS7641  China Beijing chinabtn.com CATV
```

