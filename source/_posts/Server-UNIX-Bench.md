---
title: 用过的服务器的 UNIX Bench
tags: 笔记
categories: 程序
comments: true
reward: true
abbrlink: 3446765825
date: 2019-03-26 23:08:28
typora-root-url: ..
---
没事做给手上的服务器都跑了一遍 UNIX Bench ，我发现单核的VPS的CPU真的都好差诶，阿里云和AWS还挺不错

<!-- more -->

## 使用秋水逸冰脚本 UNIX Bench

```bash
wget --no-check-certificate https://github.com/teddysun/across/raw/master/unixbench.sh
chmod +x unixbench.sh
./unixbench.sh
```

**注意：**有好几台跑步起来，都是在 make 的时候报错了（一台是CentOS 7x64，另一台是Debian 8x64），不知道为什么，最近几天老是遇到这些奇奇怪怪的问题，前几天装 redsocks 也是，好气呀。

## GigsgigsCloud

### LAX Anti-DDoS 1C1G KVM

```shell
========================================================================
	
   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: prpy.me: GNU/Linux
   OS: GNU/Linux -- 4.11.8-1.el7.elrepo.x86_64 -- #1 SMP Thu Jun 29 10:01:10 EDT 2017
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: QEMU Virtual CPU version 2.5+ (4400.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:18:55 up 14 days, 8 min,  2 users,  load average: 2.53, 0.78, 0.27; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:18:55 - 15:47:22
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       26389513.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3538.7 MWIPS (9.9 s, 7 samples)
Execl Throughput                               2966.8 lps   (29.7 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        604956.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          149877.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1160881.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1206238.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 182823.1 lps   (10.0 s, 7 samples)
Process Creation                               6771.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   3840.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    504.2 lpm   (60.1 s, 2 samples)
System Call Overhead                        1661623.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   26389513.6   2261.3
Double-Precision Whetstone                       55.0       3538.7    643.4
Execl Throughput                                 43.0       2966.8    689.9
File Copy 1024 bufsize 2000 maxblocks          3960.0     604956.9   1527.7
File Copy 256 bufsize 500 maxblocks            1655.0     149877.1    905.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    1160881.4   2001.5
Pipe Throughput                               12440.0    1206238.9    969.6
Pipe-based Context Switching                   4000.0     182823.1    457.1
Process Creation                                126.0       6771.1    537.4
Shell Scripts (1 concurrent)                     42.4       3840.6    905.8
Shell Scripts (8 concurrent)                      6.0        504.2    840.4
System Call Overhead                          15000.0    1661623.6   1107.7
                                                                   ========
System Benchmarks Index Score                                         952.6

======= Script description and score comparison completed! ======= 
```

## Hostsolutions

### Romania 1C1G OpenVZ

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: dl: GNU/Linux
   OS: GNU/Linux -- 2.6.32-48-pve -- #1 SMP Fri Dec 23 10:22:54 CET 2016
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU X5650 @ 2.67GHz (5333.2 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   15:19:29 up 9 days, 12:59,  2 users,  load average: 0.59, 0.17, 0.05; runlevel 2

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:19:29 - 15:47:40
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       27067352.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3313.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                               3950.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        543836.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          164224.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1185342.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1583741.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 233916.0 lps   (10.0 s, 7 samples)
Process Creation                               9608.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5525.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    712.3 lpm   (60.1 s, 2 samples)
System Call Overhead                        3453100.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   27067352.1   2319.4
Double-Precision Whetstone                       55.0       3313.1    602.4
Execl Throughput                                 43.0       3950.3    918.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     543836.0   1373.3
File Copy 256 bufsize 500 maxblocks            1655.0     164224.3    992.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    1185342.8   2043.7
Pipe Throughput                               12440.0    1583741.0   1273.1
Pipe-based Context Switching                   4000.0     233916.0    584.8
Process Creation                                126.0       9608.5    762.6
Shell Scripts (1 concurrent)                     42.4       5525.9   1303.3
Shell Scripts (8 concurrent)                      6.0        712.3   1187.2
System Call Overhead                          15000.0    3453100.9   2302.1
                                                                   ========
System Benchmarks Index Score                                        1179.2

======= Script description and score comparison completed! ======= 
```

## AlibabaCloud

### CN Stu 1C2G OpenStack

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: izwz9eqt798ezddijwocncz: GNU/Linux
   OS: GNU/Linux -- 4.11.8-1.el7.elrepo.x86_64 -- #1 SMP Thu Jun 29 10:01:10 EDT 2017
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2682 v4 @ 2.50GHz (5000.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:19:20 up 306 days, 21:08,  2 users,  load average: 0.48, 0.11, 0.04; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:19:20 - 15:47:49
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       29157009.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4130.5 MWIPS (11.8 s, 7 samples)
Execl Throughput                               4314.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        958094.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          256477.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1900100.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1622089.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 296563.2 lps   (10.0 s, 7 samples)
Process Creation                              11570.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5500.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    696.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        1897106.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   29157009.1   2498.5
Double-Precision Whetstone                       55.0       4130.5    751.0
Execl Throughput                                 43.0       4314.0   1003.2
File Copy 1024 bufsize 2000 maxblocks          3960.0     958094.2   2419.4
File Copy 256 bufsize 500 maxblocks            1655.0     256477.3   1549.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    1900100.3   3276.0
Pipe Throughput                               12440.0    1622089.6   1303.9
Pipe-based Context Switching                   4000.0     296563.2    741.4
Process Creation                                126.0      11570.3    918.3
Shell Scripts (1 concurrent)                     42.4       5500.7   1297.3
Shell Scripts (8 concurrent)                      6.0        696.2   1160.3
System Call Overhead                          15000.0    1897106.1   1264.7
                                                                   ========
System Benchmarks Index Score                                        1357.3

======= Script description and score comparison completed! ======= 
```

### CN Stu 1C2G OpenStack (Simple Application Server)

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: iZwz96yoko50h1fjg9ytxtZ: GNU/Linux
   OS: GNU/Linux -- 4.16.3-041603-generic -- #201804190730 SMP Thu Apr 19 07:32:02 UTC 2018
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz (5000.0 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   11:55:26 up  1:19,  2 users,  load average: 0.51, 0.28, 0.11; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun May 26 2019 11:55:26 - 12:23:36
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       30840657.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3845.5 MWIPS (9.8 s, 7 samples)
Execl Throughput                               5076.8 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        562018.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          168976.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1287546.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                              942771.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 212749.9 lps   (10.0 s, 7 samples)
Process Creation                              13536.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8025.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1018.6 lpm   (60.0 s, 2 samples)
System Call Overhead                         862778.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   30840657.9   2642.7
Double-Precision Whetstone                       55.0       3845.5    699.2
Execl Throughput                                 43.0       5076.8   1180.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     562018.7   1419.2
File Copy 256 bufsize 500 maxblocks            1655.0     168976.9   1021.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    1287546.6   2219.9
Pipe Throughput                               12440.0     942771.6    757.9
Pipe-based Context Switching                   4000.0     212749.9    531.9
Process Creation                                126.0      13536.2   1074.3
Shell Scripts (1 concurrent)                     42.4       8025.8   1892.9
Shell Scripts (8 concurrent)                      6.0       1018.6   1697.7
System Call Overhead                          15000.0     862778.1    575.2
                                                                   ========
System Benchmarks Index Score                                        1154.7

======= Script description and score comparison completed! ======= 
```

### SGP 1C512M OpenStack

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: iZt4n2y5oqroyhnfg5c6p3Z: GNU/Linux
   OS: GNU/Linux -- 4.16.3-041603-generic -- #201804190730 SMP Thu Apr 19 07:32:02 UTC 2018
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz (5000.0 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   22:46:24 up  2:01,  2 users,  load average: 0.00, 0.00, 0.00; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu Jul 11 2019 22:46:24 - 23:14:40
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       27804899.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3571.7 MWIPS (10.2 s, 7 samples)
Execl Throughput                               4504.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        606043.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          166582.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1560934.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                              858372.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 167504.9 lps   (10.0 s, 7 samples)
Process Creation                              11562.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8091.3 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1028.2 lpm   (60.0 s, 2 samples)
System Call Overhead                         631121.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   27804899.4   2382.6
Double-Precision Whetstone                       55.0       3571.7    649.4
Execl Throughput                                 43.0       4504.3   1047.5
File Copy 1024 bufsize 2000 maxblocks          3960.0     606043.7   1530.4
File Copy 256 bufsize 500 maxblocks            1655.0     166582.9   1006.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    1560934.2   2691.3
Pipe Throughput                               12440.0     858372.7    690.0
Pipe-based Context Switching                   4000.0     167504.9    418.8
Process Creation                                126.0      11562.4    917.7
Shell Scripts (1 concurrent)                     42.4       8091.3   1908.3
Shell Scripts (8 concurrent)                      6.0       1028.2   1713.7
System Call Overhead                          15000.0     631121.7    420.7
                                                                   ========
System Benchmarks Index Score                                        1077.6

======= Script description and score comparison completed! ======= 
```

## GoogleCloud

### HK 1C512M OpenStack 共享核心

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: hanabi: GNU/Linux
   OS: GNU/Linux -- 4.9.0-8-amd64 -- #1 SMP Debian 4.9.110-3+deb9u6 (2018-10-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU @ 2.00GHz (4000.3 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:19:24 up 153 days, 21:28,  2 users,  load average: 0.15, 0.03, 0.01; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:19:24 - 15:49:27
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       15139677.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                      789.8 MWIPS (17.9 s, 7 samples)
Execl Throughput                                875.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        124630.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           46575.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        358817.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                              281291.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  36243.2 lps   (10.1 s, 7 samples)
Process Creation                               2600.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   1680.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    196.6 lpm   (60.2 s, 2 samples)
System Call Overhead                         200954.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   15139677.7   1297.3
Double-Precision Whetstone                       55.0        789.8    143.6
Execl Throughput                                 43.0        875.3    203.6
File Copy 1024 bufsize 2000 maxblocks          3960.0     124630.0    314.7
File Copy 256 bufsize 500 maxblocks            1655.0      46575.9    281.4
File Copy 4096 bufsize 8000 maxblocks          5800.0     358817.0    618.6
Pipe Throughput                               12440.0     281291.2    226.1
Pipe-based Context Switching                   4000.0      36243.2     90.6
Process Creation                                126.0       2600.0    206.4
Shell Scripts (1 concurrent)                     42.4       1680.6    396.4
Shell Scripts (8 concurrent)                      6.0        196.6    327.6
System Call Overhead                          15000.0     200954.3    134.0
                                                                   ========
System Benchmarks Index Score                                         270.4

======= Script description and score comparison completed! ======= 
```

### US 1C3.75G OpenStack 独享核心

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: hanabi: GNU/Linux
   OS: GNU/Linux -- 4.9.0-8-amd64 -- #1 SMP Debian 4.9.110-3+deb9u6 (2018-10-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU @ 2.30GHz (4600.0 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:32:20 up 4 min,  1 user,  load average: 0.36, 0.12, 0.04; runlevel 5
------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:32:20 - 16:00:30
1 CPU in system; running 1 parallel copy of tests
Dhrystone 2 using register variables       31768531.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3811.6 MWIPS (9.9 s, 7 samples)
Execl Throughput                               3795.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        552835.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          169407.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1249921.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                              957183.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 210082.9 lps   (10.0 s, 7 samples)
Process Creation                               9180.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   7099.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    914.6 lpm   (60.0 s, 2 samples)
System Call Overhead                         820673.9 lps   (10.0 s, 7 samples)
System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   31768531.0   2722.2
Double-Precision Whetstone                       55.0       3811.6    693.0
Execl Throughput                                 43.0       3795.6    882.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     552835.2   1396.0
File Copy 256 bufsize 500 maxblocks            1655.0     169407.3   1023.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    1249921.8   2155.0
Pipe Throughput                               12440.0     957183.8    769.4
Pipe-based Context Switching                   4000.0     210082.9    525.2
Process Creation                                126.0       9180.3    728.6
Shell Scripts (1 concurrent)                     42.4       7099.9   1674.5
Shell Scripts (8 concurrent)                      6.0        914.6   1524.3
System Call Overhead                          15000.0     820673.9    547.1
                                                                   ========
System Benchmarks Index Score                                        1064.1

======= Script description and score comparison completed! ======= 
```

## ygeIDC

### CN 1C512M KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: kf6x8xb7jrrhy6kl: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 14:16:45 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2667 v2 @ 3.30GHz (6584.1 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:19:49 up 23:54,  2 users,  load average: 0.30, 0.07, 0.02; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:19:49 - 15:48:16
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       31677604.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4393.5 MWIPS (9.3 s, 7 samples)
Execl Throughput                               4188.5 lps   (29.7 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        666196.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          179871.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1645068.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                              997648.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 205889.0 lps   (10.0 s, 7 samples)
Process Creation                              10415.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8802.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1161.1 lpm   (60.0 s, 2 samples)
System Call Overhead                         659446.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   31677604.5   2714.4
Double-Precision Whetstone                       55.0       4393.5    798.8
Execl Throughput                                 43.0       4188.5    974.1
File Copy 1024 bufsize 2000 maxblocks          3960.0     666196.2   1682.3
File Copy 256 bufsize 500 maxblocks            1655.0     179871.4   1086.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    1645068.1   2836.3
Pipe Throughput                               12440.0     997648.8    802.0
Pipe-based Context Switching                   4000.0     205889.0    514.7
Process Creation                                126.0      10415.4    826.6
Shell Scripts (1 concurrent)                     42.4       8802.9   2076.2
Shell Scripts (8 concurrent)                      6.0       1161.1   1935.1
System Call Overhead                          15000.0     659446.6    439.6
                                                                   ========
System Benchmarks Index Score                                        1170.3

======= Script description and score comparison completed! ======= 
```

## JustHost

### Russia 1C512M KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: v71660: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 14:16:45 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2695 v2 @ 2.40GHz (4788.5 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   15:20:14 up 1 day, 21:45,  2 users,  load average: 0.85, 0.75, 0.73; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 15:20:15 - 15:49:01
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       15302042.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3194.5 MWIPS (8.4 s, 7 samples)
Execl Throughput                               1460.5 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        162866.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           49518.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        448045.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                              288980.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  41281.7 lps   (10.0 s, 7 samples)
Process Creation                               2076.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   2065.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    252.9 lpm   (60.4 s, 2 samples)
System Call Overhead                         273105.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   15302042.5   1311.2
Double-Precision Whetstone                       55.0       3194.5    580.8
Execl Throughput                                 43.0       1460.5    339.6
File Copy 1024 bufsize 2000 maxblocks          3960.0     162866.9    411.3
File Copy 256 bufsize 500 maxblocks            1655.0      49518.6    299.2
File Copy 4096 bufsize 8000 maxblocks          5800.0     448045.3    772.5
Pipe Throughput                               12440.0     288980.8    232.3
Pipe-based Context Switching                   4000.0      41281.7    103.2
Process Creation                                126.0       2076.4    164.8
Shell Scripts (1 concurrent)                     42.4       2065.7    487.2
Shell Scripts (8 concurrent)                      6.0        252.9    421.5
System Call Overhead                          15000.0     273105.2    182.1
                                                                   ========
System Benchmarks Index Score                                         352.1

======= Script description and score comparison completed! ======= 
```

## CloudCone

### LAX 1C512M KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: us: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 14:16:45 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: QEMU Virtual CPU version 2.5+ (4000.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   08:15:54 up 19 days,  2:27,  2 users,  load average: 0.48, 0.15, 0.04; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 08:15:54 - 08:43:57
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       14657609.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     2230.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               1479.9 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        120307.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           32577.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        406973.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                              178987.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  41396.4 lps   (10.0 s, 7 samples)
Process Creation                               3956.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   2845.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    366.7 lpm   (60.1 s, 2 samples)
System Call Overhead                         180721.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   14657609.0   1256.0
Double-Precision Whetstone                       55.0       2230.2    405.5
Execl Throughput                                 43.0       1479.9    344.2
File Copy 1024 bufsize 2000 maxblocks          3960.0     120307.5    303.8
File Copy 256 bufsize 500 maxblocks            1655.0      32577.2    196.8
File Copy 4096 bufsize 8000 maxblocks          5800.0     406973.8    701.7
Pipe Throughput                               12440.0     178987.5    143.9
Pipe-based Context Switching                   4000.0      41396.4    103.5
Process Creation                                126.0       3956.0    314.0
Shell Scripts (1 concurrent)                     42.4       2845.4    671.1
Shell Scripts (8 concurrent)                      6.0        366.7    611.1
System Call Overhead                          15000.0     180721.7    120.5
                                                                   ========
System Benchmarks Index Score                                         330.5

======= Script description and score comparison completed! =======
```

## AWS

### Tokyo 1C1G KVM Lightsail

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: ip-172-26-30-155: GNU/Linux
   OS: GNU/Linux -- 4.4.0-1052-aws -- #61-Ubuntu SMP Mon Feb 12 23:05:58 UTC 2018
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz (4800.1 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   13:20:18 up 6 min,  2 users,  load average: 0.35, 0.10, 0.03; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Mar 26 2019 13:20:18 - 13:48:27
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       30479431.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4009.8 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4732.8 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        751316.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          196434.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2144868.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1036536.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 173682.0 lps   (10.0 s, 7 samples)
Process Creation                              12580.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8708.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1141.8 lpm   (60.0 s, 2 samples)
System Call Overhead                         922435.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   30479431.5   2611.8
Double-Precision Whetstone                       55.0       4009.8    729.0
Execl Throughput                                 43.0       4732.8   1100.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     751316.6   1897.3
File Copy 256 bufsize 500 maxblocks            1655.0     196434.0   1186.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    2144868.9   3698.0
Pipe Throughput                               12440.0    1036536.7    833.2
Pipe-based Context Switching                   4000.0     173682.0    434.2
Process Creation                                126.0      12580.5    998.5
Shell Scripts (1 concurrent)                     42.4       8708.5   2053.9
Shell Scripts (8 concurrent)                      6.0       1141.8   1902.9
System Call Overhead                          15000.0     922435.5    615.0
                                                                   ========
System Benchmarks Index Score                                        1254.2

======= Script description and score comparison completed! ======= 
```

### Tokyo 1C1G HVM EC2

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: ip-172-31-46-237.ap-northeast-1.compute.internal: GNU/Linux
   OS: GNU/Linux -- 4.11.8-1.el7.elrepo.x86_64 -- #1 SMP Thu Jun 29 10:01:10 EDT 2017
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz (4800.1 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   01:58:49 up 29 min,  4 users,  load average: 0.29, 0.32, 0.24; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Sat May 25 2019 01:58:49 - 02:26:57
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       30504388.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3906.3 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4558.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1003763.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          263272.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2931725.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1513844.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 284978.0 lps   (10.0 s, 7 samples)
Process Creation                              12762.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   6014.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    810.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        2122321.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   30504388.9   2613.9
Double-Precision Whetstone                       55.0       3906.3    710.2
Execl Throughput                                 43.0       4558.1   1060.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1003763.6   2534.8
File Copy 256 bufsize 500 maxblocks            1655.0     263272.8   1590.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    2931725.4   5054.7
Pipe Throughput                               12440.0    1513844.3   1216.9
Pipe-based Context Switching                   4000.0     284978.0    712.4
Process Creation                                126.0      12762.6   1012.9
Shell Scripts (1 concurrent)                     42.4       6014.5   1418.5
Shell Scripts (8 concurrent)                      6.0        810.8   1351.3
System Call Overhead                          15000.0    2122321.8   1414.9
                                                                   ========
System Benchmarks Index Score                                        1462.2

======= Script description and score comparison completed! ======= 
```

## 90VM

### HK HKBN 1C1G KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: example.com: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 14:16:45 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E5-2680 v2 @ 2.80GHz (5600.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   01:13:27 up 37 min,  2 users,  load average: 0.28, 0.09, 0.08; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Jun 15 2019 01:13:27 - 01:41:28
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       15917485.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     2087.7 MWIPS (10.3 s, 7 samples)
Execl Throughput                               2053.0 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        321975.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           86102.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        887337.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                              477625.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 100504.8 lps   (10.0 s, 7 samples)
Process Creation                               5189.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   3918.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    498.4 lpm   (60.1 s, 2 samples)
System Call Overhead                         316591.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   15917485.9   1364.0
Double-Precision Whetstone                       55.0       2087.7    379.6
Execl Throughput                                 43.0       2053.0    477.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     321975.0    813.1
File Copy 256 bufsize 500 maxblocks            1655.0      86102.5    520.3
File Copy 4096 bufsize 8000 maxblocks          5800.0     887337.9   1529.9
Pipe Throughput                               12440.0     477625.2    383.9
Pipe-based Context Switching                   4000.0     100504.8    251.3
Process Creation                                126.0       5189.6    411.9
Shell Scripts (1 concurrent)                     42.4       3918.4    924.1
Shell Scripts (8 concurrent)                      6.0        498.4    830.6
System Call Overhead                          15000.0     316591.2    211.1
                                                                   ========
System Benchmarks Index Score                                         563.7

======= Script description and score comparison completed! =======
```

## Oracle

### Tokyo  2C1G OpenStack

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: -20190917-1749: GNU/Linux
   OS: GNU/Linux -- 4.9.193-0409193-generic -- #201909160733 SMP Mon Sep 16 07:35:52 UTC 2019
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 7551 32-Core Processor (3992.5 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC 7551 32-Core Processor (3992.5 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   14:39:14 up 34 days,  4:01,  2 users,  load average: 0.26, 0.10, 0.02; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Mon Oct 21 2019 14:39:14 - 15:07:12
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       12674714.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     1732.5 MWIPS (9.8 s, 7 samples)
Execl Throughput                                419.2 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        329201.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           90991.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        836737.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                              568156.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  13637.9 lps   (10.0 s, 7 samples)
Process Creation                               2796.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   1890.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    413.7 lpm   (60.1 s, 2 samples)
System Call Overhead                        1111062.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   12674714.0   1086.1
Double-Precision Whetstone                       55.0       1732.5    315.0
Execl Throughput                                 43.0        419.2     97.5
File Copy 1024 bufsize 2000 maxblocks          3960.0     329201.7    831.3
File Copy 256 bufsize 500 maxblocks            1655.0      90991.0    549.8
File Copy 4096 bufsize 8000 maxblocks          5800.0     836737.4   1442.7
Pipe Throughput                               12440.0     568156.3    456.7
Pipe-based Context Switching                   4000.0      13637.9     34.1
Process Creation                                126.0       2796.9    222.0
Shell Scripts (1 concurrent)                     42.4       1890.9    446.0
Shell Scripts (8 concurrent)                      6.0        413.7    689.5
System Call Overhead                          15000.0    1111062.9    740.7
                                                                   ========
System Benchmarks Index Score                                         401.1

------------------------------------------------------------------------
Benchmark Run: Mon Oct 21 2019 15:07:12 - 15:35:26
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       13790315.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     2066.3 MWIPS (9.4 s, 7 samples)
Execl Throughput                               1909.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        327003.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks           91331.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        835846.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                              607675.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  97341.4 lps   (10.0 s, 7 samples)
Process Creation                               5907.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   3501.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    458.2 lpm   (60.2 s, 2 samples)
System Call Overhead                        1195322.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   13790315.7   1181.7
Double-Precision Whetstone                       55.0       2066.3    375.7
Execl Throughput                                 43.0       1909.8    444.1
File Copy 1024 bufsize 2000 maxblocks          3960.0     327003.1    825.8
File Copy 256 bufsize 500 maxblocks            1655.0      91331.0    551.8
File Copy 4096 bufsize 8000 maxblocks          5800.0     835846.6   1441.1
Pipe Throughput                               12440.0     607675.2    488.5
Pipe-based Context Switching                   4000.0      97341.4    243.4
Process Creation                                126.0       5907.6    468.9
Shell Scripts (1 concurrent)                     42.4       3501.6    825.8
Shell Scripts (8 concurrent)                      6.0        458.2    763.6
System Call Overhead                          15000.0    1195322.9    796.9
                                                                   ========
System Benchmarks Index Score                                         626.1

======= Script description and score comparison completed! ======= 
```

## Scaleway

### AMS  2C2G ARM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: scw-hardcore-chaplygin: GNU/Linux
   OS: GNU/Linux -- 4.11.8-041108-generic -- #201706290836 SMP Thu Jun 29 12:38:45 UTC 2017
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 7281 16-Core Processor (4192.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 7281 16-Core Processor (4192.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   15:03:46 up 1 min,  2 users,  load average: 0.78, 0.24, 0.08; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Mon Oct 21 2019 15:03:46 - 15:31:55
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       21670943.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3788.3 MWIPS (9.9 s, 7 samples)
Execl Throughput                               3084.0 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        564674.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          163005.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1484538.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1199636.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 107092.5 lps   (10.0 s, 7 samples)
Process Creation                               5291.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5137.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1218.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        2221299.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   21670943.5   1857.0
Double-Precision Whetstone                       55.0       3788.3    688.8
Execl Throughput                                 43.0       3084.0    717.2
File Copy 1024 bufsize 2000 maxblocks          3960.0     564674.4   1425.9
File Copy 256 bufsize 500 maxblocks            1655.0     163005.2    984.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    1484538.0   2559.5
Pipe Throughput                               12440.0    1199636.9    964.3
Pipe-based Context Switching                   4000.0     107092.5    267.7
Process Creation                                126.0       5291.8    420.0
Shell Scripts (1 concurrent)                     42.4       5137.0   1211.6
Shell Scripts (8 concurrent)                      6.0       1218.4   2030.7
System Call Overhead                          15000.0    2221299.3   1480.9
                                                                   ========
System Benchmarks Index Score                                        1022.3

------------------------------------------------------------------------
Benchmark Run: Mon Oct 21 2019 15:31:55 - 16:00:07
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       42343144.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7469.9 MWIPS (9.9 s, 7 samples)
Execl Throughput                               5345.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        630274.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          174631.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1807240.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2320674.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 279230.7 lps   (10.0 s, 7 samples)
Process Creation                              11795.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8407.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1215.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        3461779.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   42343144.7   3628.4
Double-Precision Whetstone                       55.0       7469.9   1358.2
Execl Throughput                                 43.0       5345.0   1243.0
File Copy 1024 bufsize 2000 maxblocks          3960.0     630274.9   1591.6
File Copy 256 bufsize 500 maxblocks            1655.0     174631.5   1055.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    1807240.1   3115.9
Pipe Throughput                               12440.0    2320674.3   1865.5
Pipe-based Context Switching                   4000.0     279230.7    698.1
Process Creation                                126.0      11795.8    936.2
Shell Scripts (1 concurrent)                     42.4       8407.4   1982.9
Shell Scripts (8 concurrent)                      6.0       1215.7   2026.1
System Call Overhead                          15000.0    3461779.5   2307.9
                                                                   ========
System Benchmarks Index Score                                        1634.0

======= Script description and score comparison completed! ======= 
```

## Digitalocean

### Singapore 1C1G KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: debian-s-1vcpu-1gb-sgp1-wrk-s-1vcpu-1gb-sgp1-01: GNU/Linux
   OS: GNU/Linux -- 4.11.8-041108-generic -- #201706290836 SMP Thu Jun 29 12:38:45 UTC 2017
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz (4589.2 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   21:58:14 up 2 days,  6:19,  2 users,  load average: 0.02, 0.02, 0.05; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Nov 16 2019 21:58:14 - 22:26:25
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       31489322.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4142.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4660.0 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        777653.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          249147.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1727431.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1981419.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 279699.4 lps   (10.0 s, 7 samples)
Process Creation                              12268.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   7045.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    921.4 lpm   (60.1 s, 2 samples)
System Call Overhead                        3129864.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   31489322.4   2698.3
Double-Precision Whetstone                       55.0       4142.2    753.1
Execl Throughput                                 43.0       4660.0   1083.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     777653.2   1963.8
File Copy 256 bufsize 500 maxblocks            1655.0     249147.3   1505.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    1727431.0   2978.3
Pipe Throughput                               12440.0    1981419.7   1592.8
Pipe-based Context Switching                   4000.0     279699.4    699.2
Process Creation                                126.0      12268.9    973.7
Shell Scripts (1 concurrent)                     42.4       7045.7   1661.7
Shell Scripts (8 concurrent)                      6.0        921.4   1535.7
System Call Overhead                          15000.0    3129864.5   2086.6
                                                                   ========
System Benchmarks Index Score                                        1481.7

======= Script description and score comparison completed! ======= 
```

### Singapore 2C2G KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: do-bench-cpu: GNU/Linux
   OS: GNU/Linux -- 4.11.8-041108-generic -- #201706290836 SMP Thu Jun 29 12:38:45 UTC 2017
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz (4589.2 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 1: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz (4589.2 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   14:06:11 up 24 min,  2 users,  load average: 0.02, 0.23, 0.34; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:06:11 - 14:34:19
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       33815805.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4290.7 MWIPS (9.9 s, 7 samples)
Execl Throughput                               5091.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        877832.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          251823.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1891227.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2108677.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  93966.0 lps   (10.0 s, 7 samples)
Process Creation                               7906.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8105.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1733.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        3140230.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   33815805.3   2897.7
Double-Precision Whetstone                       55.0       4290.7    780.1
Execl Throughput                                 43.0       5091.7   1184.1
File Copy 1024 bufsize 2000 maxblocks          3960.0     877832.8   2216.7
File Copy 256 bufsize 500 maxblocks            1655.0     251823.6   1521.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    1891227.0   3260.7
Pipe Throughput                               12440.0    2108677.2   1695.1
Pipe-based Context Switching                   4000.0      93966.0    234.9
Process Creation                                126.0       7906.6    627.5
Shell Scripts (1 concurrent)                     42.4       8105.9   1911.8
Shell Scripts (8 concurrent)                      6.0       1733.8   2889.7
System Call Overhead                          15000.0    3140230.2   2093.5
                                                                   ========
System Benchmarks Index Score                                        1448.2

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:34:19 - 15:02:31
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       64916238.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8421.9 MWIPS (9.9 s, 7 samples)
Execl Throughput                               7858.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        940927.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          262759.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2539905.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4081221.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 429132.3 lps   (10.0 s, 7 samples)
Process Creation                              14700.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  13196.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1945.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        3920085.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   64916238.0   5562.7
Double-Precision Whetstone                       55.0       8421.9   1531.3
Execl Throughput                                 43.0       7858.0   1827.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     940927.4   2376.1
File Copy 256 bufsize 500 maxblocks            1655.0     262759.8   1587.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    2539905.1   4379.1
Pipe Throughput                               12440.0    4081221.8   3280.7
Pipe-based Context Switching                   4000.0     429132.3   1072.8
Process Creation                                126.0      14700.6   1166.7
Shell Scripts (1 concurrent)                     42.4      13196.8   3112.5
Shell Scripts (8 concurrent)                      6.0       1945.7   3242.8
System Call Overhead                          15000.0    3920085.0   2613.4
                                                                   ========
System Benchmarks Index Score                                        2346.4

======= Script description and score comparison completed! ======= 
```

## Vultr

### Tokyo 1C1G OpenStack

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: vultr.guest: GNU/Linux
   OS: GNU/Linux -- 4.11.8-041108-generic -- #201706290836 SMP Thu Jun 29 12:38:45 UTC 2017
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Virtual CPU 523cbcdd6ca4 (4800.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   14:07:51 up 21 min,  2 users,  load average: 0.08, 0.02, 0.01; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:07:51 - 14:35:58
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       24871702.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4286.3 MWIPS (9.9 s, 7 samples)
Execl Throughput                               5038.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        961654.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          268032.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1652532.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1861390.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 261937.9 lps   (10.0 s, 7 samples)
Process Creation                               9912.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   7223.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    927.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        2716919.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   24871702.7   2131.3
Double-Precision Whetstone                       55.0       4286.3    779.3
Execl Throughput                                 43.0       5038.6   1171.8
File Copy 1024 bufsize 2000 maxblocks          3960.0     961654.1   2428.4
File Copy 256 bufsize 500 maxblocks            1655.0     268032.1   1619.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    1652532.2   2849.2
Pipe Throughput                               12440.0    1861390.2   1496.3
Pipe-based Context Switching                   4000.0     261937.9    654.8
Process Creation                                126.0       9912.4    786.7
Shell Scripts (1 concurrent)                     42.4       7223.1   1703.6
Shell Scripts (8 concurrent)                      6.0        927.4   1545.7
System Call Overhead                          15000.0    2716919.9   1811.3
                                                                   ========
System Benchmarks Index Score                                        1441.0

======= Script description and score comparison completed! ======= 
```

### Tokyo 1C1G Openstack HighFrequency

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: vultr.guest: GNU/Linux
   OS: GNU/Linux -- 4.11.8-041108-generic -- #201706290836 SMP Thu Jun 29 12:38:45 UTC 2017
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Virtual CPU 6db7dc0e7704 (7584.0 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   14:13:43 up 1 min,  2 users,  load average: 0.00, 0.00, 0.00; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:13:43 - 14:42:19
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       41976774.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4025.1 MWIPS (13.2 s, 7 samples)
Execl Throughput                               7644.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1422291.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          394984.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3528826.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3069080.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 417019.6 lps   (10.0 s, 7 samples)
Process Creation                              16388.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  11880.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1523.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        4267899.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   41976774.4   3597.0
Double-Precision Whetstone                       55.0       4025.1    731.8
Execl Throughput                                 43.0       7644.9   1777.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1422291.1   3591.6
File Copy 256 bufsize 500 maxblocks            1655.0     394984.1   2386.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    3528826.8   6084.2
Pipe Throughput                               12440.0    3069080.3   2467.1
Pipe-based Context Switching                   4000.0     417019.6   1042.5
Process Creation                                126.0      16388.1   1300.6
Shell Scripts (1 concurrent)                     42.4      11880.5   2802.0
Shell Scripts (8 concurrent)                      6.0       1523.8   2539.7
System Call Overhead                          15000.0    4267899.6   2845.3
                                                                   ========
System Benchmarks Index Score                                        2246.6

======= Script description and score comparison completed! ======= 
```

### Tokyo 2C4G OpenStack

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: twocore: GNU/Linux
   OS: GNU/Linux -- 4.9.0-11-amd64 -- #1 SMP Debian 4.9.189-3+deb9u1 (2019-09-20)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Virtual CPU 82d9ed4018dd (5187.8 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: Virtual CPU 82d9ed4018dd (5187.8 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   14:17:24 up 3 min,  2 users,  load average: 0.43, 0.18, 0.07; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:17:24 - 14:45:29
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       31393646.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     4310.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                               2758.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        456468.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          127905.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1254531.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                              755581.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  52506.6 lps   (10.0 s, 7 samples)
Process Creation                               6737.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   7752.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1631.7 lpm   (60.0 s, 2 samples)
System Call Overhead                         445622.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   31393646.6   2690.1
Double-Precision Whetstone                       55.0       4310.9    783.8
Execl Throughput                                 43.0       2758.9    641.6
File Copy 1024 bufsize 2000 maxblocks          3960.0     456468.9   1152.7
File Copy 256 bufsize 500 maxblocks            1655.0     127905.0    772.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    1254531.9   2163.0
Pipe Throughput                               12440.0     755581.2    607.4
Pipe-based Context Switching                   4000.0      52506.6    131.3
Process Creation                                126.0       6737.0    534.7
Shell Scripts (1 concurrent)                     42.4       7752.2   1828.4
Shell Scripts (8 concurrent)                      6.0       1631.7   2719.5
System Call Overhead                          15000.0     445622.4    297.1
                                                                   ========
System Benchmarks Index Score                                         860.2

------------------------------------------------------------------------
Benchmark Run: Fri Nov 29 2019 14:45:29 - 15:13:38
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       62390989.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8480.0 MWIPS (9.9 s, 7 samples)
Execl Throughput                               7237.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        718317.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          197166.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2035933.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1455155.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 229230.9 lps   (10.0 s, 7 samples)
Process Creation                              16571.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  13496.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1733.2 lpm   (60.0 s, 2 samples)
System Call Overhead                         828977.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   62390989.6   5346.3
Double-Precision Whetstone                       55.0       8480.0   1541.8
Execl Throughput                                 43.0       7237.8   1683.2
File Copy 1024 bufsize 2000 maxblocks          3960.0     718317.2   1813.9
File Copy 256 bufsize 500 maxblocks            1655.0     197166.8   1191.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    2035933.2   3510.2
Pipe Throughput                               12440.0    1455155.4   1169.7
Pipe-based Context Switching                   4000.0     229230.9    573.1
Process Creation                                126.0      16571.7   1315.2
Shell Scripts (1 concurrent)                     42.4      13496.2   3183.1
Shell Scripts (8 concurrent)                      6.0       1733.2   2888.7
System Call Overhead                          15000.0     828977.1    552.7
                                                                   ========
System Benchmarks Index Score                                        1670.3

======= Script description and score comparison completed! ======= 
```

## BuyVM

### LasVegas 1C512M OpenStack

```shell
========================================================================
   
   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com
   
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: img: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 08:14:30 UTC 2019
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Xeon(R) CPU E3-1270 v3 @ 3.50GHz (6999.9 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   22:46:46 up 8 days, 19:16,  2 users,  load average: 0.25, 0.57, 0.77; runlevel 3

------------------------------------------------------------------------
Benchmark Run: Sat Nov 16 2019 22:46:46 - 23:15:18
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       36790501.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3997.1 MWIPS (12.3 s, 7 samples)
Execl Throughput                               4391.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        689541.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          202982.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1723227.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1112471.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 239849.8 lps   (10.0 s, 7 samples)
Process Creation                              10517.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5394.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    701.1 lpm   (60.1 s, 2 samples)
System Call Overhead                         912917.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   36790501.6   3152.6
Double-Precision Whetstone                       55.0       3997.1    726.7
Execl Throughput                                 43.0       4391.2   1021.2
File Copy 1024 bufsize 2000 maxblocks          3960.0     689541.8   1741.3
File Copy 256 bufsize 500 maxblocks            1655.0     202982.7   1226.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    1723227.6   2971.1
Pipe Throughput                               12440.0    1112471.4    894.3
Pipe-based Context Switching                   4000.0     239849.8    599.6
Process Creation                                126.0      10517.0    834.7
Shell Scripts (1 concurrent)                     42.4       5394.8   1272.4
Shell Scripts (8 concurrent)                      6.0        701.1   1168.4
System Call Overhead                          15000.0     912917.2    608.6
                                                                   ========
System Benchmarks Index Score                                        1161.2

======= Script description and score comparison completed! =======
```

## 9s9s

### LAX 1C256M KVM

```shell
========================================================================

   Version 5.1.3                      Based on the Byte Magazine Unix Benchmark

   Multi-CPU version                  Version 5 revisions by Ian Smith,
                                      Sunnyvale, CA, USA
   January 13, 2011                   johantheghost at yahoo period com

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: vm331343.t667.com: GNU/Linux
   OS: GNU/Linux -- 4.14.91-bbrplus -- #1 SMP Thu Jan 3 14:16:45 UTC 2019
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="ANSI_X3.4-1968", collate="ANSI_X3.4-1968")
   CPU 0: Intel(R) Xeon(R) CPU E5-2620 v3 @ 2.40GHz (4794.4 bogomips)
          x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   22:47:18 up 55 days, 23:28,  2 users,  load average: 0.62, 0.28, 0.38; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Nov 16 2019 22:47:18 - 23:15:37
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       24918882.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     3287.7 MWIPS (9.7 s, 7 samples)
Execl Throughput                               2999.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        568645.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          155690.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1278102.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                              880830.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 187521.7 lps   (10.0 s, 7 samples)
Process Creation                               7061.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5865.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    751.3 lpm   (60.0 s, 2 samples)
System Call Overhead                         741817.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   24918882.1   2135.3
Double-Precision Whetstone                       55.0       3287.7    597.8
Execl Throughput                                 43.0       2999.3    697.5
File Copy 1024 bufsize 2000 maxblocks          3960.0     568645.0   1436.0
File Copy 256 bufsize 500 maxblocks            1655.0     155690.5    940.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    1278102.5   2203.6
Pipe Throughput                               12440.0     880830.3    708.1
Pipe-based Context Switching                   4000.0     187521.7    468.8
Process Creation                                126.0       7061.4    560.4
Shell Scripts (1 concurrent)                     42.4       5865.1   1383.3
Shell Scripts (8 concurrent)                      6.0        751.3   1252.1
System Call Overhead                          15000.0     741817.6    494.5
                                                                   ========
System Benchmarks Index Score                                         930.7

======= Script description and score comparison completed! =======
```