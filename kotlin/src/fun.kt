import other.jsonToString
import other.printPine
import strings.UNIX_LINE_SEPARATOR
/*扩展函数的*/
import strings.lastChar
/*取别名*/
import strings.lastCharF as lastC
import strings.opCount

/* 使用IDEA 的Rename 或者 Change Signature 修改可选参数名 */
fun main(args: Array<String>) {
    /*
    * 创建集合 类型就是Java里的，
    * 所以还是要有Java基础,集合的实现都一样，
    * 没有必要自己搞一套
    */
    val list = listOf(1, 2, 3);
    val map = hashMapOf(1 to "one", 2 to "two", 3 to "three")
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
    println("Kotlin".lastC())
};







