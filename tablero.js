class Tablero {
    constructor(filas, columnas) {
        this.estado = { vivo: '*', muerto: '.' }
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
                this.matriz[fila][columna] = Math.random(Math.floor() * estado.length);

            }
        }

        return this.matriz
    }


    imprimir() {
        this.estado
        return console.table(matriz);
    }

};

module.exports = Tablero