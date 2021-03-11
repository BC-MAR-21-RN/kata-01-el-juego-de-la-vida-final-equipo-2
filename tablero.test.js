const { expect } = require("@jest/globals")
const Tablero = require('./tablero.js')


let juegoNuevo = new Tablero(3, 3)

test('creacion de matriz inicial', () => {

    expect(juegoNuevo.generar()).toBeDefined()
    expect(juegoNuevo.generar()).toHaveLength(3)

});

test('probar funcion generar', () => {
    juegoNuevo.generar()
    let ar = juegoNuevo.llenar()
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar[i].length; j++) {
            expect(ar[i][j] === '.' || ar[i][j] === '*').toBeTruthy()


        }
    }
})

// https://stackoverflow.com/questions/44654210/logical-or-for-expected-results-in-jest

// https://stackoverflow.com/questions/44654210/logical-or-for-expected-results-in-jest
// https://jestjs.io/docs/using-matchers
//https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/i