package other

import classdata.Color
import classdata.Color.*
import classdata.Num
import classdata.Sum
import interfacedata.Expr
import java.io.BufferedReader
import java.util.*

/*if是表达式，而不是语句：表达式有返回值
* kotlin中除了for while do while 大多数结构体都是表达式
* 表达式函数体
*
* */
fun maxF(a: Int, b: Int): Int {
    return if (a > b) a else b;
}

/*静态类型可以推导返回类型,但是最重要的是写上返回类型有助于*/
fun max(a: Int, b: Int): Int = if (a > b) a else b;

fun s(a: Int, b: Int, res: String) {
    println("${if (a > b) "not res" else res}");
}

fun getMenemonic(color: Color) = when (color) {
    Color.RED -> "Richard"
    Color.ORANGE -> "Of"
    Color.YELLOW -> "York"
    Color.GREEN -> "Gave"
    Color.BLUE -> "Battle"
    Color.INDIGO -> "In"
    Color.VIOLET -> "Vain"
}


fun getWarmth(color: Color) = when (color) {
    Color.RED, Color.ORANGE, Color.YELLOW -> "warm"
    Color.GREEN -> "neutral"
    Color.BLUE, Color.INDIGO, Color.VIOLET -> "cold"
}

fun mix(c1: Color, c2: Color) = when (setOf(c1, c2)) {
    setOf(RED, YELLOW) -> ORANGE
    setOf(YELLOW, BLUE) -> GREEN
    setOf(BLUE, VIOLET) -> INDIGO
    else -> throw Exception("Dirty color")
}

fun eval(e: Expr): Int =
    /*when 表达式的类型检查应用智能转换所以不需要额外的转换就可以访问Num和Sum成员*/
    when (e) {
        is Num -> {
            /*代码块中的租后的表达式，如果结果类型是Int就返回*/
            print(e.value)
            e.value
        }
        is Sum -> eval(e.left) + eval(e.right)
        else -> throw IllegalAccessException("Unknown expression")
    }

fun iteratorF() {
    val oneToH = 1..100
    fun fizzBuzz(i: Int) = when {
        i % 15 == 0 -> "FizzBuzz"
        i % 3 == 0 -> "Fizz"
        i % 5 == 0 -> "Buzz"
        else -> "$i"
    }
    for (i in oneToH) {
        println(fizzBuzz(i))
    }
}

fun iteratorMap() {
    val binaryReps = TreeMap<Char, String>()

    for (c in 'A'..'F') {
        val binary = Integer.toBinaryString(c.toInt())
        /*类似JavaScript的访问器*/
        binaryReps[c] = binary
    }

    for ((letter, binary) in binaryReps) {
        println("$letter = $binary")
    }

}

fun printPine(title: String = "new block") {
    println("###################### $title ######################")
}

fun isLetter(c: Char) = c in 'A'..'Z' || c in 'a'..'z'
fun isNotDigital(c: Char) = c in '0'..'9'

/*异常*/
fun readNumber(read: BufferedReader) {
    /*try可以作为表达式*/
    val number = try {
        Integer.parseInt(read.readLine())
    } catch (e: NumberFormatException) {
        "NumberFormatException"
    }
    println(number)
}

/*function call*/
fun <T> jsonToString(
    collection: Collection<T>, separator: String = ",", prefix: String = "#", postfix: String = "#"
                    ): String {
    val result = StringBuilder(prefix)
    for ((index, element) in collection.withIndex()) {
        if (index > 0) result.append((separator))
        result.append(element)
    }
    result.append(postfix)
    return result.toString()
}

/*function call*/
fun <T> Collection<T>.jsonToStringE(
    separator: String = ",", prefix: String = "#", postfix: String = "#"
                                   ): String {
    val result = StringBuilder(prefix)
    for ((index, element) in this.withIndex()) {
        if (index > 0) result.append((separator))
        result.append(element)
    }
    result.append(postfix)
    return result.toString()
}

/*可以限定集合的类型才会添加对应的方法*/
fun Collection<String>.joinE(): String = jsonToStringE("#s#")




