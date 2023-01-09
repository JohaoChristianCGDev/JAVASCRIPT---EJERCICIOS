// la funcion isPalindrome recibe un numero entero (x)
// y debe retornar true si el numero es palindromo, de lo contrario debe retornar false

const isPalindrome = function (x) {
  const xComoString = Number(String(x).split('').reverse().join(''))

  if (xComoString === x) {
    return true
  } else {
    return false
  }
}

export default isPalindrome
