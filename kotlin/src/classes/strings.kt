package  strings

var opCount = 0
val UNIX_LINE_SEPARATOR = "\n"
fun performOperation() {
    opCount++
}

fun reportOperationCount() {
    println("Operation performed $opCount itmes")
}

/*只要可以编译为Java都可以扩展自己的方法*/
fun String.lastChar(): Char = this.get(this.length - 1)
/*成员函数可以直接使用this，普通函数可以省略this：你得明白这里有一个省略！！*/
fun String.lastCharF(): Char{
    /*可以就像在String的内部编写的代码，但是无法打破封装性：访问私有变量，方法*/
    println(this)
    return get(length - 1)
}
