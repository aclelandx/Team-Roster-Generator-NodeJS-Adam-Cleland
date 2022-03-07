// importing required NPM packages for the functionality of this class.
const inquirer = require(`inquirer`);
const Employee = require(`./Employee`);
// creating the new class of intern that is an extension of the employee class.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, `Intern`);
        this.school = school;
    }
    // method used in order to get the interns school information from the user.
    async getSchool() {
        const userInput = await inquirer.prompt([
            {
                type: `input`,
                message: `What School is this Intern From / Currently Studying at?`,
                name: `internSchool`,
            },
        ])
        this.school = userInput.internSchool;
    }
    // method for grabbing just the this.school value from the object.
    grabSchool() {
        return this.school;
    }
}
// exporting the intern class so that it can be utilized elsewhere via import.
module.exports = Intern;