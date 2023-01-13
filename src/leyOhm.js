/*
 * Reto #41
 * LA LEY DE OHM
 * Fecha publicación enunciado: 10/10/22
 * Fecha publicación resolución: 17/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".
 * RECUERDA: revisar los test para saber que valores son correctos
 *
 *
 */

const leyOhm = ({ V = 0, R = 0, I = 0 }) => {
  // Escribe tu código aquí
  if (R === 0) {
    const resistencia = V / I
    return `La resistencia es de ${resistencia.toFixed(2)}`
  } else if (V === 0) {
    const voltaje = R * I
    return `El voltaje es de ${voltaje.toFixed(2)}`
  } else if (I === 0) {
    const corriente = V / R
    return `La corriente es de ${corriente.toFixed(2)}`
  } else {
    return 'Invalid values'
  }
}

export default leyOhm
