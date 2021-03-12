export class Celula {
    constructor() {
        this.estados = { vivo: '*', muerto: '.' }
        this.estadoActual = this.establecerMuerto()
    }

    establecerVivo() {
        return this.estados.vivo // '*'
    }

    establecerMuerto() {
        return this.estados.muerto // '.'
    }

    establecerEstadoActual(estado) {
        this.estadoActual = this.estados.estado
    }
}