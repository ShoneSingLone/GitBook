1. 安装并启动 FTP 服务
安装 VSFTPD
使用 apt-get 安装 vsftpd ：
sudo apt-get install vsftpd -y
1. 启动 VSFTPD
安装完成后 VSFTPD 会自动启动，通过 netstat 命令可以看到系统已经监听了 21 端口 ：
sudo netstat -nltp | grep 21
如果没有启动，可以手动开启 VSFTPD 服务：
sudo systemctl start vsftpd.service
1. 新建用户主目录
sudo mkdir /home/uftp
执行完后，在这里 /home/uftp 
 就能看到新建的文件夹 uftp 了。
创建登录欢迎文件 
：
sudo touch /home/uftp/welcome.txt
1. 配置用户访问目录
    1. 新建用户主目录
    新建用户 uftp 并设置密码
    1. 创建一个用户 uftp ：
    sudo useradd -d /home/uftp -s /bin/bash uftp
    1. 为用户 uftp 设置密码 ：
    sudo passwd uftp
    1. 删除掉 pam.d 中 vsftpd，因为该配置文件会导致使用用户名登录 ftp 失败：
    sudo rm /etc/pam.d/vsftpd

1. 限制该用户仅能通过 FTP 访问
    1. 限制用户 uftp 只能通过 FTP 访问服务器，而不能直接登录服务器：
    sudo usermod -s /sbin/nologin uftp

修改 vsftpd 配置
sudo chmod a+w /etc/vsftpd.conf
修改 /etc/vsftpd.conf 文件中的配置（直接将如下配置添加到配置文件最下方）：
# 限制用户对主目录以外目录访问
chroot_local_user=YES

# 指定一个 userlist 存放允许访问 ftp 的用户列表
userlist_deny=NO
userlist_enable=YES

# 记录允许访问 ftp 用户列表
userlist_file=/etc/vsftpd.user_list

# 不配置可能导致莫名的530问题
seccomp_sandbox=NO

# 允许文件上传
write_enable=YES

# 使用utf8编码
utf8_filesystem=YES
新建文件 /etc/vsftpd.user_list，用于存放允许访问 ftp 的用户：
sudo touch /etc/vsftpd.user_list
sudo chmod a+w /etc/vsftpd.user_list
修改 /etc/vsftpd.user_list ，加入刚刚创建的用户：
vsftpd.user_list



1. 设置访问权限
设置主目录访问权限（只读）：
sudo chmod a-w /home/uftp
新建公共目录，并设置权限（读写）：
sudo mkdir /home/uftp/public && sudo chmod 777 -R /home/uftp/public
重启vsftpd 服务：
sudo systemctl restart vsftpd.service