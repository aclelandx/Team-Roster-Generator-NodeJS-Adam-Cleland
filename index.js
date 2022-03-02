const inquirer = require(`inquirer`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const teamListCreation = require(`./lib/teamListCreation`)

const newTeam = new teamListCreation();

function makePage() {
    inquirer.prompt([
        {
            type: `confirm`,
            message: `Would you like to add a new employee to your roster?`,
            name: `createNewMember`,
            default: true,
        }
    ]).then((userInput) => {
        userInput.createNewMember ? employeeRank() : console.log(`You have chosen to not add any more employee's`);
    })
}

function employeeRank() {
    inquirer.prompt([
        {
            type: `list`,
            message: `What Job level is this individual?`,
            name: `newEmployeeRole`,
            choices: [`Manager`, `Engineer`, `Intern`],
        }
    ]).then((userInput) => {
        switch (userInput.newEmployeeRole) {
            case `Manager`:
                let newManager = new Manager;
                newManager.getBasicInfo();
                break;
            case `Engineer`:
                let newEngineer = new Engineer;
                newEngineer.getBasicInfo();

                break;
            case `Intern`:
                let newIntern = new Intern;
                newIntern.getBasicInfo();
                break;
            default: makePage();
        }
    })
}

// makePage();

console.log(newTeam);
