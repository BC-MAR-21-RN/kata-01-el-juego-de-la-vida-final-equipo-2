import { Celula } from './celula.js'
import { Tablero } from './tablero.js'


export class GestorDeJuego {
    constructor(filas, columnas) {
        this.tablero = new Tablero(filas, columnas)
    }
    contarVecinos(x, y) {
        let contadorCelulasVivas = 0

        //1
        contadorCelulasVivas += this.tryCatcher(x - 1, y - 1)
            //2
        contadorCelulasVivas += this.tryCatcher(x - 1, y)
            //3
        contadorCelulasVivas += this.tryCatcher(x - 1, y + 1)
            //4
        contadorCelulasVivas += this.tryCatcher(x, y - 1)
            //5
        contadorCelulasVivas += this.tryCatcher(x, y + 1)
            //6
        contadorCelulasVivas += this.tryCatcher(x + 1, y - 1)
            //7
        contadorCelulasVivas += this.tryCatcher(x + 1, y)
            //8
        contadorCelulasVivas += this.tryCatcher(x + 1, y + 1)

        return contadorCelulasVivas
    }

    tryCatcher(x, y) {
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
            this.tablero.matrizSiguiente[x][y] = new Celula().establecerMuerto()
        } else if ((this.tablero.matriz[x][y] == new Celula().establecerVivo()) && (celulasVivas == 2 || celulasVivas == 3)) {
            this.tablero.matrizSiguiente[x][y] = new Celula().establecerVivo() //pendiente
        } else
        if ((this.tablero.matriz[x][y] == new Celula().establecerMuerto()) && celulasVivas == 3) {
            this.tablero.matrizSiguiente[x][y] = new Celula().establecerVivo()
        }
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