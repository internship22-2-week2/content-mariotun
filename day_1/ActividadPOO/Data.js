import fs from "fs";

export class Data {

    constructor(){
        this._path = "./data.json";
    }

    readJsonFile(){
        let contentFile = fs.readFileSync(this._path,"utf8");
        if( contentFile ){
            return JSON.parse(contentFile);
        }else{
            return [];
        }
    }

    writeJsonFile(data){
        let jsonData = JSON.stringify(data,null,"");
        fs.writeFileSync(this._path,jsonData);
    }

    save(person){
        let data = this.readJsonFile();
        data.push(person);
        this.writeJsonFile(data);
    }

    deleteData(id){
        let data = this.readJsonFile();
        let newData = data.filter(computadora => computadora._idComputadora != id);
        this.writeJsonFile(newData)
    }

    getAll(){
        return this.readJsonFile();
    }


}