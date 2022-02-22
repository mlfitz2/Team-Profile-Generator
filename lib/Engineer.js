//Import employee file info
const Employee = require('./Employee');

//Create Manager class
class Manager extends Employee {
    //Define all categories to be used
    constructor(name, id, email, github) {
        //Import categories to be imported from Employee file
        super(name, id, email);
        //Define new category that's not imported
        this.github = github;
    }

    //Define methods
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}