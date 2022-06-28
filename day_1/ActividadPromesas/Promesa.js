//import {https} from "https"
//const https = require('https');
let https = await import('https');

export class Promesa{

    constructor(endpoint){
        this._endpoint=endpoint
    }

    crearPromesa(){

        return new Promise((resolve, reject) => {
            https.get( this._endpoint , (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }).on('error', (error) => {
                reject(error);
            });
        });

    }


}

export class EjecucionPromesa{

    constructor(listapromesas){
        this._lpromesas = listapromesas;
    }

    async ejecutarConAsync( ){
        for ( var i=0; i<this._lpromesas.length; i++){
            let result = await this._lpromesas[i];
            console.table(result);
            console.error()
        }

    }

    ejecutarConAll(){

        Promise.all(this._lpromesas).then(valores=>{
            console.log(valores)
            //console.table(valores)
        },error =>{
            console.log(error)
        })

    }

    ejecutarConRace(){//va a mostrar la primera promesa que se resuelva

        Promise.race(this._lpromesas).then(valor =>{
            console.table(valor)
        },error =>{
            console.log(error)
        })

    }

}


