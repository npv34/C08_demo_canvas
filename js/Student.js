class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return "Ho vs Ten: " + "Phan Van " + this.name + " Age: " + this.age
    }

    setAge(newAge) {
        this.age = newAge;
    }
}