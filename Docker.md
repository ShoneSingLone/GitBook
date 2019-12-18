# 安装

## CLI

- docker images
- [docker inspect](https://docs.docker.com/engine/reference/commandline/inspect/)
- docker container run -it ubuntu bash
- docker container ls --all
- docker container rm [containerID]

openssl genrsa -out htps.key 4096
openssl req -newky rsa:4096 -nodes -keyout https.key -x509 -days 3650 -out htts.crt -subj "/C=CN/ST=zj/L=hz/O=ymd/OU=localhost"

## Image

- docker images
- docker commit -m -a <repository>
  - 基于已有容器创建镜像
- docker rmi //remove images如果没有依赖
  - 删除镜像
- docker save
  - 镜像的导出 -o hello-world >同样适用
- docker load
  - 镜像的导入 -i hello-world <同样适用

## container

- docker container ps -a
- docker create
- docker start
- docker restart
- docker stop
- docker pause
- docker unpause
- docker run 创建并启动 -it --name <name> 有name方便依赖管理
  - -it tty 伪终端 interactive 交互模式 -d 后台 (守护态运行)
- docker attach <name> 进入交互模式
- docker exec <name> ls -la

- nsenter
- docker export
  - 区别是image保存完整的信息，体积更大 容器快照可以重新指定标签等元数据信息
- docker import

- HA机制（容器代理，可用容器池）


## DockerHub（Repository）

类似GitHub存代码，DockerHub用来存image

- docker login
  - 不建议直接 明文 -u <user> -p <password><server>
- docker search
- docker pull

### private repository

- docker run -d -p 5000:5000 -v <本地目录>:/tmp/registry<容器内地址> registry
- docker tag hello-world:latest http://www.singlone.top:5000/hello:0.0.1

## Data Volume