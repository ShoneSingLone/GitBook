package other

import classdata.*
import classdata.Color.*
import interfacedata.Expr

/*if是表达式，而不是语句：表达式有返回值
* kotlin中除了for while do while 大多数结构体都是表达式
* 表达式函数体
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

fun mix(c1: Color, c2: Color) =
    when (setOf(c1, c2)) {
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




