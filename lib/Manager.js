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

    printHtml() {
        return  `<div class="employee-card">
        <div class="card-header">
            <h2 class="name"">${super.getName()}</h2>
            <h3 class="title">${this.getRole()}</h3>
        </div>
        <div class="employee-info">
            <p class="id">ID: ${super.getId()}</p>
            <p class="email">Email: <a href="mailto: ${super.getEmail()}">${this.getEmail()}</a></p>
            <p class="office">Office Number: ${this.officeNumber}</p>
        </div>
    </div>`;
    }
}

module.exports = Manager;

