/**
 * Calcula el área de un triángulo o un cuadrado.
 * @param {string} forma - La forma geométrica ('triangulo' o 'cuadrado').
 * @param {number} lado1 - El primer lado (base para triángulo, lado para cuadrado).
 * @param {number} [lado2] - El segundo lado (altura para triángulo, opcional para cuadrado).
 * @returns {number} El área de la forma geométrica.
 * @throws {Error} Si la forma no es reconocida o los parámetros son inválidos.
 */
function calcularArea(forma, lado1, lado2) {
    if (typeof lado1 !== 'number' || lado1 <= 0) {
        throw new Error('El primer lado debe ser un número positivo.');
    }

    switch (forma.toLowerCase()) {
        case 'triangulo':
            if (typeof lado2 !== 'number' || lado2 <= 0) {
                throw new Error('Para un triángulo, se necesitan dos lados positivos.');
            }
            return (lado1 * lado2) / 2;
        case 'cuadrado':
            return lado1 * lado1;
        default:
            throw new Error('Forma no reconocida. Use "triangulo" o "cuadrado".');
    }
}

// Ejemplos de uso
try {
    console.log('Área del triángulo:', calcularArea('triangulo', 5, 3));  // Debería imprimir 7.5
    console.log('Área del cuadrado:', calcularArea('cuadrado', 4));       // Debería imprimir 16
    console.log('Área del triángulo:', calcularArea('triangulo', 2.5, 4.3));  // Debería imprimir 5.375
    console.log('Área del cuadrado:', calcularArea('cuadrado', 3.5));     // Debería imprimir 12.25

    // Casos de error
    console.log(calcularArea('circulo', 5));  // Debería lanzar un error
} catch (error) {
    console.error('Error:', error.message);
}