import fs from "fs";
import { Data } from "./Data.js"

export class Orden{
    constructor(){
        this._idOrden = 0;
        this._computadoras = [];
        this._contadorOrdenes = 0;

        this._data = new Data();
    }

    agregarComputadora(computadora){
        this.setComputadoras(computadora)
        this._data.save(computadora)

    }

    eliminarComputadora(id){
        this._data.deleteData(id);
    }

    mostrarOrden(){
        console.table( this.getComputadoras() )
    }

    mostrarOrdenes(){
        console.log( this._data.getAll() )
    }

    setId(id){
        this._idOrden = id;
    }
    getId(){
        return this._idOrden;
    }

    setComputadoras(computadoras){
        this._computadoras.push(computadoras);
    }
    getComputadoras(){
        return this._computadoras;
    }

    setContadorOrdenes(contador){
        this._contadorOrdenes = contador;
    }
    getContadorOrdenes(){
        return this._contadorOrdenes;
    }

    toString(){
        return `Soy la orden ${this._contadorOrdenes} con computadoras ${this._computadoras}`
    }


}

