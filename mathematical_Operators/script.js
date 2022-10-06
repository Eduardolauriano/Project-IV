let firstNumber = Number (prompt ("Informe o primeiro número:"))
let secondNumber = Number (prompt  ("Informe o segundo número:"))



let calSum = firstNumber + secondNumber
let calSub = firstNumber - secondNumber
let calMult = firstNumber * secondNumber
let calDiv = (firstNumber / secondNumber).toFixed(2)
let calDivRest = firstNumber % secondNumber

alert (`A soma é  ${calSum}
A subtração é ${calSub}
A multiplicação é ${calMult}
A divisão é ${calDiv}
A resto da divisão é ${calDivRest}
`)

if (calSum % 2 === 0) {
  alert ("A Soma dos dois números é par")
} else{
  alert ("A Soma dos dois números é impar")
}


if (firstNumber === secondNumber) {
  alert ("Os dois números inseridos são iguais")
} else {
  alert ("Os dois números inseridos são diferentes")
}

