import { Celula } from './celula.js'
import { Tablero } from './tablero.js'


export class GestorDeJuego {
    constructor(filas, columnas) {
        this.tablero = new Tablero(filas, columnas)
    }
    contarVecinos(x, y) {
        let contadorCelulasVivas = 0

        contadorCelulasVivas += this.validarVecino(x - 1, y - 1)
            //2
        contadorCelulasVivas += this.validarVecino(x - 1, y)
            //3
        contadorCelulasVivas += this.validarVecino(x - 1, y + 1)
            //4
        contadorCelulasVivas += this.validarVecino(x, y - 1)
            //5
        contadorCelulasVivas += this.validarVecino(x, y + 1)
            //6
        contadorCelulasVivas += this.validarVecino(x + 1, y - 1)
            //7
        contadorCelulasVivas += this.validarVecino(x + 1, y)
            //8
        contadorCelulasVivas += this.validarVecino(x + 1, y + 1)

        return contadorCelulasVivas
    }

    validarVecino(x, y) {
        try {
            if (this.tablero.matriz[x][y] == (new Celula()).establecerVivo()) {
                return 1
            } else {
                return 0
            }
        } catch (error) {
            return 0
        }
    }



    aplicarReglas(celulasVivas, x, y) {
        if ((this.tablero.matriz[x][y] == new Celula().establecerVivo()) && (celulasVivas < 2 || celulasVivas > 3)) {
            this.cambiarEstadoDeCelula(new Celula().establecerMuerto(), x, y)

        } else if ((this.tablero.matriz[x][y] == new Celula().establecerVivo()) && (celulasVivas == 2 || celulasVivas == 3)) {
            this.cambiarEstadoDeCelula(new Celula().establecerVivo(), x, y)

        } else
        if ((this.tablero.matriz[x][y] == new Celula().establecerMuerto()) && celulasVivas == 3) {
            this.cambiarEstadoDeCelula(new Celula().establecerVivo(), x, y)

        }

        return this.tablero.matrizSiguiente
    }

    cambiarEstadoDeCelula(estado, x, y) {
        this.tablero.matrizSiguiente[x][y] = estado
    }

    generarNuevaGeneración() {
        for (let filas = 0; filas < this.tablero.matriz.length; filas++) {
            for (let columnas = 0; columnas < this.tablero.matriz[filas].length; columnas++) {
                this.aplicarReglas(this.contarVecinos(filas, columnas), filas, columnas)
            }
        }
        this.establecerNuevaGeneración()

        return true
    }

    establecerNuevaGeneración() {
        this.tablero.matriz = this.tablero.matrizSiguiente
        return true
    }
}