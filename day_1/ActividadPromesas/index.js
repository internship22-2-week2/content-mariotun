import {Promesa,EjecucionPromesa} from "./Promesa.js"

const promesa1= new Promesa("https://flagcdn.com/es/codes.json");
const promesa2= new Promesa("https://jsonplaceholder.typicode.com/posts");
const promesa3= new Promesa("https://jsonplaceholder.typicode.com/posts/2");

const prom1 = promesa1.crearPromesa();
const prom2 = promesa2.crearPromesa();
const prom3 = promesa3.crearPromesa();

const lista = [prom1,prom2,prom3];

const ejcPromesas = new EjecucionPromesa(lista);
ejcPromesas.ejecutarConAsync()
//ejcPromesas.ejecutarConRace()
//ejcPromesas.ejecutarConAll()