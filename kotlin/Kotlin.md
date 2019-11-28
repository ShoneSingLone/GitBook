
# Kotlin

- [Kotlin源代码网址](https://github.com/JetBrains/kotlin)
- [Kotlin官网](https://kotlinlang.org/)
- [Kotlin官方参考文档](https://kotlinlang.org/docs/reference/)
- [Kotlin标准库](https://kotlinlang.org/api/latest/jvm/stdlib/index.html)

更好的Java
- JVM
  - J2EE
  - Android 
native
2js

1. 简洁(数据类扩展方法区间)
2. 空值安全(编译时异常 运行时异常)
3. 100%兼容 Java scala
4. 函数式编程 (多范式) JDK1.8
5. 协程(thread)
6. DSL(领域特定语言)

## ？？？

- 访问修饰符？？？rwiiufk
- 属性 getter setter 支持字段filed
- [From Java to Kotlin and Back Again](https://allegro.tech/2018/05/From-Java-to-Kotlin-and-Back-Again.html)
- [兼听则明](https://cloud.tencent.com/developer/news/249347)

## 变量 常量

- var variable 变量
- val value 运行时常量 final
- const val 相当于Java public final

## 注释


## 区间

区间中的元素只能是整数或字符

- 开区
- 闭区间
- 开闭区间

---

- in
- !in

## 函数

- 顶层函数（全局函数）
- 局部函数
- 成员函数（方法）

> 函数与方法的区别=》函数式独立的，方法隶属于类或接口（有宿主，可能这个说法不准确，自己体会）。

---
无返回数据与Unit类型

- **Nothing**声明的函数永远不会正常的返回，只会抛出异常。
  - 有些框架，例如Junit单元测试框架，在测试失败时会调用Nothing返回类型的函数，通过它抛出异常使当前测试用例失败。 　
- Unit与**Nothing**区别？
  - Unit表示数据没有实际意义，它可以声明函数返回类 型，也可以声明变量类型，声明函数时函数可以正常返回，只是返回数据没有实际意 义。
  - **Nothing**只能声明函数返回类型不能声明变量，说明函数永远不会正常返回，


```java
import java.io.IOException

fun main(args: Array<String>) {
    val date = readDate()
}
fun readDate(): Nothing {
    throw IOException()
}
```
### 参数

- 命名参数
- 默认参数
- 可变参数 **vararg** 顺序很重要，可变参数不是最后一个参数时，后面的参数需要采用命名参数形式传递；
  - \* 是展开运算符（ES next扩展运算符）

```java
fun sum(vararg numbers: Double, multiple: Int = 1): Double {
    var total = 0.0
    for (number in numbers) {
        total += number
    }
    return total * multiple
}

val doubleAry = doubleArrayOf(50.0, 60.0, 0.0)
/* 把数组展开 */
println(sum(30.0, 80.0, *doubleAry)) //输出220.0
```

- 表达式函数体 `fun rectangleArea(width: Double, height: Double) = width * height` (类似胖箭头函数只有一句可以省略花括号，这里因类型腿短可以省略返回类型)

### 局部函数

关键是作用域，常规操作

### 匿名函数

策略模式可以跟JavaScript一样简单（函数作为一等公民可以作为返回值）

```java
fun calculate(n1: Int, n2: Int, opr: Char): Int {
    val multiple = 2
    val resultFun = if (opr == '+')
    //声明相加匿名函数
    fun(a: Int, b: Int): Int { ①
        return (a + b) * multiple
    }
    else
    //声明相减匿名函数
    fun(a: Int, b: Int): Int = (a - b) * multiple ②
    return resultFun(n1, n2)
    }
fun main(args: Array<String>) {
    println(calculate(10, 5, '+')) //输出结果是30
}
```

### 扩展

- 中缀表示法：一个参数时，更简洁的表达方式
mapOf( 1 to "one")如同 1.to("one")一个参数的函数一起使用

`infix` 修饰符
`infix fun Any.to(other: Any) = Pair(this, other)`


## 面向对象

自顶向下任务分解逐步求精

对状态改变的封装：对象=》属性、方法=》方法改变属性=》对外，实例

## 类、对象和接口

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

## Lambda

{参数->函数体}始终在大括号里

`run`

- lambda表达式是函数调用的最后一个实参，它可以放在括号的外边
  - 如果lambda表达式是唯一的实参，连括号都可以省略

- `Move lambda expression out of parentheses`
- `Move lambda expression into of parentheses`

### 成员引用

把函数转换成一个值 `::`

### 集合的 API

- map
- filter
- all
- any
- count
- find
- groupBy
- flatMap:需要映射返回别的值
- [flatten](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/flatten.html)：只是平铺

#### 惰性集合操作

>及早创建中间集合，每一步的中间结果都被存储在一个临时列表

`Sequence`

Java8 并行执行流操作 =》流

### SAM 但抽象方法

？？？？？？？？？？

### with 与 apply ：带接受者的lambda

with 是两个参数
this 引用访问接收者
命名冲突解决方式 `this@otherClass.同名的函数`

apply的区别是只返回接收者对象自己

## Kotlin 的类型系统

- 可空类型
- 只读集合的支持

### 可空类型

- 类型 内存空间固定 行为可控、可靠
- 所以 虽声明为 String 而实际为 null 就无法按照 String 的行为做事，废材是也
- Kotlin 彻底解决问题的思路就是 永远不要在代码中使用 null 值
  - ?. 安全调用运算符
  - ?: Elvis
  - as? 安全转换运算符
  - !! 非空断言（咆哮）
- 延迟初始化的属性

this 可能是 null 

### 基本数据类型：Int Boolean and other


