//Import Employee file info
const Employee = require('./Employee');

//Create Manager class
class Manager extends Employee {
    //Define all categories to be used
    constructor(name, id, email, officeNumber) {
        //Import the categories to be imported from Employee file
        super(name, id, email);
        //Define new category that's not imported.
        this.officeNumber = officeNumber;
    }

    //Definie methods 
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.Exports = Manager;