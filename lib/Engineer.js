//Import employee file info
const Employee = require('./Employee');

//Create Engineer class
class Engineer extends Employee {
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

    printHtml(){
        return `<div class="employee-card">
        <div class="card-header">
            <h2 class="name"">${this.getName()}</h2>
            <h3 class="title">${this.getRole()}</h3>
        </div>
        <div class="employee-info">
            <p class="id">ID: ${this.getId()}</p>
            <p class="email">Email: <a href="mailto: ${this.getEmail()}">${this.getEmail()}</a></p>
            <p class="github">GitHub: <a href="http://www.github.com/${this.getGithub()}">${this.getGithub()}</a></p>
        </div>
    </div>`
    }
}

module.exports = Engineer;