package companiondata

fun main() {
    User.newFaceUser("307540171")
    User.newSubscribingUser("abbo@qq.com")
}

class User private constructor(val nickname: String) {
    companion object {
        fun newSubscribingUser(email: String) = User(email.substringBefore('@'))
        fun newFaceUser(id: String) = User(id)
    }
}
