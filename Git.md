# Git

- [git入门](https://backlog.com/git-tutorial/cn/intro/intro1_1.html)
- [猴子都能动的Git入门](https://backlog.com/git-tutorial/cn/intro/intro1_1.html)

## 搭建Git服务器

安装git

```
$ sudo apt-get install git
```

创建用户
```
$ sudo adduser git
```

创建证书登录
>收集所有需要登录的用户的公钥，就是他们自己的`id_rsa.pub`文件，把所有公钥导入到`/home/git/.ssh/authorized_keys`文件里，一行一个。

初始化Git仓库
```
$ sudo git init --bare sample.git
$ sudo chown -R git:git sample.git


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

[](https://juejin.im/post/5a7802846fb9a063317c2e92)

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

# 删除 untracked files
git clean -f
 
# 连 untracked 的目录也一起删掉
git clean -fd
 
# 连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的）
git clean -xfd
 
# 在用上述 git clean 前，墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删
git clean -nxfd
git clean -nf
git clean -nfd




#恢复某个已修改的文件（撤销未提交的修改）：
git checkout file-name

例如：git checkout src/com/android/.../xxx.java

比如修改的都是java文件，不必一个个撤销，可以使用

$ git checkout *.java

撤销所有修改

$ git checkout 

## 同一项目使用多个远程仓库

```bash
git remote add github url
#同步一次需要fetch
git pull github
git rm github
git remote set-url --add github url
#全部push
git push
```

```bash
git remote -v
git pull 
```
