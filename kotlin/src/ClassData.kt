package classdata

import interfacedata.Expr

/*
*# markdown
* ```kotlin
* class
* ```
* */
data class Person(val name: String, val age: Int? = null, var isMarried: Boolean? = false)

class Rectangle(val height: Int, val width: Int) {
    val isSquare: Boolean
        get() {
            return height == width
        }
}

class RectangleF(val height: Int, val width: Int) {
    val isSquare: Boolean
        get() = height == width
}

/*enum*/
enum class ColorEnum {
    RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET
}

enum class Color(
    val r: Int, val g: Int, val b: Int
) {
    RED(255, 0, 0), ORANGE(255, 165, 0),
    YELLOW(255, 255, 0), GREEN(0, 255, 0), BLUE(0, 0, 255),
    INDIGO(75, 0, 130), VIOLET(238, 130, 238);

    fun rgb() = (r * 256 + g) * 256 + b
}

/*#  impl Expr*/
class Num(val value: Int) : Expr

class Sum(val left: Expr, val right: Expr) : Expr







