import classdata.*
import other.*
import java.io.BufferedReader
import java.io.StringReader

fun main(args: Array<String>) {
    val persons = listOf<Person>(Person("Alice", isMarried = true), Person("Bob", age = 10));
    /*如果age为null则返回0*/
    val oldest = persons.maxBy { it.age ?: 0 };
    println("The oldest is: $oldest");
    println(maxF(1, 2));
    println(max(2, 1));
    s(1, 2, "3")
    /*自定义访问器*/
    println("isSquare: ${RectangleF(1, 1).isSquare}")
    println("isSquare: ${Rectangle(1, 2).isSquare}")
    val map = mapOf("a" to 1, "b" to 2, "c" to 3)
    var mapKey = "a"
    val mapKeyList = arrayListOf<Char>('a', 'b', 'c')
    for ((i, index) in mapKeyList.withIndex()) {
        printPine()
        println("$i $index")
    }
    println(map[mapKey])
    println(eval(Sum(Sum(Num(1), Num(2)), Num(2))))
    /* 迭代*/
    iteratorF()
    printPine()
    readNumber(BufferedReader(StringReader("not a number")))
    readNumber(BufferedReader(StringReader("100")))
    printPine("after NumberFormatException")

    runSequence()
}








