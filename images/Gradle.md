
int [] array2 = [];

# map

有点类似JavaScript 中对象的意思

支持不同类型的元素作为value

def a = [red:'ff0000']
HashMap a


a.getClass();=>不能直接使用Class获取类型

def students  [
    1:[name:'abbo,score:100]
]

students.each{
    def student->print "${student.key} ${student.value}"
}
students.each{
    key,value->print "${student.key} ${student.value}"
}
students.eachWithIndex{
    def student, int index->print "${index} ${student.key} ${student.value}"
}
students.each{
    key,value->print "${key} ${value}"
}
students.eachWithIndex{
    key,value,index->print "${index} ${key} ${value}"
}


findAll
count
立案时调用
collect=》map

toListString()

groupBy

# 范围

跟 kotlin 有点像

switch case score 分级


# 面向对象


1. groovy 中默认都是public

class 继承自 Object

class Person {
    String name
    Integer age
    def increaseAge(Integer years){
        this.name += years
    }
}

使用命名参数

<!-- 接口中只能是public 的方法 -->
interface Action{
    void get()
}


trait 有默认的空实现

trait DefualtAction{
    abstract void eat()
    void play(){
        print 'play'
    }
}


# 元编程

运行时机制

运行时执行的代码

methodMissing
invokeMethod

## meteClass
为Class 在运行时期动态添加属性
添加静态方法

还不如Kotlin的扩展函数好使

## json 操作

Gson
JsonSlurper

## xml 文件CRUD

- DOM
- SAX

xmlSluper

---
解析一个xml格式数据

深度遍历
广度遍历

生成xml格式数据

MarkupBuilder

## 文件操作

InputStream OutputStream

Reader

File
getText
readLines
withReader{
    reader->
    char[] buffer = new char[100]
    reader.read(buffer)
    return buffer
}

## groovy 与 Java 的区别

写法有脚本语言的风格=》灵活
功能上 Java 有的 Groovy 都有 Groovy 方言
作用 脚本分厂灵活 写应用也是可以但是没有人挖坑填坑，自己填坑的要求比较高

# Gradle

- 基本概念
  - 用来构建
  - 编程框架，以编程的方式制定流程实现需求
    - groovy 核心语法
    - build script block
    - gradle api
- 优势
  - 灵活性：修改构建过程
  - 粒度性 task
  - 
- 执行流程（生命周期）

gradle tasks

loading
configuring
build
restart
**install**
clean

看起来又有点像 Gulp

initlallzation
configuration
execution

<!-- 配置阶段开始前的监听回调 -->
this.beforeEvaluate{}
<!-- 配置阶段完成以后 -->
this.afterEvaluate{}
<!-- gradle执行完毕以后 -->
this.gradle.buildFinished{}
this.gradle.beforeProject{}
this.gradle.afterProject{}
this.gradle.addListener{}

# Project

<!-- 以同一个工程为根目录进行操作 -->

ext 扩展属性
this
this.rootProject
apply from:this.file('common.gradle')

gradle.properties

<!-- 文件获取 -->
getRootDir().absolutePath
getBuildDir().absolutePath
getProjectDir().absolutePath

<!-- 文件定位 -->
file()

<!-- 文件复制 -->
copy{
    from file(<!--  -->)
    into getRootProject().getBuildDir()
    exclude{}
    rename{}
}

<!-- 文件树遍历 -->
fileTree(<!--  -->){
    FileTree fileTree->
    fileTree.visit{
        FileTreeEelement element->
        println 'the file name is:' + element.file.name
        copy{

        }
    }
}

## API

### 依赖相关API

buildscript{
    ScriptHandler scriptHandler ->
     scriptHandler.repositories{RepositoryHandler repositoryHandler->
     repositoryHandler.jcenter()
     repositoryHandler.maven()
     repositoryHandler.jcenter()
     repositoryHandler.jcenter()
     }
     scriptHandler.dependencies{}
}

compile ：
provided : 只参与编译不打爆到最终apk中 TinkerAndroid

### 外部 API 调用

task(name:'apkcopy'){
    doLast{
        def sourcePaht = this.buildDir.path+"/outputs/apk"
        def desationPath = "desationPath"
        def command = "mv -f ${sourcePath} ${desationPath}"
    exec{
        try{
            executable 'bash'
            args '-c', command
            println 'the command is execute success.'
        }catch(GradleException e){
            
        }
    }
    }
}

# Task

## 定义与配置

task first {
    print ''
}

<!-- TaskContainer -->
this.tasks.create(name:"second"){
    print ''
}

## 执行顺序

- 初始化
- 配置
- 执行

dependsOn this.tasks.findAll{task->return task.name.startsWith('lib)}
doFirst
doLast <<

## 依赖
## 类型
## 生命周期

