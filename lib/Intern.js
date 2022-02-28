//Import Employee file info
const Employee = require('./Employee');

//Create Intern class
class Intern extends Employee {
    //Define all categories to be used
    constructor(name, id, email, school) {
        //Import the cateogories we're bringing over from Employee
        super(name, id, email);
        //Define new category that's not imported.
        this.school = school;
    }

    //Define methods
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
    printHtml() {
        return `<div class="employee-card">
        <div class="card-header">
            <h2 class="name"">${this.getName()}</h2>
            <h3 class="title">${this.getRole()}</h3>
        </div>
        <div class="employee-info">
            <p class="id">ID: ${this.getId()}</p>
            <p class="email"><a href="mailto: ${this.getEmail()}">Email: ${this.getEmail()}</a></p>
            <p class="school">School: ${this.getSchool()}</p>
        </div>
    </div>`
    }
}

module.exports = Intern;
