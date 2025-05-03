---
title: 解决 Notion 访问慢的方法
description: 通过修改通过修改 hosts 的方法来解决Notion 访问慢的问题
date: 2025-05-03 09:30:58
updated:  2025-05-03 09:30:58
image: https://xlenco-img.s3.bitiful.net/i/2025/05/c4360b1ef3e563f8832d743c826b17b6.webp
categories: [经验分享]
tags: [教程, notion，笔记工具]
---

关于 Notion 相比大家早有耳闻，不过我在之前苦于没有中文页面和国内访问过慢，一直没有做完主力工具使用。一段时间突然发现 Notion 有中文页面了，并且访问速度变快了。
这不就赶紧用上了，在使用它的客户端时发现速度在某些情况下还是很慢，下面介绍一下我在网上发现的解决 Notion 访问慢的一些方法。

为解决访问慢这个问题，可以通过修改 hosts 的方法，由国内网友 Jerry Wang 创建的公益项目。

**Windows**：编辑：C:\Windows\System32\drivers\etc\hosts 文件，然后加入以下的内容：

以下二选一即可

```
119.28.13.121 www.notion.so
119.28.13.121 msgstore.www.notion.so
119.28.13.121 api.pgncs.notion.so
119.28.13.121 exp.notion.so
119.28.13.121 s3.us-west-2.amazonaws.com
```

```
154.40.44.47 www.notion.so
154.40.44.47 msgstore.www.notion.so
154.40.44.47 api.pgncs.notion.so
154.40.44.47 exp.notion.so
154.40.44.47 s3.us-west-2.amazonaws.com
```

也可以使用更改dns的方法

DNS服务器

```
DOT: dns.jerryw.cn
DOH: https://dns.jerryw.cn:8443/dns-query
```



**macOS**: 下载 ihosts 软件，将下列 hosts 信息写入

```
101.32.183.34 www.notion.so
101.32.183.34 msgstore.www.notion.so
```



**安卓手机**：以小米为例，打开 "设置" 应用，点击 "连接与共享" → 第二步：点击 "私人 DNS" 菜单选项 → 在弹出的表单中选择 "私人 DNS 提供商主机名" → 输入下方的域名

`dns.jerryw.cn`

**iOS/iPadOS**（iOS 版本大于等于 14）：下载下面的描述文

https://dns.jerryw.cn:8443/apple/dot.mobileconfig?host=dns.jerryw.cn



参考：

[Notion-faster](https://www.notionfaster.org/)

[Notion 找到最快的host](https://jerryw.cn/notion-%E6%89%BE%E5%88%B0%E6%9C%80%E5%BF%AB%E7%9A%84hos)

