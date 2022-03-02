const inquirer = require(`inquirer`);
const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, `Intern`);
        this.school = school;
    }

    getSchool() {
        inquirer.prompt([
            {
                type: `input`,
                message: `What School is this Intern From / Currently Studying at?`,
                name: `internSchool`,
            },
        ]).then((userInput) => {
            this.school = userInput.internSchool;
            console.log(employeeArray)
        })
    }
}

module.exports = Intern;