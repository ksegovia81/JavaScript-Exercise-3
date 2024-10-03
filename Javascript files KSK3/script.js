/**
 * Calcula el área de un triángulo.
 * @param {number} base - La base del triángulo.
 * @param {number} altura - La altura del triángulo.
 * @returns {number} El área del triángulo.
 */
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Ejemplos de uso
console.log(calcularAreaTriangulo(5, 3));  // Debería imprimir 7.5
console.log(calcularAreaTriangulo(4, 6));  // Debería imprimir 12
console.log(calcularAreaTriangulo(2.5, 4.3));  // Debería imprimir 5.375