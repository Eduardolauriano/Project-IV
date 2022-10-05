let primaryNumber = Number (prompt ("Informe o primeiro número:"))
let secondNumber = Number (prompt  ("Informe o segundo número:"))



let calSum = primaryNumber + secondNumber
let calSub = primaryNumber - secondNumber
let calMult = primaryNumber * secondNumber
let calDiv = (primaryNumber / secondNumber).toFixed(2)
let calDivRest = primaryNumber % secondNumber

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


if (primaryNumber === secondNumber) {
  alert ("Os dois números inseridos são iguais")
} else {
  alert ("Os dois números inseridos são diferentes")
}

