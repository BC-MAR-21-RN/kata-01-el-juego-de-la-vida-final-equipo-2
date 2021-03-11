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
                let keys = Object.keys(this.estado)
                this.matriz[fila][columna] = this.estado[keys[keys.length * Math.random() << 0]]
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

miTablero = new Tablero(3, 3)
miTablero.generar()
miTablero.llenar()
miTablero.imprimir()


module.exports = Tablero