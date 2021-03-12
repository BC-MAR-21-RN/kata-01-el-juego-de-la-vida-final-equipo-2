import { Celula } from './celula.js'

export class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = [];
    }

    generar() {
        for (let fila = 0; fila < this.filas; fila++) {
            this.matriz[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                this.matriz[fila][columna] = "";

            }
        }

        return this.matriz
    }

    llenar() {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                let keys = Object.keys((new Celula()).estados)
                this.matriz[fila][columna] = (new Celula()).estados[keys[keys.length * Math.random() << 0]]
                    //https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
            }
        }
        return this.matriz
    }


    imprimir() {
        console.table(this.matriz)
        return true
    }

};

let miTablero = new Tablero(3, 3)
miTablero.generar()
miTablero.llenar()
miTablero.imprimir()

//module.exports = Tablero