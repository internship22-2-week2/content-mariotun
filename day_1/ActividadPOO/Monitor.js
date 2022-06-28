import {Raton,Teclado} from "./Dispositivo.js"

export class Monitor{
    constructor(monitor){
        this._idMonitor = 0; //= monitor.id;
        this._marca = ""; //= monitor.marca;
        this._tamanio = "";//= monitor.tamanio;
        this._contadorMonitores = 0;//= monitor.contador;
    }

    setId(id){
        this._idMonitor = id;
    }
    getId(){
        return this._idMonitor
    }

    setMarca(marca){
        this._marca = marca;
    }
    getMarca(){
        return this._marca
    }

    setTamanio(tamanio){
        this._tamanio = tamanio;
    }
    getTamanio(){
        return this._tamanio
    }

    setContador(contador){
        this._contadorMonitores = contador;
    }
    getContador(){
        return this._contadorMonitores
    }

    toString(){
        return `Soy un monitor de la marca ${this._marca} con un id: ${this._idMonitor} , y con un tamaño de ${this.tamanio}`;
    }

}

export class Computadora{

    constructor(){
        
        this._idComputadora = 0; //= computadora.id;
        this._nombre = ""; //= computadora.nombre;
        this._monitor = null; //= new Monitor( computadora.monitor );
        this._teclado = null; //= new Teclado( computadora.teclado );
        this._raton = null; //= new Raton( computadora.raton );
        this._contadorComputadoras = 0; //= computadora.contador;
    }

    setId (id){
        this._idComputadora = id;
    }
    getId(){
        return this._idComputadora;
    }

    setNombre (nombre){
        this._nombre = nombre;
    }
    getNombre(){
        return this._nombre;
    }

    setMonitor (monitor){
        this._monitor = monitor; //new Monitor(monitor);
    }
    getMonitor(){
        return this._monitor;
    }

    setTeclado (teclado){
        this._teclado = teclado;//new Teclado(teclado);
    }
    getTeclado(){
        return this._teclado;
    }

    setRaton(raton){
        this._raton = raton;//new Raton(raton);
    }
    getRaton(){
        return this._raton;
    }

    setContadorComputadoras (contador){
        this._contadorComputadoras = contador;
    }
    getContadorComputadoras(){
        return this._contadorComputadoras;
    }

    toString(){
        return `Soy una computadora llamada ${this._nombre} que tiene un id ${this._idComputadora}`

    }

}