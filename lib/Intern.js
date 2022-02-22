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
}