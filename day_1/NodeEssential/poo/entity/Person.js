class Person{

    constructor(person){
        this._name = person.name;
        this._age = person.age;
        this._address = person.address
    }

}

//-------------- herencia ----------------

export class Student extends Person{

    constructor(student){
        super(student);
        this._grade = student.grade;
    }

    greet(){
        console.log(`Hello, I am ${this._name} and I am a student`);
    }
}

export class Teacher extends Person{

    constructor(teacher){
        super(teacher);
        this._course = teacher.course;
    }

    greet(){
        console.log(`Hello, I am ${this._name} and I am a teacher`);
    }
}

//export default= nombre clase

