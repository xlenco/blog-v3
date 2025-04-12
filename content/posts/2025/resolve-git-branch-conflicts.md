---
title: 解决Git分支冲突
description: 介绍一种解决Git分支冲突的方法
date: 2025-02-08 15:39:49
updated: 2025-02-08 15:39:49
image: https://xlenco-img.s3.bitiful.net/i/2025/02/f4b1f911b318f42d0dc12149b2a25f2e.webp
categories: [经验分享]
tags: [教程, Git]
---



当在 GitHub 上 fork 的项目与原项目产生冲突，需要在本地拉取原项目并进行合并时，可以按照以下步骤操作：

## 添加原项目远程仓库

首先，需要在本地仓库中添加原项目的远程仓库地址。在终端中进入你本地的项目目录，然后执行以下命令：
 

```
git remote add upstream 原项目的仓库地址
```


例如，如果原项目的 GitHub 仓库地址是  [https://github.com/original/repo.git](https://github.com/original/repo.git) ，则命令为：

 
```
git remote add upstream https://github.com/original/repo.git
```

 
你可以使用  `git remote -v`  命令来验证远程仓库是否添加成功，该命令会显示当前仓库的所有远程地址。


## 从原项目拉取最新代码


添加完原项目的远程仓库后，你可以从原项目拉取最新的代码。执行以下命令：

 

```
git fetch upstream
```
 

## 合并原项目的代码

 

现在你可以将从原项目拉取的最新代码合并到本地的目标分支。执行以下命令：

 

```
git merge upstream/main
```

 


这里假设原项目的主分支是  main ，如果原项目使用的是其他名称的主分支（如  master ），则将  main  替换为相应的分支名。

如果使用vscode解决冲突就更方便了，解决完所有冲突后，便可以一键三连推送了。
 


```
git add .
git commit -m "Merge upstream changes and resolve conflicts"
git push origin main
```
 


 


 

 

