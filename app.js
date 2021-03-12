import { GestorDeJuego } from './gestor.js'


let primeraMatriz = new GestorDeJuego(3, 3)
primeraMatriz.tablero.llenar()
primeraMatriz.tablero.imprimir()


setInterval(function() {
    primeraMatriz.generarNuevaGeneración();
    primeraMatriz.tablero.imprimir()

}, 4000);

/**
TO DO:
1. Hacemos pruebas (creation.test.js) y generamos la matriz (creation.js). 
2. Llenamos la matriz () y hacemos pruebas del llenado ()
3. Imprimos la matriz () y hacemos pruebas de la impresión ()
4. Contamos los vecinos () y hacemos pruebas del contado ()
5. Si es el caso, cambiamos el estado () y hacemos pruebas ()

Juego de la vida 
-Atributos --Clases *Metodos
 --Tablero(Generado) --Celulas -- GestorDeReglas -- app.js

 --Celula -Estado -Coordenas 
 --Celula *CambiarDeEstado
 
 -- GestorDeReglas(Tablero, Celula)
 -- GestorDeReglas *contarVecinosVivos

 -- https://docs.codeclimate.com/docs/workflow 
 https://www.theodinproject.com/courses/javascript/lessons/battleship
*/


/*
SOLID
function creation() creation.js creation.test.js
function llenado()
function print()
function contarVecinos()
function cambioDeEstado()
function print()
*/