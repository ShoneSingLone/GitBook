package classdata

import interfacedata.Clickable
import interfacedata.Expr
import interfacedata.Focusable

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
    RED(255, 0, 0), ORANGE(255, 165, 0), YELLOW(255, 255, 0), GREEN(0, 255, 0), BLUE(0, 0, 255), INDIGO(75,
                                                                                                        0,
                                                                                                        130),
    VIOLET(238, 130, 238);

    fun rgb() = (r * 256 + g) * 256 + b
}

/*#  impl Expr*/
class Num(val value: Int) : Expr

class Sum(val left: Expr, val right: Expr) : Expr

/*# 不可重写的扩展函数*/
open class View {
    open fun click() = println("View clicked!")
}

/*这里是继承！！？*/


class Button : View() {
    /*这里是override了View里的click()*/
    override fun click() = println("Button clicked")
}

/*扩展函数并不是类的一部分*/
/*所以，Java就不要调用Kotlin了，反正都要新写*/


class User(val id: Int, val name: String, val address: String)

fun saveUser(user: User) {
    user.validateBeforeSave();
}

/*User 就是User 个人信息就应该是个人信息，
 像validateBeforeSave这种方法跟这个用户是没有关系的，
 （有点JavaScript原型继承的意思？）
 每个实例都可以调用validateBeforeSave但是跟具体的实例又没有必然关系
 这样的代码逻辑更清晰
*/

fun User.validateBeforeSave() {
    fun validate(value: String, fieldName: String) {
        if (value.isEmpty()) {
            throw IllegalArgumentException("Can't save user ${id}: " + "enpty $fieldName")
        }
    }
    /**/
    validate(name, "Name")
    validate(address, "Address")
}


/*Class Interface*/

class ButtonI : Clickable, Focusable {
    override fun setFocus(b: Boolean) {
        super.setFocus(b)
        println("Override setFocus")
    }

    override fun showOff() {
        super<Clickable>.showOff()
        super<Focusable>.showOff()
    }

    override fun click() = println("ButtonI clicked")
}

open class ButtonII : Clickable {
    override fun showOff() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


    fun disable() {}
    open fun animate() {}
    override fun click() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}

open class RichButton : Clickable {
    override fun click() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}

abstract class Animate {
    /*必须被实现*/
    abstract fun animate()

    /*可以被override*/
    open fun stopAnimating() = Unit

    /*有实现，但是没有 open ,无法被override*/
    fun animateTwice() = Unit
}

class OuterClass {
    inner class InnerClass {
        fun getOuterReference(): OuterClass = this@OuterClass
    }
}


/*密封类*/
sealed class ExprSealed {
    class Num(val value: Int) : ExprSealed()
    class Sum(val left: ExprSealed, val right: ExprSealed) : ExprSealed()
}


class Book(val title: String, val authors: ArrayList<String>)

