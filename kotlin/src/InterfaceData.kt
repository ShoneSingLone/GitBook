package interfacedata

import java.io.Serializable

interface Expr

interface Clickable {
    fun click()
    fun showOff() = println("showOff")
}

interface Focusable {
    fun setFocus(b: Boolean) = println("I ${if (b) "got" else "lost"} focus.")
    fun showOff() = println("I'm focusable!")
}

interface State : Serializable
interface View {
    fun getCurrentState(): State
    fun restoreState(state: State) {}
}
