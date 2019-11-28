package objectdata

import classdata.Person
import other.printPine
import java.io.File

object Payroll {
    val allEmployees = arrayListOf<Person>()
    fun calculateSalary() {
        for ((index, person) in allEmployees.withIndex()) {
            println("Index $index: person $person ")
        }
    }
}

object CaseInsensitiveFileComparator : Comparator<File> {
    override fun compare(o1: File, o2: File): Int {
        return o1.path.compareTo(o2.path, ignoreCase = true)
    }
}

fun main(args: Array<String>) {
    Payroll.allEmployees.add(Person("Alick", age = 10))
    Payroll.allEmployees.add(Person("Bob", isMarried = false))
    println(Payroll.allEmployees.toString())
    Payroll.calculateSalary()

    printPine()
    val files = listOf(File("C:/"), File("D:/"))
    println("结果： ${files.sortedWith(CaseInsensitiveFileComparator)}")
}