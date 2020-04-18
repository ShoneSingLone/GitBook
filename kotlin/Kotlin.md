

# Kotlin

- KOTLIN_HOME 环境变量
- [releases](https://github.com/JetBrains/kotlin/releases)
- [Kotlin源代码网址](https://github.com/JetBrains/kotlin)
- [Kotlin官网](https://kotlinlang.org/)
- [Kotlin官方参考文档](https://kotlinlang.org/docs/reference/)
- [Kotlin标准库](https://kotlinlang.org/api/latest/jvm/stdlib/index.html)
- [操作符和其他符号](https://kotlinlang.org/docs/reference/keyword-reference.html#operators-and-special-symbols)

更珍爱生命的Java

- JVM
  - J2EE
  - Android 
- native
- 2js

1. 简洁(数据类扩展方法区间)
2. 空值安全(编译时异常 运行时异常)
3. 100%兼容 Java scala
4. 函数式编程 (多范式) JDK1.8
5. 协程(thread)
6. DSL(领域特定语言)

## ？？？

- 访问修饰符？？？通篇问号
- 属性 getter setter 支持字段filed
- [From Java to Kotlin and Back Again](https://allegro.tech/2018/05/From-Java-to-Kotlin-and-Back-Again.html)
- [兼听则明](https://cloud.tencent.com/developer/news/249347)

## 变量 常量

- var variable 变量
- val value 运行时常量 final
- const val 相当于Java public final[区别](https://www.jianshu.com/p/01aac645d003)

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


## 面向对象

自顶向下任务分解逐步求精

对状态改变的封装：对象=》属性（数据）、方法（操作）=》方法改变属性=》对外，实例

对业务逻辑对封装

- 封装：隐藏内部细节,降低心智负担
- 继承：复用
- 多态：低耦合

## 类、对象和接口

- constructor
- init code block
- method
- property
- inner class
- 嵌套类
- 对象表达声明式

### 属性

- [backing field](https://kotlinlang.org/docs/reference/properties.html#backing-fields)
- [what is backing field？](https://medium.com/@nomanr/backing-field-in-kotlin-explained-9f903f27946c)
- [lateinit 延迟初始化属性](https://kotlinlang.org/docs/reference/properties.html#late-initialized-properties-and-variables) 后初始化
- [Delegated Properties 委托属性](https://kotlinlang.org/docs/reference/properties.html#delegated-properties)
- [惰性加载属性](https://kotlinlang.org/docs/reference/delegated-properties.html#standard-delegates)
用的时候才加载，而且是同一个结果 -> val
- [可观察属性](https://kotlinlang.org/docs/reference/delegated-properties.html#observable)
  - proxy?
  
  - reactive?
  - [definedProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)?
  - [computed](https://cn.vuejs.org/v2/guide/computed.html)?

### 扩展

- 扩展函数（类方法）
- 扩展属性（类属性）
- **成员优先**
- **参数列表顺序**

---

- 中缀表示法：一个参数时，更简洁的表达方式
mapOf( 1 to "one")如同 1.to("one")一个参数的函数一起使用

只能是扩展函数在或者是类方法，不能是顶层函数

`infix` 修饰符
`infix fun Any.to(other: Any) = Pair(this, other)`

### 构造函数

- [constructors](https://kotlinlang.org/docs/reference/classes.html#constructors)
- `init{}` 代码块
- 类体中没有代码可以省略大括号

```java
/* 不可以省略val 或者 var */
class User constructor(val name: String, var password: String)
```

#### 次构造函数

```java
class Person(val name: String) {
    var children: MutableList<Person> = mutableListOf<Person>();
/* this(name)调用当前类主构造函数Person(val name:String) 类似super()的作用 */
    constructor(name: String, parent: Person) : this(name) {
        /* this表示当前对象 */
        parent.children.add(this)
    }
}
```

#### 默认构造函数

### 封装性与可见性修饰符

- [visibility-modifiers](https://kotlinlang.org/docs/reference/visibility-modifiers.html)
- [modules](https://kotlinlang.org/docs/reference/visibility-modifiers.html#modules)

| 可见性 | 修饰符    | 类成员声明   | 顶层声明     | 说明               |
|--------|-----------|--------------|--------------|--------------------|
| 公有   | public    | 所有地方可见 | 所有地方可见 | public是默认修饰符 |
| 内部   | internal  | 模块中可见   | 模块中可见   | 不同于Java中的包   |
| 保护   | protected | 子类中可见   |              | 顶层声明中不能使用 |
| 私有   | private   | 类中可见     | 文件中可见   |                    |

### [数据类型](https://kotlinlang.org/docs/reference/data-classes.html)

- [copying](https://kotlinlang.org/docs/reference/data-classes.html#copying)
- [destructuring-declarations](https://kotlinlang.org/docs/reference/data-classes.html#data-classes-and-destructuring-declarations)

### [枚举类](https://kotlinlang.org/docs/reference/enum-classes.html)

### [嵌套类 与 内部类](https://kotlinlang.org/docs/reference/nested-classes.html)

- 嵌套 类不能引用外部类，也不能引用外部类的成员，
  - 客观上是命名空间通过使用“外部类.嵌套类”使用
- 内部类是一种特殊的嵌套类，嵌套类不能访问外部类引用，不能访问外部类的成员，而内
部可以

### object 声明一个类并创建一个实例

- [单例对象、伴生对象、对象表达式](https://kotlinlang.org/docs/reference/object-declarations.html)

#### 对象表达式

- object关键字可以声明对象表达式，对象表达式用来替代Java中的匿名内部类。
- 对象声明不能嵌套在其他函数中，但可以嵌套在其他类中或其他对象声明中。

#### 伴生对象

- 通过声明伴生对象实现Java静态成员访问方式。
- 我寻思有点JavaScript原型链继承的意思，共用的往原型链上扔
- 伴生对象扩展，在内部持有一个空的声明，才能在外部使用扩展

```java
window.addMouseListener(object : MouseAdapter() {
    override fun mouseClicked(e: MouseEvent) { /*...*/ }
    override fun mouseEntered(e: MouseEvent) { /*...*/ }
})

```

## 继承与多态




## Interface

- `:` 代替 Java 中 的 `extend` `implements`
- 实现任意多个接口但是只能继承一个类

脆弱的基类问题：要么为继承做好设计记录文档，要么禁止这么做
Kotlin 默认都是 final 除非明确希望子类override 加上 open 前缀，实现时继承 open 特性；

## abstract

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
