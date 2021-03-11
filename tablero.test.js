const { expect } = require("@jest/globals")
const Tablero = require('./tablero.js')


let juegoNuevo = new Tablero(3, 3)

test('creacion de matriz inicial', () => {

    expect(juegoNuevo.regresarVerdadero()).toBeTruthy() //expected: true recieved:true
    expect(juegoNuevo.generar()).toBeDefined()
    expect(juegoNuevo.generar().length).toBe(3)

});

// https://jestjs.io/docs/using-matchers
//https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/i