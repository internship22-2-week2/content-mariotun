//crear una promesa

/*const miPromesa = new Promise( (resolve,reject) => {//clase global Promise
    let estado=true;
    if(estado){
        resolve("Todo bien");
    }else{
        //reject("Todo mal");
        reject( new Error("Todo mal") );
    }

});

//--------------- ejecutar la promesa
miPromesa.then( resultado =>{
    console.log(resultado);

}).catch( error =>{
    console.log(error);

});*/

/*const promesa = new Promise( (resolve,reject) => {//clase global Promise
    let estado=false
    setTimeout( ()=>{
        if(estado){
            resolve("Todo bien");
        }else{
            reject( new Error("Todo mal") );
        }

    },4000);

});

promesa.then(resultado=>{
    console.log(resultado);
}).catch( error=>{
    console.log(error)
}).finally( ()=>{
    console.log("Finalizo")
});
*/

/*const promesa=()=>{//no se ejecuta correctamente
    let estado=false
    setTimeout( ()=>{
        if(estado){
            resolve("Todo bien");
        }else{
            reject( new Error("Todo mal") );
        }

    },4000);
}
console.log( promesa() )*/

/*const promesa = new Promise( (resolve,reject) => {//clase global Promise
    setTimeout( resolve, 5000, 5)
});

promesa.then( valor1=>{//es un encadenamiento de promesas
    console.log(valor1);
    return valor1*2;

}).then(valor2 =>{
    console.log(valor2);
    return valor2*2;

}).then(valor3 =>{
    console.log(valor3);
    return valor3*2;
})*/

/*const promesa1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Primera promesa");
})

const promesa2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Segunda promesa");
})

const promesa3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Tercera promesa");
})
*/


/*let promesas =[promesa1,promesa2,promesa3];

Promise.all(promesas).then(valores=>{
    console.log(valores)
},error =>{
    console.log(error)
})*/


//va a mostrar la primera promesa que se resuelva
/*Promise.race(promesas).then(valor =>{
    console.log(valor)
},error =>{
    console.log(error)
})*/


//--------------- FUNCIONES ASINCRONAS ---------------

function primerProceso(){
    return new Promise( (resolve,reject)=>{
        setTimeout(resolve,3000,"Primer proceso")
    })
}

function segundoProceso(){
    return new Promise( (resolve,reject)=>{
        setTimeout(resolve,5000,"Segudno proceso")
    })
}

function tercerProceso(){
    return new Promise( (resolve,reject)=>{
        setTimeout(resolve,4000,"Tercer proceso")
    })
}

async function llamarProcesos(){//funcion asicrono
    let resultado1 = await primerProceso()
    let resultado2 = await segundoProceso()
    let resultado3 = await tercerProceso()

    console.log(resultado1)
    console.log(resultado2)
    console.log(resultado3)
}

llamarProcesos();
