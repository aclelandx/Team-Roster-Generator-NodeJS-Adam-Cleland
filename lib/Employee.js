// import the information from the inquirer npm package for the functionality of this class.
const inquirer = require(`inquirer`);
// creating a parent class that will have further extensions for this application.
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        // takes in the role if it has been provided, if it has not been provided Default to Employee.
        this.role = role || `Employee`;
    };
    // Asks the inquirer prompts to grab the information for the new employee.
    getBasicInfo() {
        inquirer.prompt([
            {
                type: `input`,
                message: `What is the Employee's Name?`,
                name: `employeeName`,
            },
            {
                type: `input`,
                message: `What is this Employee's ID Number?`,
                name: `employeeID`,
            },
            {
                type: `input`,
                message: `What is the Employee's Email Address?`,
                name: `employeeEmail`,
            },
            // takes the users information and changes the values of the given information, also has a switch case to direct the information in the proper direction for any additional information that is needed.
        ]).then((userInput) => {
            this.name = userInput.employeeName;
            this.id = userInput.employeeID;
            this.email = userInput.employeeEmail;
            switch (this.role) {
                case `Engineer`:
                    this.getGithub();
                    break;
                case `Manager`:
                    this.getOfficeNumber();
                    break;
                case `Intern`:
                    this.getSchool();
                    break;
                default: console.error(`The value of the Role was not properly given`);
            };
        });
    };
    // These Four are here in case we need to pull a specific variable from each one.
    grabEmployeeName() {
        return this.name;
    };

    grabEmployeeId() {
        return this.id;
    };

    grabEmployeeEmail() {
        return this.email;
    };

    grabEmployeeRole() {
        return this.role;
    };
};
// exports the Employee class so that it can be utilized elsewhere via an import.
module.exports = Employee;