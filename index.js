const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

async function addManager() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is your manager\'s name?'
        },
        {
            type: 'input',
            name: 'id', 
            message: 'What is your manager\'s ID number?'
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your manager\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber', 
            message: 'What is your manager\'s office number?'
        }
    ])
    //Pulls objects out of the response (object destructuring)
    const {name, id, email, officeNumber} = response;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);

    menu();
}

async function addIntern() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is your intern\'s name?'
        },
        {
            type: 'input',
            name: 'id', 
            message: 'What is your intern\'s ID number?'
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your intern\'s email?'
        },
        {
            type: 'input',
            name: 'school', 
            message: 'What is your intern\'s school?'
        }
    ])
    //Pulls objects out of the response (object destructuring)
    const {name, id, email, school} = response;
    const intern = new Intern(name, id, email, school);

    teamArray.push(intern);

    menu();
}

async function addEngineer() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is your engineer\'s name?'
        },
        {
            type: 'input',
            name: 'id', 
            message: 'What is your engineer\'s ID number?'
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is your engineer\'s email?'
        },
        {
            type: 'input',
            name: 'github', 
            message: 'What is your engineer\'s GitHub username?'
        }
    ])
    //Pulls objects out of the response (object destructuring)
    const {name, id, email, github} = response;
    const engineer = new Engineer(name, id, email, github);

    teamArray.push(engineer);

    menu();
}

async function menu() {
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'jobChoice',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'All done']
        }
    ])
    switch(response.jobChoice) {
        case 'Engineer':
            return addEngineer();
        case 'Intern':
            return addIntern();
        default:
            return buildTeam();
    }
}

async function buildTeam() {

}

addManager();