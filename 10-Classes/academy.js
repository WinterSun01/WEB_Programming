// JavaScript source code
class Human {
    #last_name;
    #first_name;
    #age;

    constructor(last_name, first_name, age) {
        this.#last_name = last_name;
        this.#first_name = first_name;
        this.#age = age;
    }

    get last_name() { return this.#last_name; }
    get first_name() { return this.#first_name; }
    get age() { return this.#age; }

    set last_name(value) { this.#last_name = value; }
    set first_name(value) { this.#first_name = value; }
    set age(value) { this.#age = value; }

    toString() {
        return `${this.last_name} ${this.first_name} ${this.age}`;
    }

    toJSON() {
        return {
            type: "Human",
            last_name: this.#last_name,
            first_name: this.#first_name,
            age: this.#age
        };
    }
}

class Student extends Human {
    #speciality;
    #group;
    #rating;
    #attendance;

    constructor(last_name, first_name, age, speciality, group, rating, attendance) {
        super(last_name, first_name, age);
        this.#speciality = speciality;
        this.#group = group;
        this.#rating = rating;
        this.#attendance = attendance;
    }

    toJSON() {
        return {
            type: "Student",
            last_name: this.last_name,
            first_name: this.first_name,
            age: this.age,
            speciality: this.#speciality,
            group: this.#group,
            rating: this.#rating,
            attendance: this.#attendance
        };
    }
}

class Teacher extends Human {
    #speciality;
    #experience;

    constructor(last_name, first_name, age, speciality, experience) {
        super(last_name, first_name, age);
        this.#speciality = speciality;
        this.#experience = experience;
    }

    toJSON() {
        return {
            type: "Teacher",
            last_name: this.last_name,
            first_name: this.first_name,
            age: this.age,
            speciality: this.#speciality,
            experience: this.#experience
        };
    }
}

let group = [
    new Human("Montana", "Antonio", 25),
    new Student("Pinkman", "Jessie", 22, "Chemistry", "WW_220", 90, 99),
    new Teacher("White", "Walter", 50, "Chemistry", 25)
];

function saveToFile() {
    let json = JSON.stringify(group, null, 4);
    let blob = new Blob([json], { type: "application/json" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "group.json";
    a.click();
}

function loadFromFile() {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];

    if (!file) {
        alert("Выберите файл!");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let data = JSON.parse(event.target.result);
        group = data.map(obj => {
            if (obj.type === "Student") return new Student(obj.last_name, obj.first_name, obj.age, obj.speciality, obj.group, obj.rating, obj.attendance);
            if (obj.type === "Teacher") return new Teacher(obj.last_name, obj.first_name, obj.age, obj.speciality, obj.experience);
            return new Human(obj.last_name, obj.first_name, obj.age);
        });

        console.log("Группа загружена:", group);
        displayGroup();
    };
    reader.readAsText(file);
}

function displayGroup() {
    let output = document.createElement("div");
    output.innerHTML = "<h2>Группа:</h2>" + group.map(person => person.toString()).join("<hr>");
    document.body.appendChild(output);
}
