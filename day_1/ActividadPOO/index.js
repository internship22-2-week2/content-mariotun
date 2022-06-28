
import { Orden } from "./Orden.js"
import { Monitor,Computadora } from "./Monitor.js"
import { Raton,Teclado } from "./Dispositivo.js"

// -------------------- Creacion de ratones y teclados ----------------
const raton1 = new Raton({id:1, contador:30, tipo:"usb", marca:"microsoft"});
const teclado1 = new Teclado({id:10, contador:50, tipo:"hdmi", marca:"microsoft"});
// -------------------- Creacion de monitores ----------------
const monitor1 = new Monitor();
monitor1.setId(70);
monitor1.setMarca("HP");
monitor1.setTamanio("15 pulgadas");
monitor1.setContador(79);

const monitor2 = new Monitor();
monitor2.setId(85);
monitor2.setMarca("DELL");
monitor2.setTamanio("120 pulgadas");
monitor2.setContador(45);
// -------------------- Creacion de computadoras ----------------
const computadora1 = new Computadora();
computadora1.setId(1);
computadora1.setNombre("pcMario");
computadora1.setMonitor( monitor1 );
computadora1.setTeclado( teclado1 );
computadora1.setRaton( raton1 );
computadora1.setContadorComputadoras(50);

const computadora2 = new Computadora();
computadora2.setId(2);
computadora2.setNombre("pcYonathan");
computadora2.setMonitor( monitor2 );
computadora2.setTeclado( teclado1 );
computadora2.setRaton( raton1 );
computadora2.setContadorComputadoras(49);


// -------------------- Creacion de ordenes ----------------
const orden1 = new Orden();
orden1.setId(1);
orden1.agregarComputadora( computadora1 )
orden1.setContadorOrdenes(100);
orden1.mostrarOrden()

const orden2 = new Orden();
orden2.setId(2);
orden2.agregarComputadora( computadora2 )
orden2.setContadorOrdenes(105);

orden2.mostrarOrdenes();
//orden2.mostrarOrden()
//console.log( orden2.getComputadoras() );//para mostrarlo en formato Json
//orden2.eliminarComputadora(1)