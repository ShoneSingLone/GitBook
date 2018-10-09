# Git

- 暂存区用来准备一个提交，但可以不用把工作目录中所有的修改内容都包含进来。 这样你可以创建一个高度聚焦的提交，尽管你本地修改很多内容。

## 传统集中式开发模式

```bash
# 初始化中央仓库
ssh user@host
git init --bare /path/to/repo.git
# Clone
git clone ssh://user@host/path/to/repo.git
git status # 查看本地仓库的修改状态
git add # 暂存文件
git commit # 提交文件
# 发布功能
git push origin master
# 拉取 如同update
git pull --rebase origin master
# --rebase选项把提交移到同步了中央仓库修改后的master分支的顶部，
# 解决冲突之后
git add <some-file>
git rebase --continue

```

## 功能分支工作流

```bash
git checkout -b marys-feature master
# 这个命令检出一个基于master名为marys-feature的分支，Git的-b选项表示如果分支还不存在则新建分支。
git push -u origin marys-feature
# 这条命令push marys-feature分支到中央仓库（origin），-u选项设置本地分支去跟踪远程对应的分支。
git checkout master
git pull
git pull origin marys-feature
git push
# 无论谁来做合并，首先要检出master分支并确认是它是最新的。然后执行git pull origin marys-feature合并marys-feature分支到和已经和远程一致的本地master分支。 你可以使用简单git merge marys-feature命令，但前面的命令可以保证总是最新的新功能分支。 最后更新的master分支要重新push回到origin。
```

## Gitflow工作流

- 用于新建发布分支的分支: develop
- 用于合并的分支: master
- 分支命名: release-* 或 release/*

```bash

```

查看文件的历史记录
git log --pretty=oneline filePath

git reflog

git remote rm origin
git remote add origin git@github.com:
git remote add origin git@***.***.***.***:serverprovider.git

## question and answer

>remote: fatal: Unable to create temporary file '/home/git/serverprovider.git/./objects/pack/tmp_pack_XXXXXX': Permission denied

简单来说就是权限不够，git是专用repository

```js
chown -R git:git serverprovider.git

```

- 使用参数 -R,改变目录 test 及其文件用户和群组

至于权限，又是另一个话题了

--- | ---
--- | ---
chown|改变文件的拥有者
chgrp|改变文件的所属群组
chmod|改变文件的可写、可读、可执行等属性
umask|改变预设的建立文件或目录时的属性

--- | --- | --- | --- | ---
--- | --- | --- | --- | ---
r|4|读权限|u|当前用户
w|2|写权限|g|组用户
x|1|执行权限|o|其他用户

>refusing to merge unrelated histories

[reference](https://blog.csdn.net/lindexi_gd/article/details/52554159)

git pull origin master --allow-unrelated-histories