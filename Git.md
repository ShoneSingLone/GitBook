# note

查看文件的历史记录
git log --pretty=oneline filePath

git reflog

git remote rm origin
git remote add origin git@github.com:sheng/demo.git
git remote add origin git@104.168.102.215:serverprovider.git

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