class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, `Engineer`);
        this.github = github;
    }

    getGithub() {
        inquirer.prompt([
            {
                type: `input`,
                message: `What is the Engineer's Github Username?`,
                name: `engineerGithub`,
            },
        ]).then((userInput) => {
            this.github = userInput.engineerGithub;
            employeeArray.push(this);
            console.log(employeeArray);
            makePage();
        })
    }

}