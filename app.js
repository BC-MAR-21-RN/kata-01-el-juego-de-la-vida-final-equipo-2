import { GestorDeJuego } from "./gestor.js";


let primeraMatriz = new GestorDeJuego(3, 3);
primeraMatriz.tablero.llenar();
primeraMatriz.tablero.imprimir();


setInterval(function() {
    primeraMatriz.generarNuevaGeneraciĆ³n();
    primeraMatriz.tablero.imprimir();

}, 4000);