
import {Student,Teacher} from "./entity/Person.js"
import {Data} from "./entity/Data.js"

class Registrar{

    constructor(){
        this._data = new Data();
    }

    register(person){
        let newPerson=null;

        if( person.grade ){
            newPerson = new Student(person)    
        }else{
            newPerson =new Teacher(person)
        }
        //console.log(newPerson)
        this._data.save(newPerson)//para guardar en el archivo .json
        this.greeting(newPerson)
    }

    greeting(instance){
        instance.greet();
    }

    showData(){
        let data = this._data.getAll();
        console.table(data);
    }

    eliminarPersona(name){
        this._data.deleteData(name)
    }
} 

const student={
    name: "raul",
    age: 25,
    address: "guatemala",
    grade: 7
}
const teacher={
    name: "pablo",
    age: 35,
    address: "guatemala",
    course: "math"
}

const registerPerson = new Registrar();
//registerPerson.showData();
//registerPerson.register(student);
registerPerson.showData();

registerPerson.eliminarPersona("raul")
registerPerson.showData();

//generar un ID Y actualizar el nombre