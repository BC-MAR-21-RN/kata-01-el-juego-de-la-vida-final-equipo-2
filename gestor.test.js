const { expect } = require("@jest/globals")
const { Tablero } = require('./tablero')
const { Celula } = require('./celula')
const { GestorDeJuego } = require('./gestor')

let juegoNuevo = new GestorDeJuego(3, 3)
juegoNuevo.tablero.llenar()

test('Contar vecinos', () => {
    expect(juegoNuevo.contarVecinos(1, 1)).toBeGreaterThanOrEqual(0)
})


test('Validar vecino', () => {
    expect(juegoNuevo.validarVecino(1, 1)).toBeGreaterThanOrEqual(0)
    expect(juegoNuevo.validarVecino(1, 1)).toBeLessThanOrEqual(1)
})

test('Aplicar reglas', () => {
    expect(juegoNuevo.aplicarReglas(2, 1, 1)).toBeDefined()
    expect(juegoNuevo.aplicarReglas(2, 1, 1).length).toBe(3)
})

test('Generar nueva generación', () => {
    expect(juegoNuevo.generarNuevaGeneración()).toBeTruthy()
})

test('Establecer nueva genercion ', () => {
    expect(juegoNuevo.establecerNuevaGeneración()).toBeTruthy()
})