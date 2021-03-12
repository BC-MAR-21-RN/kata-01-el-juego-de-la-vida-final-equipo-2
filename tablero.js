import { Celula } from './celula.js'

export class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = this.generar();
        this.matrizSiguiente = this.generar()
    }

    generar() {
        let matriz = []
        for (let fila = 0; fila < this.filas; fila++) {
            matriz[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                matriz[fila][columna] = (new Celula()).establecerMuerto();

            }
        }

        return matriz
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
//module.exports = Tablero