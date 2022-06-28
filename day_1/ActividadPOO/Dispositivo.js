
class DispositivoEntrada{
    constructor(){
        this._tipoEntrada = "";//= dispositivo.tipo
        this._marca = ""; //= dispositivo.marca
    }

    setTipoEntrada(tipoentrada){
        this._tipoEntrada = tipoentrada;
    }
    getTipoEntrada(){
        return this._tipoEntrada;
    }

    setMarca(marca){
        this._marca = marca;
    }
    getMarca(){
        return this._marca;
    }

}


export class Raton extends DispositivoEntrada{
    constructor(raton){
        super(raton);
        this._idRaton = raton.id;
        this._contadorRatones = raton.contador;
        this.setTipoEntrada( raton.tipo );
        this.setMarca( raton.marca )
    }

    toString(){
        return `Soy un ${this._tipoEntrada} de la marca: ${this._marca} con un id de: ${this._idRaton}.`;
    }

}

export class Teclado extends DispositivoEntrada{
    constructor(teclado){
        super(teclado);
        this._idTeclado = teclado.id;
        this.contadorTeclados = teclado.contador;
        this.setTipoEntrada( teclado.tipo );
        this.setMarca( teclado.marca )
    }

    toString(){
        return `Soy un ${this._tipoEntrada} de la marca: ${this._marca} con un id de: ${this._idTeclado}.`;
    }
}