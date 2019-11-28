import classdata.Person
import other.printPine

fun findTheOldest(people: List<Person>) {
    var maxAge = 0
    var theOldest: Person? = null
    for (person in people) {
        /*TODO 这里的!!是什么意思？*/
        if (person.age!! > maxAge) {
            maxAge = person.age!!
            theOldest = person
        }
    }
    println(theOldest)
}

val sum = { x: Int, y: Int -> x + y }

fun main() {
    val people = listOf(Person("Alic", 23), Person("Bob", 32, true), Person("Carol", 31))
    findTheOldest(people)
    printPine(sum(1, 1).toString())
    println(people.maxBy({ p: Person -> p.age!! }))
    /*
    * - lambda表达式是函数调用的最后一个实参，它可以放在括号的外边
    *  - 如果lambda表达式是唯一的实参，连括号都可以省略
    * - `Move lambda expression out of parentheses`
    * - `Move lambda expression into of parentheses`
    * */
    println(people.maxBy() { p: Person -> p.age!! })
    /*推导*/
    println(people.maxBy { p -> p.age!! })
    /*如果当前上下文期望的是只有一个参数的lambda且这个参数的类型可以推断出来
    * 且实参的名称没有显示地指定=》可以用 **it** */
    println(people.maxBy { it.age!! })
    println({ "lambda " + "new " + "bee " }())
    run { println("lambda " + "new " + "bee ") }

    people.forEach({ println("${it.name} ${it.age} ${it.isMarried}") })
    /*Kotlin 可以修改非 final 变量*/
    people.forEach { it.isMarried = true }
    /*更简洁*/
    people.forEach { println("${it.name} ${it.age} ${it.isMarried}") }
    val countLambda = { p: Person -> p.age!! > 30 }
    println(people.count(countLambda))
    val peopleAge = people.filter(countLambda);
    println("size: ${peopleAge.size} $peopleAge")
    println(people.filter(countLambda))
    println(people.groupBy({ it.name }))
}
