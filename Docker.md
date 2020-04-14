# 安装

[over-view](https://docs.docker.com/engine/docker-overview/)

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

### [private repository](https://docs.docker.com/registry/deploying/)

- docker run -d -p 5000:5000 -v <本地目录>:/tmp/registry<容器内地址> registry
- docker tag hello-world:latest http://www.singlone.top:5000/hello:0.0.1

## [Data Volume](https://docs.docker.com/storage/volumes/)

- 创建数据卷 挂载
  - -v 挂载
  - docker volume create --name volumeName
  - docker volume inspect volumeName
- docker volume list
- docker volume rm 
- 数据卷容器是专门用来存放数据卷的容器
  - **已经启动的容器是无法在挂载新的外部目录进去**
    - docker create --name volumeContainerName -v volumeName:/volumemountedpath imageName
    - 创建容器web 挂载volumeName到以ubuntu镜像基础的容器volumeContainerName的/volumemountedpath
- 其他容器使用数据卷容器里的数据
  - docker run -d --name newContainerName --wolumes-from volumeContainerName imageName

### 数据卷的迁移->导入、导出

- docker run -it --volumes-from volumeContainerName -v ${pwd}:/backup --name exporter --rm ubuntu
- `docker volume create --name volumeDB`
- `docker create --name vlcData -v /vlData ubuntu`
- `docker run -it --name addsomedata --volumes-from vlcData ubuntu`
- `docker run -it --volumes-from vlcData -v ${pwd}:/vlData --name exporter --rm ubuntu` **windows=>/d/github/path**

## 网络

-P
-p
-link
docker run -d --name cMysql mysql
docker run -d -p 80:80 -p 443:443 --name dbmysql --link cMysql nginx

## Dockerfile

netstat -tunlp

## application

### mysql

docker pull mysql:latest
docker run -it --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql

docker pull mongo:latest
docker run -it --name mongo -p 27017:27017 mongo --auth
$ docker exec -it mongo mongo admin
db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'}]});
db.auth('admin', '123456')

docker ps 
docker ps -a
docker rm 
docker rmi
docker images
