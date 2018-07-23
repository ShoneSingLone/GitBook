# 当我在使用VPS时

## 内存不够导致的问题

[How To Add Swap on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04)
npm i 的时候回出现莫名其妙被killed，是的，小水管资源有限。
Check the System for Swap Information

```bash
sudo swapon -s
```

current memory and swap usage in Megabytes

```bash
free -m
```

Check Available Space on the Hard Drive Partition

```bash
df -h
```

Create a Swap File

```bash
sudo dd if=/dev/zero  of=/swapfile bs=23532b count=1
```

active

```bash
mkswap /swapfile
```

mount

```bash
swapon /swapfile
```

auto mount when reboot 

```bash
echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```

查询64位的操作系统

```bash
uname -a
```

不要使用root角色（拥有最高权限）操作，最好设置相应的用户。
`adduser dba`

提升用户权限组
`gpasswd[-a user][-d user][-A user,...][-M user,...][-r][-R]groupname`

-a：添加用户到组
-d：从组删除用户
-A：指定管理员
-M：指定组成员和-A的用途差不多
-r：删除密码
-R：限制用户登入组，只有组中的成员才可以用newgrp加入该组

编辑权限
`sudo visudo`

SSH
ssh eval "$(ssh-agent -s)"

## 增强服务器安全等级

sudo vi /etc/ssh/sshd-config

port 1024~65536

服务器的要求 持续、对外

终端启动命令的生命周期

pm2进程守卫

Nginx 端口代理 负载平衡

## MongoDB

`/etc/init.d/`

```bash
$ touch mongod
$ chmod 777 mongod
```

```config
#!/bin/bash
#chkconfig: 2345 80 90
#description: mongodb
start() {
 /usr/local/mongodb/bin/mongod --config /usr/local/mongodb/mongo
d.conf
}
 
stop() {
      /usr/local/mongodb/bin/mongod --config /usr/local/mongodb/
mongod.conf --shutdown
}
case "$1" in
  start)
 start
 ;;
 
stop)
 stop
 ;;
 
restart)
 stop
 start
 ;;
  *)
 echo
$"Usage: $0 {start|stop|restart}"
 exit 1
 ```

service mongod start/stop/restart
netstat -lanp | grep "27017"

改端口 sudo vi /etc/mongod.config

本地dump 备份 打包上传 部署