let num1 = Number(prompt('Сложение А:'))
let num2 = Number(prompt('Сложение Б:'))
if (num1 && num2) {
    function calc(a, b) {
        return alert(`резултать прибовления: ${a + b}`)
    }

    calc(num1, num2)

    function minus(a, b) {
        return alert(`резултать вычитания: ${a - b}`)
    }

    minus(num1, num2)

    function multiply(a, b) {
        return alert(`резултать умножения: ${a * b}`)
    }

    multiply(num1, num2)


    function dividee(a, b) {
        return alert(`резултать деления: ${a / b}`)
    }

    dividee(num1, num2)

}
else {
    alert('ведите число!')
}