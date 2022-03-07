// imports all the required packages and classes for this application to run properly
const inquirer = require(`inquirer`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const teamListCreation = require(`./lib/teamListCreation`);
// creates a new instance of the teamListCreation Class. This is what holds the functionality for the application; along with storing the employees that have been added.
const newTeam = new teamListCreation();
// Function that begins the whole program, It will ask you if you would like to add an employee to your roster
// when No is selected, the create page method is ran and the HTML page is generated with all the information provided.
function makePage() {
    inquirer.prompt([
        {
            type: `confirm`,
            message: `Would you like to add a new employee to your roster?`,
            name: `createNewMember`,
            default: true,
        }
    ]).then((userInput) => {
        userInput.createNewMember ? employeeRank() : newTeam.createPage();
    })
}
// works as a sorter based on what kind of employee is being added to the team, directs the code to the proper class type, then runs the required methods for grabbing and setting information.
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
    // When all of the information has been gathered, then the newTeamMember is added into the masterArray inside of the newTeam object.
    newTeam.addTeamMember(newTeamMember);
    makePage();
}
// starts the application off.
makePage();

