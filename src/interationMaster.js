// *
//  * Reto #24
//  * ITERATION MASTER
//  * Fecha publicación enunciado: 13/06/22
//  * Fecha publicación resolución: 20/06/22
//  * Dificultad: FÁCIL
//  *
//  * Enunciado: la funcion interationMaster recibe un numero entero como argumento,
//  * la funcion debe devolver un array con los numeros del 1 al numero recibido como argumento.
//  * ejemplos:
//  * interationMaster(5) => [1, 2, 3, 4, 5]

const interationMaster = (integer) => {
  // Escribe tu código aquí
  const arregloFinal = []
  for (let i = 1; i <= integer; i++) {
    arregloFinal.push(i)
  }
  return arregloFinal
}

export default interationMaster
