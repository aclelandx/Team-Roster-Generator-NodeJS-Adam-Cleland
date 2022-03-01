const inquirer = require(`inquirer`);

const employeeArray = [];

// Creating the parent class for the employees, this section holds the basic information that is shared within all the roles.


// creates the extended class of manager that also holds the additional information that is needed for this class.





// option one, have all of the information be attached to the classes seperately where the information is populated from a series of questions that will be input from the prompts themsleves?

// option two, have everything start from the inquirer prompt that then will grab the information based on what they are looking to add and then have it ran through from basically one singular masterclass of it.

// option three; create one master function that will populate the information by use of switch cases attached to pre-defined classes.

// All the code this is being added below this point is for the function that will begin the whole thing.

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

makePage();

