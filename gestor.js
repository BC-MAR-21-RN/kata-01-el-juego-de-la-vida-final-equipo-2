import { Celula } from './celula.js'
import { Tablero } from './tablero.js'


export class GestorDeJuego {
    constructor(filas, columnas) {
        this.tablero = new Tablero(filas, columnas)
    }
    contarVecinos(x, y) {
        let contadorCelulasVivas = 0
            // 1 2 3
            // 4   5
            // 6 7 8
        let i = x - 1
        let j = y - 1
        for (let fila = i; fila < x + 1; fila++) {
            for (let columna = j; columna < y + 1; columna++) {
                if (fila == x && columna == y) {
                    continue;
                }

                if (this.tablero.matriz[x][y] === undefined) {
                    if (this.tablero.matriz[x][y] == (new Celula()).establecerVivo()) {
                        contadorCelulasVivas++;
                    }

                }
                //contadorCelulasVivas += this.tryCatcher(fila, columna);
            }
        }


        // //1
        // contadorCelulasVivas += this.tryCatcher(x - 1, y - 1)
        //     //2
        // contadorCelulasVivas += this.tryCatcher(x - 1, y)
        //     //3
        // contadorCelulasVivas += this.tryCatcher(x - 1, y + 1)
        //     //4
        // contadorCelulasVivas += this.tryCatcher(x, y - 1)
        //     //5
        // contadorCelulasVivas += this.tryCatcher(x, y + 1)
        //     //6
        // contadorCelulasVivas += this.tryCatcher(x + 1, y - 1)
        //     //7
        // contadorCelulasVivas += this.tryCatcher(x + 1, y)
        //     //8
        // contadorCelulasVivas += this.tryCatcher(x + 1, y + 1)

        return contadorCelulasVivas
    }

    // tryCatcher(x, y) {
    //     try {
    //         if (this.tablero.matriz[x][y] == (new Celula()).establecerVivo()) {
    //             return 1
    //         } else {
    //             return 0
    //         }
    //     } catch (error) {
    //         return 0
    //     }
    // }

    /*
    Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    Any live cell with more than three live neighbours dies, as if by overcrowding.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any dead cell with exactly three live neighbours becomes a live cell.*/

    aplicarReglas(celulasVivas, x, y) {
        if ((this.tablero.matriz[x][y] == new Celula().establecerVivo()) && (celulasVivas < 2 || celulasVivas > 3)) {
            this.tablero.matriz[x][y] == new Celula().establecerMuerto()
        } else if ((this.tablero.matriz[x][y] == new Celula().establecerVivo()) && (celulasVivas == 2 || celulasVivas == 3)) {
            this.tablero.matriz[x][y] == new Celula().establecerVivo()
        } else if ((this.tablero.matriz[x][y] == new Celula().establecerMuerto()) && celulasVivas == 3) {
            this.tablero.matriz[x][y] == new Celula().establecerVivo()
        }
    }

    recorrerMatriz() {

    }


}