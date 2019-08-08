/*扩展函数的*/
/*取别名*/
/*collection 的*/
import classdata.ButtonI
import other.joinE
import other.jsonToString
import other.jsonToStringE
import other.printPine
import strings.UNIX_LINE_SEPARATOR
import strings.lastChar
import strings.opCount
import strings.lastCharF as lastC

/* 使用IDEA 的Rename 或者 Change Signature 修改可选参数名 */
fun main(args: Array<String>) {
    /*
    * 创建集合 类型就是Java里的，
    * 所以还是要有Java基础,集合的实现都一样，
    * 没有必要自己搞一套
    */
    val list = listOf(1, 2, 3);

    println(list.jsonToStringE())

    val stringlist = listOf("string1", "string2", "string3");
    println(stringlist.joinE())

    printPine("扩展collection方法")

    val map = hashMapOf(1 to "map one", 2 to "map two", 3 to "map three")
    println(map.javaClass)
    println(map)
    /* 让函数更好调用：3.2.1 命名参数； 3.2.3 默认参数 */
    var res = jsonToString(list, ";", "#", "#")
    println(res)
    res = jsonToString(list, separator = "#")
    println(res)
    printPine("end")

    /*消除静态工具类：顶层函数和属性,不需要通过类似Java用一个类点出来，只需要import*/
    println(opCount)
    printPine(UNIX_LINE_SEPARATOR)


    /*3.3 给别人的类添加方法：扩展函数和属性*/
    println("Kotlin".lastChar())

    /*在import时候可以取别名*/
    println("Kotlin".lastC());
    println("12.2-34-6.A".split("\\.|-".toRegex()))
    parsePath("/User/yole/kotlin-book/chapter.adoc")

    val btn = ButtonI()

    btn.click()
    btn.setFocus(true)
    btn.showOff()

    printPine()
    inc(1)
};
/*可变参数vararg 函数有不确定的参数
* Java 中的...
* Kotlin KeyWorks vararg
* # 展开运算符 *
*/


/*中缀表示法：一个参数时，更简洁的表达方式
mapOf( 1 to "one")如同 1.to("one")一个参数的函数一起使用
## infix 修饰符
*/

/*The root of the Kotlin class hierarchy. Every Kotlin class has [Any] as a superclass.*/
/*Pair 是Kotlin中的Vetor*/
infix fun Any.to(other: Any) = Pair(this, other)

/*解构 用来把单独的组合值扩展到多个变量中*/

fun parsePath(path: String) {
    val regex = """(.+)/(.+)\.(.+)$""".toRegex()
    val matchResult = regex.matchEntire(path)
    if (matchResult != null) {
        val (directory, filename, extension) = matchResult.destructured
        println("Dir: $directory, name: $filename, ext: $extension")
    }
}

/*Pimp my lib*/
/*
Name shadowing
*/
fun inc(num: Int) {
    val num = 2
    if (num > 0) {
        val num = "this is string."
        println(num)
    }
    println("num: $num")
}

/*Kotlin 的可见性修改符*/









