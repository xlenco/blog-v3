---
title: Git Commit 规范
description: 本文介绍了 Git 提交信息的规范，并提供了一些常见的提交类型和格式。
date: 2025-07-14 09:28:23
updated: 2025-07-14 09:28:23
image: https://xlenco-img.s3.bitiful.net/i/2025/07/8f775a40821f053d3057f7a3e38efd25.avif
categories: [经验分享]
tags: [Git]
---

在日常的开发中合理的提交（commit）信息对于团队合作和代码维护来说都是至关重要的。Git，作为目前最流行的分布式版本控制系统，其提交信息的规范化可以帮助团队成员更好地了解代码历史，加快代码审查过程，以及自动化生成变更日志。本文将介绍一些常见的 Git 提交信息规范。

## Git 提交信息规范的重要性

- 可读性：清晰的提交信息能够快速告诉开发者本次变更的目的，避免需要阅读大量代码来理解提交。
- 协作：团队中的每个成员都能快速了解变更背景和细节，提升沟通效率。
- 自动化支持：工具如 generate-changelog、semantic-release、commitlint 等依赖于规范化的提交信息来自动化生成变更日志、版本发布、错误修复跟踪等。
- 代码审查与回溯：良好的提交信息可以帮助开发者在回溯历史时迅速找到相关改动，而无需重复审查整个代码库。

## 常用的提交类型

以下是一些常用的提交类型以及它们的含义：

- **feat**: 新功能（feature）
- **fix**: 修补bug
- **docs**: 文档（documentation）
- **style**: 格式（不影响代码运行的变动）
- **refactor**: 重构（即不是新增功能，也不是修改bug的代码变动）
- **test**: 增加测试
- **chore**: 杂项（构建过程或辅助工具的变动）
- **revert**: 回退之前的提交。

- **perf**: 性能优化。

## Git Commit 规范的常见格式

一个规范化的 Git 提交信息通常包括以下几个部分：

1. **类型（Type）**: 这次提交的类型，比如是修复一个 fix(Bug)，还是添加一个新功能feat()。
2. **范围（Scope）**: （可选）改动影响的范围，比如一个组件或者一个功能模块。
3. **主题（Subject）**: 提交的简短描述，不超过50个字符。
4. **正文（Body）**: （可选）更详细的描述，可以分成多行。
5. **页脚（Footer）**: （可选）相关联的 issue 或者 breaking changes 的描述。

例如：

```text
feat(search): add algolia

- Add algolia's docsearch functionality

```

