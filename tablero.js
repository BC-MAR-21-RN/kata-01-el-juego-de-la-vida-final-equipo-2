class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = [];

    }

    regresarVerdadero() {
        return true
    }

    generar() {
        for (let fila = 0; fila < this.filas; fila++) {
            this.matriz[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                this.matriz[fila][columna] = "";
                //TypeError: Cannot set property '0' of undefined
            }

        }

        return this.matriz
    }

    llenar() {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                this.matriz[fila][columna] = Math.floor(Math.random() * 2);
            }
        }

        return this.matriz
    }


    imprimir() {
        return console.table(matriz);
    }

};

module.exports = Tablero