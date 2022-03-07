const inquirer = require(`inquirer`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const teamListCreation = require(`./lib/teamListCreation`);

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
        userInput.createNewMember ? employeeRank() : console.log(newTeam.masterArray);
    })
}

async function employeeRank() {
    const userInput = await inquirer.prompt([
        {
            type: `list`,
            message: `What Job level is this individual?`,
            name: `newEmployeeRole`,
            choices: [`Manager`, `Engineer`, `Intern`],
        }]);
    let newTeamMember;
    switch (userInput.newEmployeeRole) {
        case `Manager`:
            newTeamMember = new Manager();
            await newTeamMember.getBasicInfo();
            await newTeamMember.getOfficeNumber();
            break;
        case `Engineer`:
            newTeamMember = new Engineer();
            await newTeamMember.getBasicInfo();
            await newTeamMember.getGithub();
            break;
        case `Intern`:
            newTeamMember = new Intern();
            await newTeamMember.getBasicInfo();
            await newTeamMember.getSchool();
            break;
        default: console.error(`Something went wrong with your selection, please try again.`);
    }
    newTeam.addTeamMember(newTeamMember);
    makePage();
}

makePage();

