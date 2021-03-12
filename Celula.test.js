const { expect } = require("@jest/globals")
const { Tablero } = require('./tablero')
const { Celula } = require('./celula')


let celulaTest = new Celula()

test('Establecer celula a viva', () => {
    expect(celulaTest.establecerVivo()).toBe('*')
});

test('Establecer celula a muerta', () => {
    expect(celulaTest.establecerMuerto()).toBe('.')
});

test('Establecer estado de la celula', () => {
    expect(celulaTest.establecerMuerto()).toBe('.')
});


//https://github.com/facebook/jest/issues/9395#issuecomment-583799300