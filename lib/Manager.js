// importing the required NPM packages for the functionality of this class.
const inquirer = require(`inquirer`);
const Employee = require(`./Employee`);
// creates a class of Manager that is an extension of the Employee parent class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, `Manager`);
        this.officeNumber = officeNumber;
    }
    // provides the prompt to allow the user to input the managers office number.
    async getOfficeNumber() {
        const userInput = await inquirer.prompt([
            {
                type: `input`,
                message: `What is the Office number for this Manager?`,
                name: `managersOfficeNumber`,
            }]);
        this.officeNumber = userInput.managersOfficeNumber;
    }
    // defines the method for grabbing the this.officeNumber value.
    grabOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;