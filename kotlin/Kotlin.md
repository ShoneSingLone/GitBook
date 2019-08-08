
# Kotlin

## ？？？不甚了解

- 访问修饰符？？？
- 属性 getter setter 支持字段filed
- [From Java to Kotlin and Back Again](https://allegro.tech/2018/05/From-Java-to-Kotlin-and-Back-Again.html)
- [兼听则明](https://cloud.tencent.com/developer/news/249347)

# 局部函数和扩展

# 类、对象和接口

单例对象、伴生对象、对象表达式

可见性 访问修饰符

## Interface

- `:` 代替 Java 中 的 `extend` `implements`
- 实现任意多个接口但是只能继承一个类

脆弱的基类问题：要么为继承做好设计彬记录文档，要么禁止这么做
Kotlin 默认都是 final 除非明确希望子类override 加上 open 前缀，实现时继承 open 特性；

## abstract

## 修饰符

[visibility-modifiers](https://kotlinlang.org/docs/reference/visibility-modifiers.html)

## 密封类 ：定义首先的类继承结构

sealed 所有的直接子类必须嵌套在父类中

```java
/*密封类*/
sealed class ExprSealed {
    class Num(val value: Int) : ExprSealed()
    class Sum(val left: ExprSealed, val right: ExprSealed) : ExprSealed()
}
```

类名括号的含义:类似 constructor 里面调用父类的 constructor，即 super()

## 声明一个带非默认构造方法或属性的类

- constructor
- init

---

- 主构造方法
  - 外部
  - 初始化语句块
  - 参数 参数属性

- 从构造方法 内部

## 数据类型和类委托

equals toString hashCode 都要自己搞，不如先来点默认的。
by 委托 避免样板代码

### object 声明一个类并创建一个实例

### 伴生对象

工厂方法和静态成员

伴生对象扩展，在内部持有一个空的声明，才能再外部使用扩展
