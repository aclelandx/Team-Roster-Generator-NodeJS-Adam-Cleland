// importing the required NPM packages for the functionality of this class.
const inquirer = require(`inquirer`);
const Employee = require(`./Employee`);

// Creating a class of Engineer that is an extension of the Employee class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, `Engineer`);
        this.github = github;
    };
    // method used in order to obtain the users input for the engineers github username.
    async getGithub() {
        const userInput = await inquirer.prompt([
            {
                type: `input`,
                message: `What is the Engineer's Github Username?`,
                name: `engineerGithub`,
            }]);
        this.github = userInput.engineerGithub;
    };
    // Function for singling out the this.github value.
    grabGithub() {
        return this.github;
    };
};
// exporting the class of Engineer so it can be utilized elsewhere via an import.
module.exports = Engineer;